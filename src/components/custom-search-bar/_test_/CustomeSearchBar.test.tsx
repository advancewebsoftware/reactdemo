import React from 'react';
import {render} from '@testing-library/react-native';
import CustomeSearchBar from '../CustomeSearchBar';

const component = <CustomeSearchBar onCancelPress={()=>{}} />;

describe('CustomeSearchBar', () => {
  it('renders correctly', () => {
    const {toJSON} = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
