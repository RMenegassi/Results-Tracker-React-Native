import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';

const Main = () => {
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const data = '19/02/2023';

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>{data}</Text>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <Text>Partida {vitorias + derrotas + 1}</Text>
      <Button title="Vitorias" onPress={() => setVitorias(vitorias + 1)} />
      <Button title="Derrotas" onPress={() => setDerrotas(derrotas + 1)} />
      <View>
        <Text>Partidas {vitorias + derrotas}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text> Vitórias :{vitorias}</Text>
          <Button title="-" onPress={() => setVitorias(vitorias - 1)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text> Derrotas :{derrotas}</Text>
          <TouchableOpacity>
            <Button title="-" onPress={() => setDerrotas(derrotas - 1)} />
          </TouchableOpacity>
        </View>
      </View>
      <Text>Gráfico</Text>
    </View>
  );
};

export default Main;
