import React from 'react';

import { PropsWithChildren, AppContextData } from '../types';
import { useData } from '../hooks';

export const AppDataContext = React.createContext<AppContextData>({} as AppContextData);

export const AppDataProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const value = { data, setData, isLoading };

  const { loadData } = useData({ setData, setIsLoading, sorting: { last_name: 'ASC', first_name: 'ASC' } });

  React.useEffect(() => {
    loadData().then(() => console.log('Data fetch succeeded.'));
  }, []);

  /*React.useEffect(() => {
    console.log('Data: ', data);
  }, [data]);*/

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const context = React.useContext(AppDataContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
