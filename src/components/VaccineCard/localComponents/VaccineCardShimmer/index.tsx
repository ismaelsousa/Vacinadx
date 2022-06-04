import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Container} from './styles';

const VaccineCardShimmer: React.FC = () => {
  return <Container LinearGradient={LinearGradient} isReversed />;
};

export default VaccineCardShimmer;
