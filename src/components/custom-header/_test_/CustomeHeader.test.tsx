import React from 'react';
import {render} from '@testing-library/react-native';
import CustomHeader from '../CustomHeader';

const component = <CustomHeader isHome={false} />;

describe('CustomHeader', () => {
  it('renders correctly', () => {
    const {toJSON} = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
