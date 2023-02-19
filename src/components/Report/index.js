import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TextTitle, ContainerItem, TextItens, Button} from './styles';

const Report = ({results, setVitorias, setDerrotas}) => {
  return (
    <Container>
      <TextTitle>{results.victory + results.loss} Partidas</TextTitle>
      <ContainerItem>
        <TextItens>Vitórias: {results.victory}</TextItens>
        <Button
          onPress={() => setVitorias(results.victory - 1)}
          disabled={results.victory >= 1 ? false : true}>
          <Icon name="remove-circle" size={15} color="black" />
        </Button>
      </ContainerItem>
      <ContainerItem>
        <TextItens>Derrotas: {results.loss}</TextItens>
        <Button
          onPress={() => setDerrotas(results.loss - 1)}
          disabled={results.loss >= 1 ? false : true}>
          <Icon name="remove-circle" size={15} color="black" />
        </Button>
      </ContainerItem>
    </Container>
  );
};

export default Report;
