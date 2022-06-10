/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useMemo} from 'react';

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
import {useTheme} from 'styled-components/native';
import Shadow from '../Shadow';
import useConvertDose from '~/hooks/useConvertDose';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';

const VaccineCard = ({vaccine, index = 0}: VaccineDateProps) => {
  const {colors} = useTheme();

  const window = useWindowDimensions();

  const {navigate} = useNavigation<SignedInStackNavigatorProp>();

  const translateX = useSharedValue(window.width);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const formattedDate = useMemo(() => {
    return format(new Date(vaccine.nextApplicationDate), 'dd/MM/yy');
  }, [vaccine.nextApplicationDate]);

  const isBeforeToday = useMemo(() => {
    return isBefore(new Date(vaccine.nextApplicationDate), new Date());
  }, [vaccine.nextApplicationDate]);

  const dose = useConvertDose({shot: vaccine.dose});

  const handleNavigateToVaccineDetail = () => {
    navigate('VaccineDetail', {vaccine});
  };

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withSpring(0);
    }, index * 300);
  }, [translateX, index]);

  return (
    <Animated.View style={animatedStyles}>
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
    </Animated.View>
  );
};

export default VaccineCard;
