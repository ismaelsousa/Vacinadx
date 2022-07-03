/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import Text from '../Text';
import {InputProps} from './types';

export const Container = styled.View`
  /* margin-bottom: 10px; */
  /* FIXME: Update screens that use this input */
`;

export const InputInternal = styled.TextInput`
  flex: 1;
  font-size: ${({theme}) => theme.typography.body3.fontSize}px;
  font-family: ${({theme}) => theme.typography.body3.fontFamily};
  color: ${({theme}) => theme.colors.surface.main};
  min-height: 48px;
`;

interface BorderProps {
  readonly color: string;
  readonly borderColor: string;
}

export const Border = styled.View<BorderProps>`
  padding: 0 15px 0 15px;
  background-color: ${({color}) => color};
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  flex-direction: row;
  border-color: ${({borderColor}) => borderColor};
  border-width: 1px;
`;

export const Error = styled(Text)`
  margin-top: ${({theme}) => theme.spacing.sm}px;
`;
export const Label = styled(Text)`
  margin-bottom: ${({theme}) => theme.spacing.sm}px;
`;

export const IconContainer = styled.View<Pick<InputProps, 'iconPosition'>>`
  padding-left: ${({iconPosition}) => {
    return iconPosition === 'right' ? '10' : '0';
  }}px;
  padding-right: ${({iconPosition}) => {
    return iconPosition === 'left' ? '10' : '0';
  }}px;
`;
