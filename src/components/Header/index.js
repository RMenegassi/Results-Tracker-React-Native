import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, ButtonLeft, ButtonRight, TextDay} from './styles';

const Header = ({day, subDay, addDay}) => {
  return (
    <Container>
      <ButtonLeft onPress={() => subDay()}>
        <Icon name="chevron-left" size={25} color="white" />
      </ButtonLeft>

      <TextDay>{day}</TextDay>
      {day !== new Date().toLocaleDateString('pt-BR') && (
        <ButtonRight onPress={() => addDay()}>
          <Icon name="chevron-right" size={25} color="white" />
        </ButtonRight>
      )}
    </Container>
  );
};

export default Header;
