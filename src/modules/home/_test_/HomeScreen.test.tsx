import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => ({state})),
  useDispatch: () => mockDispatch,
}));

const component = (
  <NavigationContainer>
    <HomeScreen />
  </NavigationContainer>
);
describe('HomeScreen', () => {
  it('renders correctly', () => {
    const {toJSON} = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
