import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

import {CardProps} from './card.type';
import * as S from './styles';

type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MachineInfo'
>;

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
