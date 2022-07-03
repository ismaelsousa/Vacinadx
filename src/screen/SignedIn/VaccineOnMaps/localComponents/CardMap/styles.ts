import styled from 'styled-components/native';

export const Container = styled.View<{bottom: number}>`
  padding: 24px 13px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  position: absolute;
  width: 89%;
  bottom: ${({bottom, theme}) => bottom + theme.spacing.lg}px;
`;

export const ImageLocal = styled.Image`
  height: 90px;
  width: 120px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
`;

export const ContainerDescription = styled.View`
  justify-content: space-between;
  max-width: 70%;
`;
