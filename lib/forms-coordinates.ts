export interface FormFieldCoords {
  x: number;
  y: number;
  size?: number;
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
    arn: { x: 35, y: 700, size: 8.5 },
    euin: { x: 315, y: 700, size: 8.5 },
  },
  'Bandhan_SIP_Form.pdf': {
    arn: { x: 35, y: 700, size: 8.5 },
    euin: { x: 315, y: 700, size: 8.5 },
  },

  // Edelweiss
  'Edelweiss_Common_Transaction_Slip.pdf': {
    arn: { x: 120, y: 712, size: 8 },
    euin: { x: 340, y: 712, size: 8 },
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
  'HDFC_SIP_Form.pdf': {
    arn: { x: 88, y: 690, size: 8 },
    euin: { x: 430, y: 690, size: 8 },
  },

  // ICICI
  'ICICI_Common_Transaction_Slip.pdf': {
    arn: { x: 38, y: 772, size: 8 },
    euin: { x: 285, y: 764, size: 8 },
  },
  'ICICI_SIP_Form.pdf': {
    arn: { x: 60, y: 712, size: 8 },
    euin: { x: 515, y: 694, size: 8 },
  },

  // Invesco
  'Invesco_SIP_Form.pdf': {
    arn: { x: 252, y: 720, size: 8 },
    euin: { x: 360, y: 694, size: 8 },
  },

  // JM Financial
  'JM_Common_Transaction_Slip.pdf': {
    arn: { x: 55, y: 692, size: 8.5 }, // Calibrated to avoid Y=678 declaration overlap
    euin: { x: 138, y: 692, size: 8.5 }, // Calibrated next to E label
  },
  'JM_SIP_Form.pdf': {
    arn: { x: 52, y: 735, size: 8 },
    euin: { x: 345, y: 735, size: 8 },
  },

  // Kotak
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
      { x: 190, y: 735, width: 115, height: 18 }
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
    arn: { x: 50, y: 732, size: 8 },
  },
  'Nippon_SIP_Form.pdf': {
    arn: { x: 30, y: 750, size: 8 }, // Shifted inside ARN Stamp box
    euin: { x: 365, y: 750, size: 8 }, // Added EUIN coordinate
  },

  // Sundaram
  'Sundaram_Common_Transaction_Slip.pdf': {
    arn: { x: 52, y: 766, size: 8 }, // Calibrated to avoid proximity overlap
    euin: { x: 408, y: 766, size: 8 },
  },
  'Sundaram_SIP_Form.pdf': {
    arn: { x: 55, y: 775, size: 8 },
    euin: { x: 268, y: 775, size: 8 },
    masks: [
      { x: 52, y: 770, width: 60, height: 18 }
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
