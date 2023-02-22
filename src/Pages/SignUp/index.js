import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const [name, setName] = useState('');
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
        placeholder="Seu nome"
        placeholderTextColor="#555459"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
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
      <ButtonCreate>
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
