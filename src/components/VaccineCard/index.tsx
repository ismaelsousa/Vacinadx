/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';

import {format, isBefore} from 'date-fns';

import Icon from '../Icon';
import Separator from '../Separator';
import Text from '../Text';
import {
  BadgeLeft,
  Chip,
  ChipWrap,
  Container,
  TitleContainer,
  VaccineDate,
} from './styles';
import {VaccineDateProps} from './types';
import {useTheme} from 'styled-components';
import Shadow from '../Shadow';
import useConvertDose from '~/hooks/useConvertDose';
import {useNavigation} from '@react-navigation/native';

const VaccineCard = ({vaccine}: VaccineDateProps) => {
  const {colors} = useTheme();

  const {navigate} = useNavigation<SignedInStackNavigatorProp>();

  const formattedDate = useMemo(() => {
    return format(new Date(vaccine.nextApplicationDate), 'dd/MM/yy');
  }, [vaccine.nextApplicationDate]);

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(vaccine.nextApplicationDate), new Date());
  }, [vaccine.nextApplicationDate]);

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
          <Icon icon="calendar" size={20} />
          <Separator width={12} />
          <Text>{formattedDate}</Text>
        </VaccineDate>
      </Container>
    </Shadow>
  );
};

export default VaccineCard;
