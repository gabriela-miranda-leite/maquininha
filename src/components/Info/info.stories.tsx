import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Info} from '.';

export default {
  title: 'components/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

export const Basic: ComponentStory<typeof Info> = args => <Info {...args} />;

Basic.args = {
  icon: 'free',
  description: 'Frete e troca grátis pra todo o Brasil',
};
