import React from 'react';

import { testDataApiUrl } from '../const';
import { DataHookProps } from '../types';

export const useData = ({ setData, setIsLoading }: DataHookProps) => {

  const loadData = React.useCallback(async () => {
    setIsLoading(true);

    const result = await (await fetch(testDataApiUrl)).json();
    console.log('Result: ', result);
    setData(result);

    setIsLoading(false);
  }, []);

  return { loadData };
};
