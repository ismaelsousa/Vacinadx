/* eslint-disable @typescript-eslint/no-unused-vars */
import {format, isBefore} from 'date-fns';
import React, {useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {useTheme} from 'styled-components';
import useConvertDose from '~/hooks/useConvertDose';
import Icon from '../Icon';
import Separator from '../Separator';
import Shadow from '../Shadow';
import Text from '../Text';
import {VaccineCardProps} from './types';
import {
  BadgeLeft,
  Chip,
  ChipWrap,
  Container,
  VaccineDate,
  TitleContainer,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const VaccineCard = ({vaccine}: VaccineCardProps) => {
  const {colors} = useTheme();
  const {navigate} = useNavigation<SignedInStackNavigatorProp>();

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(vaccine.nextApplicationDate), new Date());
  }, [vaccine]);

  const formattedDate = useMemo(() => {
    return format(new Date(vaccine.nextApplicationDate), 'dd/MM/yy');
  }, [vaccine]);

  const dose = useConvertDose({shot: vaccine.dose});

  const handleNavigateToVaccineDetail = () =>
    navigate('VaccineDetail', {vaccine});

  return (
    <Shadow onPress={handleNavigateToVaccineDetail}>
      <Container>
        <BadgeLeft
          color={isBeforeToday ? colors.lightGreen.main : colors.orange.main}
        />
        <TitleContainer>
          <Text numberOfLines={1} typography="body2">
            {vaccine.name}
          </Text>
          <Separator height={18} />
          <ChipWrap>
            <Chip color={dose.color}>
              <Text color="background">{dose.title}</Text>
            </Chip>
          </ChipWrap>
        </TitleContainer>
        <VaccineDate>
          <Icon icon="calendar" />
          <Separator width={12} />
          <Text>{formattedDate}</Text>
        </VaccineDate>
      </Container>
    </Shadow>
  );
};

export default VaccineCard;
