/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {ContainerProp} from './types';

export const Container = styled.Image<ContainerProp>`
  height: ${({h}) => h}px;
  width: ${({w}) => w}px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;
