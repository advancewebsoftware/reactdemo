import React from 'react';
import {HomeScreen, WebViewScreen} from '../../modules';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigatorProps, RoutePage} from '../../types';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackNavigatorProps>();

// Main Navigation component

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RoutePage.Home} component={HomeScreen} />
        <Stack.Screen
          name={RoutePage.WebView}
          component={WebViewScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.ModalFadeTransition,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
