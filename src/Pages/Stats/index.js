import React, {useState} from 'react';

import ModalTime from '../../components/ModalTime';
import Statistics from '../../components/Statistics';
import GraphStats from '../../components/GraphStats';

import useStats from '../../hooks/useStats';

import {Container} from './styles';

const Stats = () => {
  const [days, setDays] = useState(0);
  const [entries] = useStats(days);

  return (
    <Container>
      <ModalTime days={days} setDays={setDays} />
      <Statistics data={entries} />
      <GraphStats />
    </Container>
  );
};

export default Stats;
