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
}

export const formsCoordinates: Record<string, FormCoords> = {
  // Axis
  'Axis_Common_Transaction_Slip.pdf': {
    arn: { x: 30, y: 726, size: 8 },
    euin: { x: 350, y: 726, size: 8 },
  },
  'Axis_SIP_Form.pdf': {
    arn: { x: 48, y: 648, size: 8 },
    euin: { x: 48, y: 622, size: 8 },
  },

  // Bandhan
  'Bandhan_Common_Transaction_Slip.pdf': {
    arn: { x: 35, y: 700, size: 8.5, numberOnly: true },
    euin: { x: 315, y: 700, size: 8.5 },
  },
  'Bandhan_SIP_Form.pdf': {
    arn: { x: 35, y: 694, size: 8, numberOnly: true },
    euin: { x: 315, y: 694, size: 8 },
  },

  // BOI
  'BOI_Common_Transaction_Slip.pdf': {
    arn: { x: 30, y: 732, size: 8 },
    euin: { x: 320, y: 732, size: 8 },
  },
  'BOI_SIP_Form.pdf': {
    arn: { x: 30, y: 732, size: 8 },
    euin: { x: 320, y: 732, size: 8 },
  },

  // Edelweiss
  'Edelweiss_Common_Transaction_Slip.pdf': {
    arn: { x: 63, y: 698, size: 8 },
    euin: { x: 175, y: 698, size: 8 },
  },
  'Edelweiss_SIP_Form.pdf': {
    arn: { x: 63, y: 695, size: 8 },
    euin: { x: 277, y: 695, size: 8 },
    masks: [
      { x: 60, y: 690, width: 60, height: 18 },
      { x: 274, y: 690, width: 60, height: 18 }
    ]
  },

  // HDFC
  'HDFC_Common_Transaction_Slip.pdf': {
    arn: { x: 88, y: 752, size: 8 },
    euin: { x: 420, y: 752, size: 8 },
  },
  'HDFC_SIP_Form.pdf': {
    arn: { x: 88, y: 690, size: 8, numberOnly: true },
    euin: { x: 430, y: 690, size: 8 },
  },

  // ICICI
  'ICICI_Common_Transaction_Slip.pdf': {
    arn: { x: 38, y: 788, size: 8 },
    euin: { x: 285, y: 788, size: 8 },
  },
  'ICICI_SIP_Form.pdf': {
    arn: { x: 60, y: 712, size: 8 },
    euin: { x: 515, y: 694, size: 8 },
  },

  // Invesco
  'Invesco_Common_Transaction_Slip.pdf': {
    arn: { x: 270, y: 744, size: 7.5 },
    euin: { x: 248, y: 715, size: 7.5 },
  },
  'Invesco_SIP_Form.pdf': {
    arn: { x: 275, y: 744, size: 7.5, numberOnly: true },
    euin: { x: 248, y: 715, size: 7.5 },
  },

  // JM Financial
  'JM_Common_Transaction_Slip.pdf': {
    arn: { x: 55, y: 692, size: 8.5 },
    euin: { x: 138, y: 692, size: 8.5 },
  },
  'JM_SIP_Form.pdf': {
    arn: { x: 52, y: 745, size: 8, numberOnly: true },
    euin: { x: 345, y: 745, size: 8 },
  },

  // Kotak
  'Kotak_Common_Transaction_Slip.pdf': {
    arn: { x: 98, y: 755, size: 8 },
    euin: { x: 515, y: 755, size: 8 },
  },
  'Kotak_SIP_Form.pdf': {
    arn: { x: 98, y: 755, size: 8 },
    euin: { x: 515, y: 755, size: 8 },
  },

  // Mirae Asset
  'Mirae_Common_Transaction_Slip.pdf': {
    arn: { x: 30, y: 748, size: 8 },
    euin: { x: 400, y: 748, size: 8 },
  },
  'Mirae_SIP_Form.pdf': {
    arn: { x: 68, y: 728, size: 8 },
    euin: { x: 348, y: 728, size: 8 },
  },

  // Motilal Oswal
  'Motilal_Common_Transaction_Slip.pdf': {
    arn: { x: 194, y: 740, size: 8 },
    euin: { x: 446, y: 740, size: 8 },
    masks: [
      { x: 190, y: 735, width: 115, height: 18 },
      { x: 442, y: 735, width: 65, height: 18 }
    ]
  },
  'Motilal_SIP_Form.pdf': {
    arn: { x: 36, y: 755, size: 8 },
    masks: [
      { x: 32, y: 750, width: 80, height: 18 }
    ]
  },

  // Nippon India
  'Nippon_Common_Transaction_Slip.pdf': {
    arn: { x: 22, y: 746, size: 8, numberOnly: true },
    euin: { x: 378, y: 746, size: 8 },
  },
  'Nippon_SIP_Form.pdf': {
    arn: { x: 15, y: 751, size: 8, numberOnly: true },
    euin: { x: 358, y: 751, size: 8 },
  },

  // Sundaram
  'Sundaram_Common_Transaction_Slip.pdf': {
    arn: { x: 52, y: 766, size: 8 },
    euin: { x: 408, y: 766, size: 8 },
  },
  'Sundaram_SIP_Form.pdf': {
    arn: { x: 55, y: 775, size: 8, numberOnly: true },
    euin: { x: 330, y: 775, size: 7.5 },
    masks: [
      { x: 52, y: 770, width: 60, height: 18 },
      { x: 327, y: 770, width: 115, height: 14 }
    ]
  },

  // WhiteOak
  'WhiteOak_Common_Transaction_Slip.pdf': {
    arn: { x: 58, y: 712, size: 8 },
    euin: { x: 349, y: 712, size: 8 },
  },
  'WhiteOak_SIP_Form.pdf': {
    arn: { x: 80, y: 721, size: 8 },
    euin: { x: 412, y: 721, size: 8 },
  },
};
