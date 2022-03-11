import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 0 ${({theme}) => theme.spacing.md}px;
  flex: 1;
`;

export const Card = styled.View`
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  background-color: ${({theme}) => theme.colors.background.main};
  padding: ${({theme}) => theme.spacing.lg}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowCard = styled.View`
  flex-direction: row;
`;
