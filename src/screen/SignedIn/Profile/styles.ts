import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 0 ${({theme}) => theme.spacing.md}px;
  flex: 1;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CardOptions = styled.View`
  background-color: ${({theme}) => theme.colors.background.main};
  padding: ${({theme}) => theme.spacing.lg}px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.colors.primary.main};
  height: 1px;
  width: 100%;
  opacity: 0.5;
`;
