import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/navigation';

if (__DEV__) {
  global.XMLHttpRequest =
    global.originalXMLHttpRequest || global.XMLHttpRequest;
}

const navigationTheme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: '#FFFFFF'},
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#FFFFFF"
      />
      <NavigationContainer theme={navigationTheme}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
