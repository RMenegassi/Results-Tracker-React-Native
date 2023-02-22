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

  const allSum = entries.reduce((acc, curr) => {
    return {loss: acc.loss + curr.loss, victory: acc.victory + curr.victory};
  });

  const mostVictory = {...entries.sort((a, b) => b.victory - a.victory)[0]};

  const mostLoss = {...entries.sort((a, b) => b.loss - a.loss)[0]};

  entries = [entries, allSum, mostVictory, mostLoss];

  console.log(entries);

  return entries;
};
