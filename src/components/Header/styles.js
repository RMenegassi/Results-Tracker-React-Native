import styled from 'styled-components';

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonLeft = styled.TouchableOpacity`
  position: absolute;
  left: -40px;
`;

export const ButtonRight = styled.TouchableOpacity`
  position: absolute;
  right: -40px;
`;

export const TextDay = styled.Text`
  color: white;
`;
