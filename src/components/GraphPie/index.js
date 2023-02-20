import React from 'react';

import PieChart from 'react-native-pie-chart';

import {Container} from './styles';

const GraphPie = ({data}) => {
  let series = [];
  let sliceColor = [];

  if (data.length <= 0 || (data[0].victory === 0 && data[0].loss === 0)) {
    series = [1];
    sliceColor = ['#7D7C7C'];
  } else {
    series = [data[0].loss, data[0].victory];
    sliceColor = ['#FF0000', '#14F900'];
  }

  return (
    <Container>
      <PieChart
        widthAndHeight={140}
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
