import React from 'react';

import {CardProps} from './card.type';
import * as S from './styles';

export const Card = ({
  title,
  description,
  id,
  productImage,
  onPress,
}: CardProps) => {
  return (
    <S.Card testID="card" onPress={onPress} key={id}>
      <S.ProductImage
        source={{
          uri: `${productImage}`,
        }}
      />

      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Description numberOfLines={1}>{description}</S.Description>
      </S.InfoWrapper>
    </S.Card>
  );
};
