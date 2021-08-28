import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.colors.primary.main};
  border-width: 4px;
  border-color: ${props => props.theme.colors.secondary.main};
  padding: 10px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary.onMain};
  font-size: 20px;
`;

export const Name = styled(Title)`
  font-size: 30px;
`;
