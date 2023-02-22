import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondary};
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
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0px;
`;

export const TextModal = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  border: 1px solid red;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 20px 0px;
`;

export const TextClose = styled.Text`
  color: red;
`;
