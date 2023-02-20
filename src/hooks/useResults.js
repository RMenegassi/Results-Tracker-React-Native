import {useState, useEffect} from 'react';

import {getEntries, addEntry, updateEntry} from '../services/Entries';

const useEntries = (date, days = 0, clicked) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries(date, days);
      setEntries(data);
    };

    loadEntries();
  }, [date, days, clicked]);

  return [entries, addEntry, updateEntry];
};

export default useEntries;
