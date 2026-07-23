import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { formsCoordinates } from './forms-coordinates';

/**
 * Prefills the PDF with ARN and EUIN codes.
 * Runs entirely on the client side in the browser.
 */
export async function prefillPDF(
  fileName: string,
  arn: string,
  euin: string
): Promise<Uint8Array> {
  const fileUrl = `/forms/${fileName}`;
  const response = await fetch(fileUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch form: ${response.statusText}`);
  }
  
  const arrayBuffer = await response.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  
  // 1. Try filling interactive form fields if present
  let filledArnInteractive = false;
  let filledEuinInteractive = false;

  const coords = formsCoordinates[fileName];

  try {
    const form = pdfDoc.getForm();
    if (form && !coords) {
      const fields = form.getFields();
      for (const field of fields) {
        const name = field.getName().toLowerCase();
        
        // Clean name from brackets/indexes
        const cleanName = name.replace(/[\[\].\d]/g, '');

        const isSubField = cleanName.includes('sub') || cleanName.includes('ria') || cleanName.includes('internal') || cleanName.includes('employee');
        if (!isSubField && (cleanName.includes('arn') || cleanName.includes('broker') || cleanName.includes('agent'))) {
          if (typeof (field as any).setText === 'function') {
            (field as any).setText(arn);
            filledArnInteractive = true;
          }
        } else if (cleanName.includes('euin')) {
          if (typeof (field as any).setText === 'function') {
            (field as any).setText(euin);
            filledEuinInteractive = true;
          }
        }
      }
      // Flatten AFTER all fields have been filled (was incorrectly inside the loop)
      if (filledArnInteractive || filledEuinInteractive) {
        form.flatten();
      }
    }
  } catch (e) {
    console.warn('Form field filling skipped:', e);
  }

  // 1.5 Clean non-widget annotations on page 1 (FreeText overlays that bypass masks)
  const pages = pdfDoc.getPages();
  if (pages.length > 0) {
    const page = pages[0];
    try {
      const annots = page.node.Annots();
      if (annots) {
        for (let i = annots.size() - 1; i >= 0; i--) {
          const annot = annots.lookup(i) as any;
          if (annot && typeof annot.get === 'function') {
            const subtypeObj = annot.get(annot.context.obj('Subtype'));
            if (subtypeObj) {
              const subtype = subtypeObj.toString();
              // Remove text, stamp, or freetext overlays that may contain prefilled details
              if (subtype !== '/Widget') {
                annots.remove(i);
              }
            }
          }
        }
      }
    } catch (e) {
      console.warn('Annotation cleaning skipped:', e);
    }
  }

  // 2. Draw text coordinates or fallback stamp
  if (pages.length > 0) {
    const page = pages[0];
    const { width, height } = page.getSize();
    
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    const coords = formsCoordinates[fileName];
    
    // Clean code representations (just the digits/letters)
    const cleanArn = arn.replace('ARN-', '');
    
    if (coords) {
      // Draw white masks to cover up any pre-existing prefilled numbers
      if (coords.masks) {
        for (const mask of coords.masks) {
          page.drawRectangle({
            x: mask.x,
            y: mask.y,
            width: mask.width,
            height: mask.height,
            color: rgb(1, 1, 1),
          });
        }
      }

      // Draw ARN
      if (coords.arn) {
        const useNumberOnly = coords.arn.numberOnly || coords.numberOnly;
        const arnTextToDraw = useNumberOnly ? cleanArn : arn;
        page.drawText(arnTextToDraw, {
          x: coords.arn.x,
          y: coords.arn.y,
          size: coords.arn.size || 8.5,
          font,
          color: rgb(0, 0, 0),
        });
      }
      
      // Draw EUIN
      if (coords.euin && euin) {
        page.drawText(euin, {
          x: coords.euin.x,
          y: coords.euin.y,
          size: coords.euin.size || 8.5,
          font,
          color: rgb(0, 0, 0),
        });
      }
    } else {
      // Fallback stamp: draw a clean stamp at the top margin
      // Draw white background banner
      page.drawRectangle({
        x: 0,
        y: height - 25,
        width: width,
        height: 25,
        color: rgb(0.95, 0.97, 1.0), // Very light blue
      });
      
      // Border below banner
      page.drawLine({
        start: { x: 0, y: height - 25 },
        end: { x: width, y: height - 25 },
        thickness: 1,
        color: rgb(0.04, 0.3, 0.55), // Brand color #0b4c8c
      });

      // Text label inside banner
      page.drawText(`DISTRIBUTOR: SAM INVESTMENTS   |   ARN: ${arn}   |   EUIN: ${euin}`, {
        x: 20,
        y: height - 17,
        size: 9,
        font,
        color: rgb(0.04, 0.3, 0.55),
      });
    }
  }

  return await pdfDoc.save();
}

/**
 * Triggers browser download of the prefilled PDF.
 */
export async function downloadPrefilledPDF(
  fileName: string,
  arn: string,
  euin: string,
  displayName: string
) {
  try {
    const pdfBytes = await prefillPDF(fileName, arn, euin);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
    // Construct nice looking output filename: Axis Mutual Fund Common Application Form (Prefilled).pdf
    const downloadName = `${displayName} (Prefilled).pdf`;

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Download failed:', error);
    alert('Failed to generate prefilled PDF form. Downloading the original instead.');
    
    // Fallback: Download the raw original PDF
    const link = document.createElement('a');
    link.href = `/forms/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
