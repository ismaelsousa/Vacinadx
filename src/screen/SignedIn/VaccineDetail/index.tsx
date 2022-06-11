import {useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {useMemo} from 'react';
import {Pressable, ScrollView, StatusBar, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useTheme} from 'styled-components/native';
import Center from '~/components/Center';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Separator from '~/components/Separator';
import Shadow from '~/components/Shadow';
import Text from '~/components/Text';
import {getRandomImageUnsplash} from '~/constants/unsplash';
import useConvertDose from '~/hooks/useConvertDose';

import {
  Container,
  Content,
  LogoVaccine,
  RowTextDetail,
  RowVaccine,
} from './styles';

const VaccineDetail = () => {
  const {spacing, colors} = useTheme();

  /**
   * Navigation
   */
  const {goBack} = useNavigation();
  const {
    params: {vaccine},
  } = useRoute<VaccineSignedInStackRouteProp>();

  /**
   * CallBacks
   */
  const dose = useConvertDose({shot: vaccine.dose});

  /**
   * Memos
   */
  const randomImage = useMemo(() => {
    return getRandomImageUnsplash(100);
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <HeaderOptions
        left={
          <Pressable onPress={goBack}>
            <Icon icon="closeX" size={15} />
          </Pressable>
        }
      />
      <Separator height={spacing.md} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text typography="h7">Detalhe da vacina</Text>
        <Separator height={spacing.sm} />
        <Shadow>
          <Content>
            <RowVaccine>
              <LogoVaccine resizeMode="contain" source={{uri: randomImage}} />
              <Separator width={spacing.md} />
              <Text typography="subtitle2">{vaccine.brand} </Text>
            </RowVaccine>
            <RowTextDetail>
              <Icon
                icon="vaccine"
                size={24}
                activeColor={colors.primary.main}
              />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Vacina
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">{vaccine.name}</Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon
                icon="calendar"
                size={24}
                activeColor={colors.primary.main}
              />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Data da aplicação
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">
                {format(new Date(vaccine.applicationDate), 'dd/MM/yyyy')}
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon icon="pin" size={24} activeColor={colors.primary.main} />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Local de aplicação
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">{vaccine.place}</Text>
            </RowTextDetail>
            <RowTextDetail>
              <Icon icon="dose" size={24} activeColor={colors.primary.main} />
              <Separator width={spacing.sm} />
              <Text typography="subtitle2" color="primary">
                Dose
              </Text>
            </RowTextDetail>
            <RowTextDetail>
              <Text typography="caption">{dose.title}</Text>
            </RowTextDetail>
            <Separator height={spacing.md} />
            <RowTextDetail>
              <Center>
                <QRCode value={vaccine.barCode} />
              </Center>
            </RowTextDetail>
          </Content>
        </Shadow>
        <Separator height={spacing.lg} />
      </ScrollView>
    </Container>
  );
};

export default VaccineDetail;
