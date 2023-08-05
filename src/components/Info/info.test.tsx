import React from 'react';
import {screen, render} from '@testing-library/react-native';

import {Info} from '.';
import {InfoProps} from './info.type';

const defaultProps: InfoProps = {
  description: 'Frete e troca grátis pra todo o Brasil',
  icon: 'free',
};

const create = (props = defaultProps) => render(<Info {...props} />);

describe('Card', () => {
  it('render correctly Info component', () => {
    create();
    const CardComponent = screen.queryByTestId('info');

    expect(CardComponent).toBeTruthy();
  });
});
