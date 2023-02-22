import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

// This first part is to make the login process / create account process.
// The functions will be used to show SignIn and SignUp screens when not logged and to go to the home page when logged.

// It will check if AsyncStorage have an item called userAuthTracker
// If it does, it will return true, and means tha user have already logged in / created an account
export const isLogged = async () => {
  const userAuthTracker = await AsyncStorage.getItem('userAuthTracker');

  return userAuthTracker !== null;
};

// It will create an item in AsyncStorage called userAuthTracker and with userID as value
export const setUserAuthTracker = async uid => {
  await AsyncStorage.setItem('userAuthTracker', uid);
};

// It will get the userID from the item userAuthTracker in AsyncStorage and return it
export const getUserAuthTracker = async uid => {
  const userAuthTracker = await AsyncStorage.getItem('userAuthTracker');
  return userAuthTracker;
};

// It will remove the item 'userAuthTracker' from AsyncStorage for when the user log out
export const cleanUserAuthTracker = async () => {
  await AsyncStorage.removeItem('userAuthTracker');
};

// The second part is to auth process in firebase, the returning variables will be used in the SignIn and SignUp screens.

// It will receive a data variable, which is an object with the following properties: email and password.
// It will try to auth in firebase, if success, it will call the function setUserAuthTracker to set the userID in AsyncStorage and will return a variable called loginSucess equal to true
export const SignIn = async data => {
  const {email, password} = data;

  try {
    const userInfos = await auth().signInWithEmailAndPassword(email, password);
    console.log('entrou3');
    setUserAuthTracker(userInfos.user.uid);
    return {loginSuccess: true};
  } catch (e) {
    Alert.alert('Erro ao Tentar Entrar ', e.message);
    return {loginSuccess: false};
  }
};

// It Will receive a data variable, which is an object with the following properties: email and password.
// It will try to create an account in firebase, if success, it will call the function setUserAuthTracker to set the userId in AsyncStorage and will return a variable called registerSuccess equal to true
export const SignUp = async data => {
  const {email, password} = data;

  try {
    const userInfos = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );

    setUserAuthTracker(userInfos.user.uid);
    return {registerSuccess: true};
  } catch (e) {
    Alert.alert('Erro ao Criar um Usuário', e.message);
    return {registerSuccess: false};
  }
};
