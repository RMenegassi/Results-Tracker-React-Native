import styled from 'styled-components';

import {theme} from '../../styles/Theme';

export const Container = styled.View`
  background-color: ${theme.colors.background};
  align-items: center;
  height: 100%;
`;

export const TextTitle = styled.Text`
  color: white;
  font-size: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props =>
    props.title === 'vitoria' ? theme.colors.blue : theme.colors.red};
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextButtons = styled.Text`
  font-size: 35px;
  color: white;
`;
