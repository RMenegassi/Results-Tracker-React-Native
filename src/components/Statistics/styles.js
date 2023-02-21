import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  width: 80%;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
`;

export const ContainerContent = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 15px;
`;
