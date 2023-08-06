import React from 'react';
import {screen, render} from '@testing-library/react-native';

import {IconDetail} from '.';
import {IconDetailProps} from './iconDetail.type';

const defaultProps: IconDetailProps = {
  type: 'free',
  description: 'Frete e troca grátis pra todo o Brasil',
};

const create = (props = defaultProps) => render(<IconDetail {...props} />);

describe('IconDetail', () => {
  it('render correctly IconDetail component', () => {
    create();
    const IconDetailComponent = screen.queryByTestId('iconDetail');

    expect(IconDetailComponent).toBeTruthy();
  });
});
