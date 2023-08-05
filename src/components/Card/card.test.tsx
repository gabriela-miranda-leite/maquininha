import React from 'react';
import {screen, render} from '@testing-library/react-native';

import {Card} from '.';
import {CardProps} from './card.type';

const defaultProps: CardProps = {
  title: 'Maquininha T1',
  description: 'À partir de 12x de R$ 1,90',
};

const create = (props = defaultProps) => render(<Card {...props} />);

describe('Card', () => {
  it('render correctly Card component', () => {
    create();
    const CardComponent = screen.queryByTestId('card');

    expect(CardComponent).toBeTruthy();
  });
});
