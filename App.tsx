import 'react-native-gesture-handler';
import {store} from './src';
import {Colors} from './src/theme';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {StackNavigation} from './src/navigators';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.headerBackground}
      />
      <StackNavigation />
    </Provider>
  );
};

export default App;
