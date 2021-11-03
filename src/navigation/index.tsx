import React from 'react';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

// import {Container} from './styles'

const Routes: React.FC = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
