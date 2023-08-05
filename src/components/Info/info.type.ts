type Icon =
  | 'free'
  | 'businessDay'
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
