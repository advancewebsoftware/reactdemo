import 'react-native';
import React from 'react';
import WebViewScreen from '../WebViewScreen';
import { render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('react-native-webview', () => {});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: jest.fn(() => ({
    params: {
      props: 'www.example.com',
    },
  })),
}));

const component = (
  <NavigationContainer>
    <WebViewScreen />
  </NavigationContainer>
);
describe('WebViewScreen', () => {
  it('renders correctly', () => {
    const {toJSON} = render(component);
    expect(toJSON()).toMatchSnapshot();
  });
});
