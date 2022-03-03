/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components';

import {Container} from './styles';
import {BannerProps} from './types';

const Banner = ({source}: BannerProps) => {
  const {spacing} = useTheme();
  const {width, height} = useWindowDimensions();

  const HWBanner = useMemo(() => {
    if (height > width) {
      return {
        height: height * 0.166,
        width: width - 2 * spacing.md,
      };
    } else {
      return {
        height: width * 0.166,
        width: height - 2 * spacing.md,
      };
    }
  }, [height, width, spacing]);

  return (
    <Container
      resizeMode="contain"
      source={source}
      h={HWBanner.height}
      w={HWBanner.width}
    />
  );
};

export default Banner;
