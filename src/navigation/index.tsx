import React, {useContext, useEffect, useState} from 'react';
import {DevSettings} from 'react-native';
import {AuthContext} from '~/context/Auth';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

// import {Container} from './styles'

const Routes: React.FC = () => {
  const {isLoggedIn} = useContext(AuthContext);

  console.log(isLoggedIn);

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
