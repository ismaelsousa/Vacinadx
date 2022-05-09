import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const RowFilterVaccine = styled.View`
  flex-direction: row;
`;
