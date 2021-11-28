import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 ${({theme}) => theme.spacing.md}px;
`;

export const PressableX = styled(Pressable)`
  padding: ${({theme}) => theme.spacing.sm}px;
`;
export const AccessText = styled(Text)`
  align-self: center;
`;
