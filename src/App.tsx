/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import OneSignal from 'react-native-onesignal';

import useAppearance from '~/hooks/useAppearance';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './navigation';
import {AuthProvider} from './context/Auth';

const App: React.FC = () => {
  const {theme} = useAppearance();

  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('7fe620ab-c144-43e2-81f6-09bc608e7a87');
    //END OneSignal Init Code

    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });

    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId:
        '1093132382683-5ba7jsua3jo8on2244b5kjtrd343u3i7.apps.googleusercontent.com',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
