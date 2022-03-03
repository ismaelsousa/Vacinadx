import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.spacing.sm}px 0;
`;

export const Circle = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.colors.primary.main};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
