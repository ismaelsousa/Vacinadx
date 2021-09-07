/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {Props} from './types';

export const Container = styled.View<Props>`
  ${({height}) => !!height && `height: ${height}px;`}
  ${({height}) => !!height && `min-height: ${height}px;`}
  ${({height}) => !!height && `max-height: ${height}px;`}
  ${({width}) => !!width && `width: ${width}px;`}
  ${({width}) => !!width && `min-width: ${width}px;`}
  ${({width}) => !!width && `max-width: ${width}px;`}
`;
