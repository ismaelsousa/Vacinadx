import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.colors.surface50.main};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CardOption = styled.View`
  background-color: ${({theme}) => theme.colors.background.main};
  padding: ${({theme}) => theme.spacing.md}px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;
export const Divider = styled.View`
  background-color: ${({theme}) => theme.colors.primary.main};
  height: 1px;
  opacity: 0.5;
  width: 100%;
`;
