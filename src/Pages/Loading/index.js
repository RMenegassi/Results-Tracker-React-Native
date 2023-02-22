import React from 'react';

import {ActivityIndicator, StatusBar} from 'react-native';
import {Container} from './styles';

import {theme} from '../../styles/Theme';

const Loading = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <ActivityIndicator color={theme.colors.violet} size={60} />
    </Container>
  );
};

export default Loading;
