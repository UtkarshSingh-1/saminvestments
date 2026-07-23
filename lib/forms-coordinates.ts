export interface FormFieldCoords {
  x: number;
  y: number;
  size?: number;
  numberOnly?: boolean;
}

export interface MaskBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FormCoords {
  arn?: FormFieldCoords;
  euin?: FormFieldCoords;
  masks?: MaskBox[];
  numberOnly?: boolean;
  pages?: {
    pageIndex: number;
    arn?: FormFieldCoords;
    euin?: FormFieldCoords;
    masks?: MaskBox[];
  }[];
}

export const formsCoordinates: Record<string, FormCoords> = {
  // Axis Mutual Fund (Common App + SIP)
  'Axis-Common-Application-Form-with-SIP.pdf': {
    arn: { x: 75, y: 648, size: 8.5, numberOnly: true },
    euin: { x: 82, y: 622, size: 8.5 },
  },
  'Axis_Common_Transaction_Slip.pdf': {
    arn: { x: 75, y: 648, size: 8.5, numberOnly: true },
    euin: { x: 82, y: 622, size: 8.5 },
  },

  // Bandhan Mutual Fund
  'bandhan.app.sip.pdf': {
    arn: { x: 70, y: 722, size: 8.5, numberOnly: true },
    euin: { x: 345, y: 722, size: 8.5, numberOnly: true },
  },

  // BOI Mutual Fund
  'BOI_ApplicationForm_0.pdf': {
    arn: { x: 65, y: 720, size: 8.5 },
    euin: { x: 235, y: 720, size: 8.5 },
  },
  'BOI-sip.pdf': {
    arn: { x: 65, y: 692, size: 8.5 },
    euin: { x: 235, y: 692, size: 8.5 },
  },

  // Edelweiss Mutual Fund
  'Edelwess.common.Application form_0.pdf': {
    arn: { x: 60, y: 710, size: 8.5 },
    euin: { x: 240, y: 710, size: 8.5 },
  },
  'edelweiss.app.sip.pdf': {
    arn: { x: 88, y: 708, size: 8.5, numberOnly: true },
    euin: { x: 375, y: 708, size: 8.5 },
  },

  // HDFC Mutual Fund
  'HDFC-Common-Application-Form.pdf': {
    arn: { x: 98, y: 668, size: 8, numberOnly: true },
    euin: { x: 380, y: 668, size: 8 },
  },
  'hdfc.app.sip.pdf': {
    arn: { x: 88, y: 690, size: 8, numberOnly: true },
    euin: { x: 430, y: 690, size: 8 },
  },

  // ICICI Prudential Mutual Fund (Combined Common App + SIP Mandate)
  'icici-app sip.pdf': {
    arn: { x: 50, y: 758, size: 8.5 },
    euin: { x: 520, y: 758, size: 8.5 },
    pages: [
      {
        pageIndex: 0,
        arn: { x: 50, y: 758, size: 8.5 },
        euin: { x: 520, y: 758, size: 8.5 }
      },
      {
        pageIndex: 1,
        arn: { x: 50, y: 485, size: 8.5 },
        euin: { x: 520, y: 485, size: 8.5 }
      },
      {
        pageIndex: 3,
        arn: { x: 50, y: 215, size: 8.5 },
        euin: { x: 520, y: 215, size: 8.5 }
      }
    ]
  },

  // Invesco Mutual Fund
  'invesco.app.sip.pdf': {
    arn: { x: 275, y: 728, size: 7.5, numberOnly: true },
    euin: { x: 275, y: 690, size: 7.5 },
  },

  // JM Financial Mutual Fund
  'JM-Application Forms (2).pdf': {
    arn: { x: 75, y: 644, size: 8.5, numberOnly: true },
    euin: { x: 138, y: 644, size: 8.5, numberOnly: true },
  },

  // Kotak Mutual Fund
  'Kotak-Common-Application-Form-with-SIP.pdf': {
    arn: { x: 75, y: 760, size: 8, numberOnly: true },
    euin: { x: 500, y: 760, size: 8 },
  },

  // Mirae Asset Mutual Fund
  'mirae.app.sip.pdf': {
    arn: { x: 30, y: 708, size: 8 },
    euin: { x: 320, y: 708, size: 8 },
  },

  // Motilal Oswal Mutual Fund
  'Motilal--Application-Form.pdf': {
    arn: { x: 25, y: 715, size: 8 },
    euin: { x: 486, y: 715, size: 8 },
    masks: [
      { x: 20, y: 711, width: 95, height: 15 },
      { x: 481, y: 711, width: 93, height: 15 }
    ]
  },
  'Motilal-Common-Application-Form-with-SIP.pdf': {
    arn: { x: 25, y: 715, size: 8 },
    euin: { x: 486, y: 715, size: 8 },
    masks: [
      { x: 20, y: 711, width: 95, height: 15 },
      { x: 481, y: 711, width: 93, height: 15 }
    ]
  },

  // Nippon India Mutual Fund
  'Nippon-app-SIP-FORM.pdf': {
    arn: { x: 22, y: 746, size: 8, numberOnly: true },
    euin: { x: 378, y: 746, size: 8 },
  },

  // Sundaram Mutual Fund
  'Sundaram-Common-Application-Form-with-SIP.pdf': {
    arn: { x: 30, y: 746, size: 8 },
    euin: { x: 330, y: 746, size: 8 },
  },

  // WhiteOak Capital Mutual Fund
  'whiteoak.common_Application_Form_96f2378ffb.pdf': {
    arn: { x: 40, y: 680, size: 8 },
    euin: { x: 325, y: 680, size: 8 },
  },
  'whiteoak.sip.pdf': {
    arn: { x: 40, y: 689, size: 8 },
    euin: { x: 325, y: 689, size: 8 },
  },
};
