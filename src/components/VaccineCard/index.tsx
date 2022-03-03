/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {Pressable, View} from 'react-native';

import {format, isBefore} from 'date-fns';

import Icon from '../Icon';
import Separator from '../Separator';
import Text from '../Text';

import {BadgeLeft, Chip, ChipWrap, Container, VaccineDate} from './styles';
import {VaccineDateProps} from './types';
import {useTheme} from 'styled-components';
import Shadow from '../Shadow';

const VaccineCard = ({date, shot, title, onPress}: VaccineDateProps) => {
  const {colors} = useTheme();

  const formattedDate = useMemo(() => {
    return format(new Date(date), 'dd/MM/yy');
  }, [date]);

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(date), new Date());
  }, [date]);

  const dose = useMemo(() => {
    switch (shot) {
      case 'first-dose':
        return {
          color: colors.primary.main,
          title: '1ª dose',
        };
      case 'second-dose':
        return {
          color: colors.orange.main,
          title: '2ª dose',
        };

      default:
        return {
          color: colors.secondary.main,
          title: 'Dose única',
        };
    }
  }, [shot, colors]);

  return (
    <Shadow onPress={onPress}>
      <Container>
        <BadgeLeft
          color={isBeforeToday ? colors.lightGreen.main : colors.orange.main}
        />
        <View>
          <Text typography="body2">{title}</Text>
          <Separator height={18} />
          <ChipWrap>
            <Chip color={dose.color}>
              <Text color="background">{dose.title}</Text>
            </Chip>
          </ChipWrap>
        </View>
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
