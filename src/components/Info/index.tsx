import React from 'react';
import * as S from './styles';
import {InfoProps} from './info.type';

import {Horse, Heart, Cube} from 'phosphor-react-native';

export const Info = ({description, icon}: InfoProps) => (
  <S.Info testID="info">
    <Heart color="#AE2983" weight="fill" size={32} />
    <S.Description>{description}</S.Description>
  </S.Info>
);
