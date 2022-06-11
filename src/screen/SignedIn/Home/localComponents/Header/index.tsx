import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import headerImage from '~/assets/images/header.png';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useAuth from '~/hooks/useAuth';
import {Avatar, Container, Row} from './styles';

const Header: React.FC = () => {
  const {spacing} = useTheme();
  const {user} = useAuth();

  return (
    <Container source={headerImage}>
      <Row>
        <View>
          <Text color="background" typography="h5">
            Bem-vindx
          </Text>
          <Text color="background" typography="h6">
            {user?.firstName}
          </Text>
        </View>
        <Avatar source={{uri: user?.avatar}} />
      </Row>
      <Separator height={spacing.xs} />
    </Container>
  );
};

export default Header;
