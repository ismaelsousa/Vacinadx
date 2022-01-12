/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ThemeProvider} from 'styled-components';

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
        '814263965390-oi9s27icghvh94ocqc8rdfbf583hed9m.apps.googleusercontent.com',
    });
    console.log('Config Google');
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
