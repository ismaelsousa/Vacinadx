/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import {InputValueRef} from '~/components/Input/types';
import Separator from '~/components/Separator';
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
