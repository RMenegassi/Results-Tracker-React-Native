import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getAllEntriesDay} from '../services/DataStats';

const useStats = (days = 0) => {
  const [entries, setEntries] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadEntries = async () => {
        const data = await getAllEntriesDay(days);
        setEntries(data);
      };
      loadEntries();
    }, [days]),
  );

  return [entries];
};

export default useStats;
