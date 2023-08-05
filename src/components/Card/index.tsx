import React from 'react';

import {CardProps} from './card.type';
import * as S from './styles';

export const Card = ({title, description}: CardProps) => (
  <S.Card testID="card">
    <S.ProductImage source={require('../../images/machine-2.png')} />
    <S.InfoWrapper>
      <S.Title>{title}</S.Title>
      <S.Description numberOfLines={1}>{description}</S.Description>
    </S.InfoWrapper>
  </S.Card>
);
