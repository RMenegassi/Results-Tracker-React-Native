import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {cleanUserAuthTracker} from '../../services/Auth';

import {Button} from './styles';

const LogoutButton = () => {
  const navigation = useNavigation();

  const onLogoutPress = async () => {
    Alert.alert('Logout', 'Deseja sair da conta?', [
      {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
      {
        text: 'Sair',
        onPress: async () => {
          await cleanUserAuthTracker();
          navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'SignIn'}],
          });
        },
      },
    ]);
  };

  return (
    <Button onPress={onLogoutPress}>
      <Icon name="person" size={20} color="red" />
    </Button>
  );
};

export default LogoutButton;
