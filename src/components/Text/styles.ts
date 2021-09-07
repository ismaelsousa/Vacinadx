/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {Props} from './types';

type ContainerProps = Required<Pick<Props, 'color' | 'typography'>>;

export const Container = styled.Text<ContainerProps>`
  color: ${({theme, color}) => {
    return theme.colors[color].main;
  }};
  font-size: ${({theme, typography}) => {
    return theme.typography[typography].fontSize;
  }}px;
  font-family: ${({theme, typography}) => {
    return theme.typography[typography].fontFamily;
  }};
`;
