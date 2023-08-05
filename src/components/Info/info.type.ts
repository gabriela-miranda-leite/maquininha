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

enum IconProps {
  free = 'truck-outline',
}

export interface InfoProps {
  icon: Icon;
  description: string;
}
