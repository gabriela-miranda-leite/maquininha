import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Icons} from '.';

export default {
  title: 'components/Icons',
  component: Icons,
} as ComponentMeta<typeof Icons>;

export const Basic: ComponentStory<typeof Icons> = args => <Icons {...args} />;

Basic.args = {
  type: 'ListBullets',
};
