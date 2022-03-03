import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  width: 115px;
  height: 115px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  background-color: ${({theme}) => theme.colors.background.main};
`;

export const Circle = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.primary.main};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Title = styled(Text)`
  text-align: center;
`;
