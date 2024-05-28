import 'react-native';
import App from '../App';
import React from 'react';
import {render} from '@testing-library/react-native';

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: 'mocked-Navigator',
    Screen: 'mocked-Screen',
  }),
  TransitionPresets: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-webview', () => {});
jest.mock('react-native-splash-screen', () => {});

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({}),
  Provider: ({children}: any) => children,
}));

jest.mock('@reduxjs/toolkit', () => ({
  createAsyncThunk: jest.fn(),
  createSlice: jest.fn().mockImplementation(options => ({
    ...options,
    reducer: jest.fn(),
    actions: {},
  })),
  combineReducers: jest.fn(),
  configureStore: jest.fn(),
}));

jest.mock('redux', () => ({
  combineReducers: jest.fn(),
  applyMiddleware: jest.fn(),
  createStore: jest.fn(),
}));

const component = <App />;

describe('App', () => {
  it('renders correctly', () => {
    const container = render(component);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
