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

enum IconProps {
  free = 'truck-outline',
}

export interface InfoProps {
  icon: Icon;
  description: string;
}
