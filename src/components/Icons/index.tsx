import React from 'react';
import {ListBullets, Question} from 'phosphor-react-native';
import {IconsProps} from './icons.type';
import {defaultTheme} from '../../theme';

const iconComponents = {
  ListBullets: ListBullets,
  Question: Question,
};

export const Icons = ({type}: IconsProps) => {
  const IconComponent = iconComponents[type];

  return <IconComponent color={defaultTheme.colors.white} />;
};
