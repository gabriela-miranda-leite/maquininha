import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SlideImage} from '.';

export default {
  title: 'components/SlideImage',
  component: SlideImage,
} as ComponentMeta<typeof SlideImage>;

export const Basic: ComponentStory<typeof SlideImage> = args => (
  <SlideImage {...args} />
);

Basic.args = {
  images: [
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-1',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-2',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-3',
  ],
};
