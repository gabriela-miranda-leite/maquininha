import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {CardProps, ProfileScreenProps} from './card.type';
import * as S from './styles';

export const Card = ({title, description, id, productImage}: CardProps) => {
  const navigation = useNavigation<ProfileScreenProps>();

  return (
    <S.Card
      testID="card"
      onPress={() => navigation.navigate('MachineInfo', {name: title, id})}
      key={id}>
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
