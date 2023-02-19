import React, {useState} from 'react';

import Header from '../../components/Header';
import Report from '../../components/Report';
import GraphPie from '../../components/GraphPie';

import {Container, TextTitle, Button, TextButtons} from './styles';

const Main = () => {
  const [day, setDay] = useState(new Date());
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const data = [
    {day: '19/02/2023', vitorias: 10, derrotas: 1},
    {day: '20/02/2023', vitorias: 1, derrotas: 5},
    {day: '18/02/2023', vitorias: 3, derrotas: 2},
    {day: '15/02/2023', vitorias: 6, derrotas: 2},
    {day: '25/02/2023', vitorias: 5, derrotas: 0},
  ];

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

      <TextTitle>Partida {vitorias + derrotas + 1}</TextTitle>
      <Button title="vitoria" onPress={() => setVitorias(vitorias + 1)}>
        <TextButtons>Vitórias</TextButtons>
      </Button>
      <Button title="derrota" onPress={() => setDerrotas(derrotas + 1)}>
        <TextButtons>Derrotas</TextButtons>
      </Button>

      <Report
        results={{victory: vitorias, loss: derrotas}}
        setVitorias={setVitorias}
        setDerrotas={setDerrotas}
      />
      <GraphPie results={{victory: vitorias, loss: derrotas}} />
    </Container>
  );
};

export default Main;
