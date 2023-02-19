import React from 'react';
import PieChart from 'react-native-pie-chart';

import {Container} from './styles';

const GraphPie = ({results}) => {
  let series = [];
  let sliceColor = [];

  if (results.victory === 0 && results.loss === 0) {
    series = [1];
    sliceColor = ['#7D7C7C'];
  } else {
    series = [results.loss, results.victory];
    sliceColor = ['#FF0000', '#14F900'];
  }

  const teste = [results.victory, results.loss];
  console.log(teste);

  return (
    <Container>
      <PieChart
        widthAndHeight={180}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.85}
        coverFill={'#2D3957'}
      />
    </Container>
  );
};

export default GraphPie;
