import styled from 'styled-components/native';
import Icon from '~/components/Icon';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`;
export const ContainerRounded = styled.View`
  padding: 0 ${({theme}) => theme.spacing.md}px;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

export const Column = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconRoundedVaccine = styled.View`
  background-color: ${({theme}) => theme.colors.primary.main};
  height: 146px;
  width: 146px;
  border-radius: 73px;
  align-items: center;
  justify-content: center;
`;

export const IconVaccine = styled(Icon)``;
