import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react-native';

import {Icons} from '.';
import {IconsProps} from './icons.type';

const defaultProps: IconsProps = {
  type: 'ListBullets',
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const create = (props = defaultProps) => render(<Icons {...props} />);

describe('Icons', () => {
  it('render correctly Icons component', () => {
    const {getByTestId} = create();
    const navigateMock = jest.fn();
    const IconsComponent = getByTestId('icons');

    expect(IconsComponent).toBeTruthy();
    fireEvent.press(IconsComponent);
    expect(navigateMock).toHaveBeenCalled();
  });

  it('render correctly Icons is Question type', () => {
    const {getByTestId} = create({type: 'Question'});
    const navigateMock = jest.fn();
    const IconsComponent = getByTestId('icons');

    expect(IconsComponent).toBeTruthy();

    fireEvent.press(IconsComponent);
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
