import {useState, useEffect} from 'react';
import {getAllEntriesDay} from '../services/DataStats';

const useStats = (days = 0) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getAllEntriesDay(days);
      setEntries(data);
    };
    loadEntries();
  }, [days]);

  return [entries];
};

export default useStats;
