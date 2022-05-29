/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {View} from 'react-native';

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

const VaccineCard = ({date, shot, title, onPress}: VaccineDateProps) => {
  const {colors} = useTheme();

  const formattedDate = useMemo(() => {
    return format(new Date(date), 'dd/MM/yy');
  }, [date]);

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(date), new Date());
  }, [date]);

  const dose = useConvertDose({shot});

  return (
    <Shadow onPress={onPress}>
      <Container>
        <BadgeLeft
          color={isBeforeToday ? colors.lightGreen.main : colors.orange.main}
        />
        <TitleContainer>
          <Text numberOfLines={1} typography="body2">
            {title}
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
