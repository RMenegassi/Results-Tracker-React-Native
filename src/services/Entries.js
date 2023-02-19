import firestore from '@react-native-firebase/firestore';

export const getEntries = async (date, days) => {
  let querySnapshot;

  console.log('date ', date);
  console.log('days ', days);
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

  let entries = querySnapshot.docs.map(docSnapshot => {
    return {...docSnapshot.data(), id: docSnapshot.id};
  });

  if (date) {
    entries = entries.filter(
      entry => entry.day.toDate().toLocaleDateString('pt-BR') === date,
    );
  }

  console.log('getLastEntries :: loaded ', entries);
  console.log(entries[0].day.toDate());
  return entries;
};
