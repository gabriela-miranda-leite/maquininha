import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {IconDetail} from '.';

export default {
  title: 'components/IconDetail',
  component: IconDetail,
} as ComponentMeta<typeof IconDetail>;

export const Basic: ComponentStory<typeof IconDetail> = args => (
  <IconDetail {...args} />
);

Basic.args = {
  type: 'free',
  description: 'Frete e troca grátis pra todo o Brasil',
};
