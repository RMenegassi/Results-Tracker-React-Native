import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <ButtonLogin>
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
