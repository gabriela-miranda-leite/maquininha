import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {ListBullets, Question} from 'phosphor-react-native';

import {IconsProps, ProfileScreenProps} from './icons.type';
import {defaultTheme} from '../../theme';

import * as S from './styles';

const iconComponents = {
  ListBullets: ListBullets,
  Question: Question,
};

export const Icons = ({type}: IconsProps) => {
  const navigation = useNavigation<ProfileScreenProps>();
  const IconComponent = iconComponents[type];

  const onPress = () => {
    if (type === 'ListBullets') {
      return navigation.navigate('Machines');
    }
    return () => {};
  };

  return (
    <S.Icons onPress={onPress}>
      <IconComponent color={defaultTheme.colors.white} />
    </S.Icons>
  );
};
