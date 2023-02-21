import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.button};
  padding: 5px 40px;
  border-radius: 5px;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Modal = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
`;

export const ButtonModal = styled.TouchableOpacity`
  align-items: center;
`;

export const TextModal = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const TextClose = styled.Text`
  color: white;
`;
