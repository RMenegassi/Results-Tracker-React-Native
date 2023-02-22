import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SignIn as login} from '../../services/Auth';

import {
  Container,
  InputText,
  ButtonLogin,
  TextLogin,
  ButtonSignUp,
  TextSignUp,
} from './styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      const {loginSuccess} = await login({email, password});

      if (loginSuccess === true) {
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
    <Container behavior="padding">
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
      <ButtonLogin
        onPress={onSubmit}
        disabled={email && password ? false : true}>
        <TextLogin>{loading ? 'Carregando...' : 'Entrar'}</TextLogin>
      </ButtonLogin>
      <ButtonSignUp
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <TextSignUp>Criar uma conta</TextSignUp>
      </ButtonSignUp>
    </Container>
  );
};

export default SignIn;
