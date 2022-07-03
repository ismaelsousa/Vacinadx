import styled from 'styled-components/native';

export const Header = styled.View`
  position: absolute;
  height: 153px;
  width: 100%;
  background-color: rgba(7, 43, 89, 0.75);
  z-index: 1;
  top: 0;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const HeaderContentRow = styled.View`
  flex-direction: row;
  padding: ${({theme}) => theme.spacing.md}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputRow = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background.main};
  border-radius: ${({theme}) => theme.spacing.sm}px;
`;
