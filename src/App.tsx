/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Alert} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {InputValueRef} from '~/components/Input/types';
import useAppearance from '~/hooks/useAppearance';
import {NavigationContainer} from '@react-navigation/native';

import {Container} from './styles';
import Routes from './navigation';

const App: React.FC = () => {
  const {theme} = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
