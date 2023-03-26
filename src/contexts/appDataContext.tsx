import React from 'react';

import { PropsWithChildren } from '../types';
import { useData } from '../hooks';

export const AppDataContext = React.createContext({});

export const AppDataProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const value = { data, setData, isLoading };

  const { loadData } = useData({ setData, setIsLoading });

  React.useEffect(() => {
    try {
      loadData();
      console.log('Data fetched: ', data);
    } catch (e) {
      console.error('Data fetch has failed! Error: ', e);
    }
  }, []);

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const context = React.useContext(AppDataContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
