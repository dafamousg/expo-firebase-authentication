import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../screens/TestScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const TestStack = createStackNavigator(
  {
    Test: TestScreen,
  },
  config
);

TestStack.navigationOptions = {
  tabBarLabel: 'Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

TestStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TestStack,
});

tabNavigator.path = '';

export default tabNavigator;
