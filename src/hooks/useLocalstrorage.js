import { useEffect, useState } from 'react';

export const useLocalstrorage = (initialvalue, key_name) => {
  const [state, setState] = useState(initialvalue);

  useEffect(() => {
    const all_todos = localStorage.getItem(key_name);
    const parsed_todo = JSON.parse(all_todos);
    setState(parsed_todo);
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key_name, JSON.stringify(state));
    }
  }, [state]);
  return [state, setState];
};
