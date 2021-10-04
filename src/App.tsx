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

const App: React.FC = () => {
  const {theme} = useAppearance();

  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'n tinha',
      refPassword.current?.value || 'n t',
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Container>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
            <Icon icon="fantasma" size={150} />
          </View>
          <View>
            <Input
              ref={refEmail}
              placeholder="jonhdoe@gmail.com"
              icon="grafico"
              iconPosition="right"
              label="E-mail"
            />
            <Separator height={10} />
            <Input
              ref={refPassword}
              placeholder="Sua senha"
              secureTextEntry
              label="Password"
            />
          </View>
          <Button color="surface" mode="outlined" onPress={handlePress}>
            Login
          </Button>
          <Separator />
        </Container>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
