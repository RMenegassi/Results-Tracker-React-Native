import React, {useState} from 'react';

import ModalTime from '../../components/ModalTime';
import Statistics from '../../components/Statistics';
import GraphStats from '../../components/GraphStats';

import useStats from '../../hooks/useStats';

import {Container, ContainerMessage, Text} from './styles';

const Stats = () => {
  const [days, setDays] = useState(0);
  const [entries] = useStats(days);

  return (
    <Container>
      {entries.length > 0 ? (
        <>
          <ModalTime days={days} setDays={setDays} />
          <Statistics data={entries} />
          <GraphStats data={entries} days={days} />
        </>
      ) : (
        <ContainerMessage>
          <Text>Nenhum registro encontrado...</Text>
        </ContainerMessage>
      )}
    </Container>
  );
};

export default Stats;
