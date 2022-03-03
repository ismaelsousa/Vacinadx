/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components';
import Shadow from '~/components/Shadow';

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
    <Shadow>
      <Container
        resizeMode="contain"
        source={source}
        h={HWBanner.height}
        w={HWBanner.width}
      />
    </Shadow>
  );
};

export default Banner;
