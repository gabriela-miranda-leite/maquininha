import React from 'react';
import {screen, render} from '@testing-library/react-native';

import {SlideImage} from '.';
import {SlideImageProps} from './slideImage.type';

const defaultProps: SlideImageProps = {
  images: [
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-1',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-2',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-3',
  ],
};

const create = (props = defaultProps) => render(<SlideImage {...props} />);

describe('Icons', () => {
  it('render correctly Icons component', () => {
    create();
    const IconsComponent = screen.queryByTestId('slideImage');

    expect(IconsComponent).toBeTruthy();
  });
});
