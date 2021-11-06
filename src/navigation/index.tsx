import React, {useEffect, useState} from 'react';
import {DevSettings} from 'react-native';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

// import {Container} from './styles'

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () =>
      DevSettings.addMenuItem('Change Routes', () =>
        setIsLoggedIn(old => !old),
      ),
    [],
  );

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
