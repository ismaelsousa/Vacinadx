import React from 'react';

import useAuth from '~/hooks/useAuth';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const {isSignedIn} = useAuth();

  return isSignedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
