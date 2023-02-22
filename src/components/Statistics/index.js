import React from 'react';

import {Container, Title, ContainerContent, Text} from './styles';

const Statistics = ({data}) => {
  const sumMatches = data[1].victory + data[1].loss;

  const percentTotal = (
    (data[1].victory * 100) /
    (data[1].victory + data[1].loss)
  ).toFixed(0);

  const percentVictoryDay = (
    (data[2].victory * 100) /
    (data[2].victory + data[2].loss)
  ).toFixed(0);

  return (
    <Container>
      <Title>Durante esse período</Title>
      <ContainerContent>
        <Text>
          Você jogou: {sumMatches} partidas {'\n'}
        </Text>
        <Text>Venceu: {data[1].victory} partidas</Text>
        <Text>Perdeu: {data[1].loss} partidas</Text>
        <Text>
          Aproveitamento de {percentTotal}% {'\n'}
        </Text>
        <Text>
          Em {data[2].day.toDate().toLocaleDateString('pt-BR')} você ganhou{' '}
          {data[2].victory} partidas com {percentVictoryDay}% de aproveitamento
          {'\n'}
        </Text>
        <Text>
          Em {data[3].day.toDate().toLocaleDateString('pt-BR')} você teve{' '}
          {data[3].loss} derrotas {'\n'}
        </Text>
      </ContainerContent>
    </Container>
  );
};

export default Statistics;
