import React from 'react';
import * as S from './styles';

interface CardProps {
  title: string;
  description: string;
  productImage?: string;
}

export const Card = ({title, description}: CardProps) => (
  <S.Card>
    <S.ProductImage source={require('../../images/machine-2.png')} />
    <S.InfoWrapper>
      <S.Title>{title}</S.Title>
      <S.Description numberOfLines={1}>{description}</S.Description>
    </S.InfoWrapper>
  </S.Card>
);
