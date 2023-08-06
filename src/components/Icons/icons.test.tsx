import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '.';
import {IconsProps} from './icons.type';

const defaultProps: IconsProps = {
  type: 'ListBullets',
};

jest.mock('@react-navigation/native');

const create = (props = defaultProps) => render(<Icons {...props} />);

describe('Icons', () => {
  it('render correctly Icons component', () => {
    const {getByTestId} = create();
    const navigateMock = jest.fn();

    (useNavigation as jest.Mock).mockImplementation(() => ({
      navigate: navigateMock,
    }));

    const IconsComponent = getByTestId('icons');

    expect(IconsComponent).toBeTruthy();
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
