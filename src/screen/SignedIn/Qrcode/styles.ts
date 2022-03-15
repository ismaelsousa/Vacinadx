import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  padding: ${({theme}) => theme.spacing.md}px;
`;
