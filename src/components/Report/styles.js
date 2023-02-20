import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.yellow};
  padding: 10px;
  width: 50%;
  border-radius: 5px;
  margin-top: 30px;
`;

export const TextTitle = styled.Text`
  color: black;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextItens = styled.Text`
  color: black;
  font-size: 15px;
  padding-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

export const ContainerLoading = styled.View`
  padding: 34px;
`;
