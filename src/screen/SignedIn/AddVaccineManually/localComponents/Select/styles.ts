import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  margin: ${({theme}) => theme.spacing.sm}px 0px;
  align-items: center;
`;
