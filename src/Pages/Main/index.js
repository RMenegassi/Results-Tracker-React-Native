import React, {useState} from 'react';

import Header from '../../components/Header';
import Report from '../../components/Report';
import GraphPie from '../../components/GraphPie';

import {Container, TextTitle, Button, TextButtons} from './styles';

import useEntries from '../../hooks/useResults';

const Main = () => {
  const [day, setDay] = useState(new Date());
  const [clicked, setClicked] = useState(false);
  const [data, addEntry, updateEntry] = useEntries(
    day.toLocaleDateString('pt-BR'),
    0,
    clicked,
  );

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

  const updateVictory = valor => {
    updateEntry({
      ...data[0],
      victory: data[0].victory + valor,
    });
    setClicked(!clicked);
  };

  const updateLoss = valor => {
    updateEntry({
      ...data[0],
      loss: data[0].loss + valor,
    });
    setClicked(!clicked);
  };

  const createNewSave = type => {
    addEntry({
      day: day,
      victory: type === 'victory' ? 1 : 0,
      loss: type === 'loss' ? 1 : 0,
    });
    setClicked(!clicked);
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

      <Button
        title="vitoria"
        onPress={
          data.length > 0
            ? () => updateVictory(1)
            : () => createNewSave('victory')
        }>
        <TextButtons>Vitórias</TextButtons>
      </Button>
      <Button
        title="derrota"
        onPress={
          data.length > 0 ? () => updateLoss(1) : () => createNewSave('loss')
        }>
        <TextButtons>Derrotas</TextButtons>
      </Button>

      <Report
        data={data}
        updateVictory={updateVictory}
        updateLoss={updateLoss}
      />
      <GraphPie data={data} />
    </Container>
  );
};

export default Main;
