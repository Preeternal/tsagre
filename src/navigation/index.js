import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

import screens from './screens';
import {Drivers} from '../screens';
import {HeaderCenter} from './styles';

enableScreens();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {contentStyle, headerCenter, headerBack} = styles;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Drivers}
        component={Drivers}
        options={(options) => ({
          ...Platform.select({
            ios: {
              title: 'ergast',
              headerTitleStyle: headerCenter,
            },
            android: {
              headerCenter: () => <HeaderCenter>ergast</HeaderCenter>,
            },
          }),
          headerHideShadow: true,
          contentStyle,
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  headerCenter: {
    color: 'black',
    fontSize: 15,
  },
  headerLeft: {
    fontSize: 25,
    color: 'black',
  },
  headerBack: {
    fontSize: 14,
    color: 'black',
  },
  contentStyle: {backgroundColor: 'white'},
});
