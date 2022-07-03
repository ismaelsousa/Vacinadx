/* eslint-disable @typescript-eslint/no-unused-vars */
import {useMemo} from 'react';
import {useTheme} from 'styled-components/native';
import {Props} from './types';

const useConvertDose = ({shot}: Props) => {
  const {colors} = useTheme();

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

  return dose;
};

export default useConvertDose;
