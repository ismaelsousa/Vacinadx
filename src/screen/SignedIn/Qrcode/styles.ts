import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;
export const Content = styled.View`
  padding: ${({theme}) => theme.spacing.md}px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;
