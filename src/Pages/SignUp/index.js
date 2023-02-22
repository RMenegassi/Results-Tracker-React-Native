import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SignUp as register} from '../../services/Auth';

import {
  Container,
  InputText,
  ButtonCreate,
  TextCreate,
  ButtonSignUp,
  TextSignUp,
} from './styles';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      const {registerSuccess} = await register({email, password});

      if (registerSuccess === true) {
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: 'Home'}],
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <Container behavior="height">
      <Icon name="equalizer" size={90} color="white" />
      <InputText
        placeholder="Seu e-mail"
        placeholderTextColor="#555459"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputText
        placeholder="Sua senha"
        placeholderTextColor="#555459"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <ButtonCreate
        onPress={onSubmit}
        disabled={email && password ? false : true}>
        <TextCreate>{loading ? 'Carregando...' : 'Criar conta'}</TextCreate>
      </ButtonCreate>
      <ButtonSignUp
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <TextSignUp>Fazer Login</TextSignUp>
      </ButtonSignUp>
    </Container>
  );
};

export default SignUp;
