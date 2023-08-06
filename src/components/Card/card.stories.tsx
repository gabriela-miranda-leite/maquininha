import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Card} from '.';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = args => <Card {...args} />;

Basic.args = {
  title: 'T1 Promo',
  id: '0',
  description: 'À partir de 12x de R$ 8,90',
  productImage:
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_128,q_100/site-ton/maquininhas/machine-t1-1',
};
