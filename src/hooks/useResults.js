import {useState, useEffect} from 'react';

import {getEntries} from '../services/Entries';

const useEntries = (date, days = 0) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries(date, days);
      setEntries(data);
    };

    loadEntries();
  }, [date, days]);

  return [entries];
};

export default useEntries;
