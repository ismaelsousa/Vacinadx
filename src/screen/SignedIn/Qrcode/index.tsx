import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {
  Pressable,
  StatusBar,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import {useTheme} from 'styled-components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Text from '~/components/Text';

import {Container, Content, Scroll} from './styles';

const Qrcode: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();
  const {width} = useWindowDimensions();

  const cameraStyle = useMemo(
    () =>
      ({
        marginTop: 40,
        flex: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: width * 0.7,
        width: width * 0.7,
      } as ViewStyle),
    [width],
  );

  return (
    <Container>
      <Scroll>
        <Content>
          <StatusBar barStyle={'dark-content'} />
          <Separator height={spacing.md} />
          <Pressable onPress={goBack}>
            <Icon icon="closeX" size={15} />
          </Pressable>
          <Separator height={spacing.md} />
          <Text typography="h7">Ler QR code</Text>
          <Separator height={spacing.sm} />
          <Text typography="caption">Posicione o código QR dentro da área</Text>
          <Separator height={spacing.lg} />
        </Content>
        <QRCodeScanner
          cameraStyle={cameraStyle}
          onRead={e => console.log(e.data)}
          flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </Scroll>
    </Container>
  );
};

export default Qrcode;
