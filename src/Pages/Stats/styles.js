import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerMessage = styled.View``;

export const Text = styled.Text`
  color: white;
  font-size: 18px;
`;
