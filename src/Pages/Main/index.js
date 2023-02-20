import React, {useState} from 'react';

import Header from '../../components/Header';
import Report from '../../components/Report';
import GraphPie from '../../components/GraphPie';

import {Container, TextTitle, Button, TextButtons} from './styles';

import useEntries from '../../hooks/useResults';

const Main = () => {
  const [day, setDay] = useState(new Date());
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const [data] = useEntries(day.toLocaleDateString('pt-BR'));

  console.log(data);

  const subDay = () => {
    const newDay = new Date(day);
    newDay.setDate(newDay.getDate() - 1);
    setDay(newDay);
  };

  const addDay = () => {
    const newDay = new Date(day);
    newDay.setDate(newDay.getDate() + 1);
    setDay(newDay);
  };

  return (
    <Container>
      <Header
        day={day.toLocaleDateString('pt-BR')}
        subDay={subDay}
        addDay={addDay}
      />

      <TextTitle>
        Partida {data.length > 0 ? data[0].victory + data[0].loss + 1 : '1'}
      </TextTitle>

      <Button title="vitoria" onPress={() => setVitorias(vitorias + 1)}>
        <TextButtons>Vitórias</TextButtons>
      </Button>
      <Button title="derrota" onPress={() => setDerrotas(derrotas + 1)}>
        <TextButtons>Derrotas</TextButtons>
      </Button>

      <Report data={data} setVitorias={setVitorias} setDerrotas={setDerrotas} />
      <GraphPie data={data} />
    </Container>
  );
};

export default Main;
