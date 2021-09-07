import styled from 'styled-components/native';
import Text from '../Text';
import {Mode} from './types';

interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}
export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 12px 0 12px 0;
  background-color: ${({color, mode}) => {
    if (mode === 'outlined') {
      return 'transparent';
    }
    return color;
  }};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  border-width: 1px;
`;

interface TitleProps {
  readonly color: string;
}

export const Title = styled.Text<TitleProps>`
  font-family: ${({theme}) => theme.typography.body2.fontFamily};
  font-size: ${({theme}) => theme.typography.body2.fontSize}px;
  align-self: center;
  color: ${({color}) => color};
`;

export const Loading = styled.ActivityIndicator`
  margin-left: 10px;
`;
