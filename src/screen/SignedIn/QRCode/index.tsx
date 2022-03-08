/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {
  Pressable,
  StatusBar,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';

import {Container, Content, Scroll} from './styles';

const QRCode: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();
  const {width} = useWindowDimensions();
  const cameraStyle = useMemo<ViewStyle>(
    () => ({
      marginTop: 40,
      flex: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: width * 0.5,
      width: width * 0.5,
    }),
    [width],
  );
  return (
    <Container>
      <Scroll>
        <Content>
          <StatusBar barStyle={'dark-content'} />
          <Separator height={spacing.md} />
          <Pressable onPress={goBack}>
            <Icon icon="back" size={15} />
          </Pressable>
          <Separator height={spacing.md} />
          <Text typography="h7">Ler Code code</Text>
          <Separator height={spacing.sm} />
          <Text typography="caption">
            {'Posicione o código QR dentro da área'}
          </Text>
          <Separator height={spacing.lg} />
        </Content>

        <QRCodeScanner
          onRead={e => console.log(e.data)}
          cameraStyle={cameraStyle}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </Scroll>
    </Container>
  );
};

export default QRCode;
