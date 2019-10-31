import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/Auth/LoginScreen';
import SignupScreen from './../screens/Auth/SignupScreen';
import ForgotPasswordScreen from './../screens/Auth/ForgotPasswordScreen';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Signup: SignupScreen,
  ForgotPassword: ForgotPasswordScreen,
  Login: LoginScreen,
  Main: MainTabNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
