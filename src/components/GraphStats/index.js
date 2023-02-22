import React from 'react';

import {Container, ContainerChart} from './styles';

import {LineChart} from 'react-native-chart-kit';

const GraphStats = ({data}) => {
  const arrayVictories = data[0].sort(
    (a, b) => a.day.toDate() - b.day.toDate(),
  );

  const victoriesSorted = arrayVictories.map(item => item.victory);

  const teste = {
    datasets: [
      {
        data: victoriesSorted,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Viórias x Dia'], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: '#261049',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#11091F',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: true, // optional
  };

  return (
    <Container>
      <ContainerChart>
        <LineChart
          data={teste}
          width={250}
          height={220}
          chartConfig={chartConfig}
          formatYLabel={value => `${parseInt(value)}`}
          withVerticalLines={false}
        />
      </ContainerChart>
    </Container>
  );
};

export default GraphStats;
