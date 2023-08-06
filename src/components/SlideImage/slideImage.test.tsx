import React from 'react';
import {fireEvent, screen, render} from '@testing-library/react-native';

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

describe('SlideImage', () => {
  it('render correctly SlideImage component', () => {
    create();
    const SlideImageComponent = screen.queryByTestId('slideImage');

    expect(SlideImageComponent).toBeTruthy();
  });

  it('press image', () => {
    const {getAllByTestId, getByTestId} = create();
    const optionImage = getAllByTestId('optionImage');
    fireEvent.press(optionImage[1]);

    const mainImage = getByTestId('mainImage');

    expect(mainImage.props.source).toEqual({
      uri: 'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_384,q_auto/site-ton/maquininhas/machine-t2-2',
    });
  });
});
