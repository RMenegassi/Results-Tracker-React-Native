import React from 'react';

import {Container, Title, ContainerContent, Text} from './styles';

const Statistics = () => {
  return (
    <Container>
      <Title>Durante esse período</Title>
      <ContainerContent>
        <Text>Você jogou: 150 partidas {'\n'}</Text>
        <Text>Venceu: 90 partidas</Text>
        <Text>Perdeu: 60 partidas</Text>
        <Text>Aproveitamento de 60% {'\n'}</Text>
        <Text>
          Em 19/02/2023 você ganhou 15 partidas com 65% de aproveitamento{'\n'}
        </Text>
        <Text>
          Em 18/02/2023 você teve 18 derrotas com 65% de aproveitamento{'\n'}
        </Text>
        <Text>
          O mês com maior número de vitórias foi: Abril de 2023 com 85 vitorias
          {'\n'}
        </Text>
        <Text>
          O mês com maior número de vitórias foi: Abril de 2023 com 85 vitorias
          {'\n'}
        </Text>
      </ContainerContent>
    </Container>
  );
};

export default Statistics;
