import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';

import useAppearance from './hooks/useAppearance';

import {Container} from './styles';

const App: React.FC = () => {
  const {theme} = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onPress={() => {}} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
