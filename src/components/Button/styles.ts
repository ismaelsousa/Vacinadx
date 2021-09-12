/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';

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
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
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
  margin-left: ${({theme}) => theme.spacing.sm}px;
`;
