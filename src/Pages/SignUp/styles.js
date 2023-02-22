import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const InputText = styled.TextInput`
  border-width: 1px;
  width: 80%;
  border-color: ${({theme}) => theme.colors.champagne};
  border-radius: 2px;
  padding: 0px 20px;
  font-size: 16px;
  color: white;
  height: 44px;
  margin-top: 20px;
`;

export const ButtonCreate = styled.TouchableOpacity`
  height: 44px;
  width: 80%;
  background-color: ${({theme}) => theme.colors.red};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-top: 10px;
`;

export const TextCreate = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const TextSignUp = styled.Text`
  color: ${({theme}) => theme.colors.blueDark};
  text-decoration: underline;
`;
