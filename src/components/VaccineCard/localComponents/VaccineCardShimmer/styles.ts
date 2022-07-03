import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

export const Container = styled(ShimmerPlaceholder)`
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  height: 100px;
  width: 100%;
`;
