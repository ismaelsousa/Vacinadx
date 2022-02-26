import appleAuth from '@invertase/react-native-apple-authentication';
import React, {useEffect} from 'react';

import useAuth from '~/hooks/useAuth';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const {isSignedIn, signOut} = useAuth();

  useEffect(() => {
    if (!appleAuth.isSupported) {
      return;
    }
    return appleAuth.onCredentialRevoked(async () => {
      signOut();
      console.log(
        'If this function executes, User Credentials have been revoked',
      );
    });
  }, [signOut]);

  return isSignedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
