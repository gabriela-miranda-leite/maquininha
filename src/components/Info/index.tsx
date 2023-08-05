import React from 'react';
import * as S from './styles';
import {InfoProps} from './info.type';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Info = ({description, icon}: InfoProps) => (
  <S.Info testID="info">
    <Icon name="add" size={20} color="#32a" />
    <S.Description>{description}</S.Description>
  </S.Info>
);
