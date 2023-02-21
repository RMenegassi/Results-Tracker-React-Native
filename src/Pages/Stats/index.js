import React, {useState} from 'react';

import ModalTime from '../../components/ModalTime';
import Statistics from '../../components/Statistics';
import GraphStats from '../../components/GraphStats';

import {Container} from './styles';

const Stats = () => {
  const [days, setDays] = useState(0);

  return (
    <Container>
      <ModalTime days={days} setDays={setDays} />
      <Statistics />
      <GraphStats />
    </Container>
  );
};

export default Stats;
