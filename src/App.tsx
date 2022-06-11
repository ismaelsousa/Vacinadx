/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import useAppearance from '~/hooks/useAppearance';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './navigation';
import {AuthProvider} from './context/Auth';

const App: React.FC = () => {
  const {theme} = useAppearance();

  useEffect(() => {
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
