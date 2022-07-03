import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  background-color: ${({theme}) => theme.colors.background.main};
`;
