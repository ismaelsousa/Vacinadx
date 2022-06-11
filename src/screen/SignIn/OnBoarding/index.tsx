import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components/native';
import Button from '~/components/Button';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import useSignInNavigation from '~/hooks/useSignInNavigation';

import {Container, Person, ContainerColumn} from './styles';

const OnBoarding: React.FC = () => {
  const {spacing} = useTheme();
  const {height} = useWindowDimensions();
  const {bottom, top} = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /**
   * State
   */
  const [heightPerson, setHeightPerson] = useState(0);

  /**
   * Callback
   */

  const handleNavigateToAccessScreen = () => navigation.navigate('access');

  const handleHeightToPerson = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + top + bottom + 60);
    setHeightPerson(freeSpace);
  };

  return (
    <Container>
      <Separator height={spacing.sm} />
      <Person size={heightPerson} icon="doctor" />
      <ContainerColumn
        onLayout={e => handleHeightToPerson(e.nativeEvent.layout.height)}>
        <Separator height={spacing.md} />
        <Text typography="h4">
          Bem vindx ao <Text typography="h3">Vacinadx</Text>
        </Text>
        <Separator height={spacing.xxl} />
        <Text typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Text>
        <Separator height={spacing.xxxl} />
        <Button onPress={handleNavigateToAccessScreen}>Começar</Button>
        <Separator height={spacing.md} />
      </ContainerColumn>
    </Container>
  );
};

export default OnBoarding;
