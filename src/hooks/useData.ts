import React from 'react';

import { testDataApiUrl } from '../const';
import { DataHookProps, UserData } from "../types";

export const useData = ({ setData, setIsLoading, sorting }: DataHookProps) => {

  const loadData = React.useCallback(async () => {
    setIsLoading(true);

    try {
      const result = await (await fetch(testDataApiUrl)).json();
      if (sorting) { // @TODO: Implement incremental/decremental Sort by config fields later
        result.sort((a: UserData, b: UserData) => {
          return a.last_name.localeCompare(b.last_name) || a.first_name.localeCompare(b.first_name);
        });
      }
      setData(result);
    } catch (e) {
      console.error('Data fetch has failed! Error: ', e);
    }

    setIsLoading(false);
  }, []);

  return { loadData };
};
