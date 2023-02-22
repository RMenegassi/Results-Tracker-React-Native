import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: white;
  text-align: center;
`;
