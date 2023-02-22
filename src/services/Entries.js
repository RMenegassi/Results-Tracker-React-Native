import firestore from '@react-native-firebase/firestore';

import {getUserAuthTracker} from './Auth';

import {Alert} from 'react-native';

export const getEntries = async (date, days) => {
  const userAuth = await getUserAuthTracker();
  let querySnapshot;

  if (days > 0) {
    const today = new Date();
    today.setDate(today.getDate() - days);

    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('day')
      .startAt(today)
      .get();
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('day')
      .get();
  }

  let entries = querySnapshot.docs.map(docSnapshot => {
    return {...docSnapshot.data(), id: docSnapshot.id};
  });

  if (date) {
    entries = entries.filter(
      entry => entry.day.toDate().toLocaleDateString('pt-BR') === date,
    );
  }

  return entries;
};

export const addEntry = async entry => {
  const userAuth = await getUserAuthTracker();
  let data = {};
  console.log('entry ', entry);

  try {
    data = {
      day: entry.day,
      victory: entry.victory,
      loss: entry.loss,
      userId: userAuth,
    };

    await firestore().collection('entries').add(data);
    console.log('addEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('addEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro', 'Houve um erro ao salvar a ultima partida.');
  }

  return data;
};

export const updateEntry = async entry => {
  const userAuth = await getUserAuthTracker();
  let data = {};

  try {
    data = {
      ...entry,
      userId: userAuth,
    };

    await firestore().collection('entries').doc(entry.id).update(data);
    console.log('updateEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error(
      'updateEntry :: error on update object: ',
      JSON.stringify(data),
    );
    Alert.alert('Erro', 'Houve um erro ao atualizar a ultima partida.');
  }

  return data;
};
