import React from 'react';
import {ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TextTitle,
  ContainerItem,
  TextItens,
  Button,
  ContainerLoading,
} from './styles';

const Loading = () => {
  return (
    <ContainerLoading>
      <ActivityIndicator color="gray" size={30} />
    </ContainerLoading>
  );
};

const Report = ({data, setVitorias, setDerrotas}) => {
  return (
    <Container>
      {data.length > 0 ? (
        <>
          <TextTitle>{data[0].victory + data[0].loss} Partidas</TextTitle>
          <ContainerItem>
            <TextItens>Vitórias: {data[0].victory}</TextItens>
            <Button
              onPress={() => setVitorias(data[0].victory - 1)}
              disabled={data[0].victory >= 1 ? false : true}>
              <Icon name="remove-circle" size={15} color="black" />
            </Button>
          </ContainerItem>
          <ContainerItem>
            <TextItens>Derrotas: {data[0].loss}</TextItens>
            <Button
              onPress={() => setDerrotas(data[0].loss - 1)}
              disabled={data[0].loss >= 1 ? false : true}>
              <Icon name="remove-circle" size={15} color="black" />
            </Button>
          </ContainerItem>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Report;
