import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const ContainerSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
