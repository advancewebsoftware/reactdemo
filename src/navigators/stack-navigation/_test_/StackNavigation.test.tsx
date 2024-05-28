import {render} from '@testing-library/react-native';
import React from 'react';
import StackNavigation from '../StackNavigation';

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
  TransitionPresets: jest.fn(),
}));

jest.mock('react-redux', () => ({
  Provider: jest.fn(),
}));

jest.mock('react-native-webview', () => {});

const component = <StackNavigation />;

describe('StackNavigate', () => {
  it('renders correctly', () => {
    const container = render(component);

    expect(container.toJSON()).toMatchSnapshot();
  });
});
