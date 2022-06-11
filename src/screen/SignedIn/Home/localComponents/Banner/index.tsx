/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {BannerProp} from './types';

import {Container} from './styles';
import {useTheme} from 'styled-components/native';
import Shadow from '~/components/Shadow';

const Banner = ({source}: BannerProp) => {
  const {spacing} = useTheme();
  const {height, width} = useWindowDimensions();

  const HWBanner = useMemo(() => {
    const percentageFromScreenToBanner = 0.166;
    if (height > width) {
      return {
        h: height * percentageFromScreenToBanner,
        w: width - 2 * spacing.md,
      };
    } else {
      return {
        h: width * percentageFromScreenToBanner,
        w: height - 2 * spacing.md,
      };
    }
  }, [height, width, spacing]);

  return (
    <Shadow>
      <Container h={HWBanner.h} w={HWBanner.w} source={source} />
    </Shadow>
  );
};

export default Banner;
