import firestore from '@react-native-firebase/firestore';

export const getAllEntriesDay = async days => {
  let querySnapshot;

  if (days > 0) {
    const today = new Date();
    today.setDate(today.getDate() - days);

    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('day')
      .startAt(today)
      .get();
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('day')
      .get();
  }
  let entries = querySnapshot.docs.map(doc => {
    return {...doc.data()};
  });

  console.log('entries Stat ', entries);

  return entries;
};
