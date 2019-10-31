import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/Auth/LoginScreen';
import SignupScreen from './../screens/Auth/SignupScreen';
import ForgotPasswordScreen from './../screens/Auth/ForgotPasswordScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgotPassword: ForgotPasswordScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Login',
  }
  )
);
