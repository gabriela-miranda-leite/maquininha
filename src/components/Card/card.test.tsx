import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react-native';

import {Card} from '.';
import {CardProps} from './card.type';

const defaultProps: CardProps = {
  title: 'Maquininha T1',
  description: 'À partir de 12x de R$ 1,90',
  productImage: '',
  id: '1',
  onPress: jest.fn(),
};

const create = (props = defaultProps) => render(<Card {...props} />);

describe('Card', () => {
  it('render correctly Card component', () => {
    create();
    const CardComponent = screen.queryByTestId('card');
    const TextComponent = screen.queryByText(defaultProps.title);

    expect(CardComponent).toBeTruthy();
    expect(TextComponent).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const {getByTestId} = create();
    const CardComponent = getByTestId('card');
    fireEvent.press(CardComponent);

    expect(defaultProps.onPress).toHaveBeenCalled();
  });
});
