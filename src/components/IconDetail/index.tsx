import React from 'react';
import {
  Truck,
  WifiHigh,
  Coins,
  DeviceMobile,
  Chat,
  CurrencyDollarSimple,
  Broadcast,
  BatteryCharging,
  Receipt,
  QrCode,
  FingerprintSimple,
} from 'phosphor-react-native';
import {IconDetailProps} from './iconDetail.type';

import {defaultTheme} from '../../theme';
import * as S from './styles';

const iconComponents = {
  free: Truck,
  businessDay: Coins,
  cellphone: DeviceMobile,
  sms: Chat,
  wifi: WifiHigh,
  pix: QrCode,
  receipt: Receipt,
  battery: BatteryCharging,
  tapTon: CurrencyDollarSimple,
  nfc: Broadcast,
  touchscreen: FingerprintSimple,
};

export const IconDetail = ({type, description, key}: IconDetailProps) => {
  const IconComponent = iconComponents[type];

  return (
    <S.IconDetail key={key}>
      <IconComponent color={defaultTheme.colors.primary} size={24} />
      <S.TextDetail>{description}</S.TextDetail>
    </S.IconDetail>
  );
};
