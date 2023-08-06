export type IconDetailType =
  | 'free'
  | 'businessDay'
  | 'cellphone'
  | 'sms'
  | 'wifi'
  | 'pix'
  | 'receipt'
  | 'battery'
  | 'tapTon'
  | 'nfc'
  | 'touchscreen';

export interface IconDetailProps {
  type: IconDetailType;
  description: string;
}
