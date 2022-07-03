import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollViewItems = styled.ScrollView`
  padding: ${({theme}) => theme.spacing.md}px 0;
`;

export const Content = styled.View`
  padding: 0 ${({theme}) => theme.spacing.md}px;
`;
