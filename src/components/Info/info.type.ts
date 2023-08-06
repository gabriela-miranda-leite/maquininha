type Icon =
  | 'free'
  | 'businessDay'
  | 'cellphone'
  | 'wifi'
  | 'nfc'
  | 'sms'
  | 'tapTon'
  | 'receipt'
  | 'battery'
  | 'touchscreen'
  | 'pix';

export interface InfoProps {
  icon: Icon;
  description: string;
}
