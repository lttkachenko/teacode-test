import { ReactNode, SetStateAction } from 'react';

export enum Genders {
  MALE = 'Male',
  FEMALE = 'Female',
}
export type Gender = Genders.MALE | Genders.FEMALE;
export type ObjectLiteral = { [key: string]: unknown };
export type PropsWithChildren<P> = P & { children?: ReactNode };
export type UserData = {
  id: number;
  avatar?: string;
  first_name: string;
  last_name: string;
  gender?: Gender;
  isSelected?: boolean;
};
export type ApiDataSet = UserData[];
export type DataHookProps = {
  data?: ApiDataSet;
  setData: (d: SetStateAction<never[]>) => void;
  isLoading?: boolean;
  setIsLoading: (l: boolean) => void;
  sorting?: ObjectLiteral;
};
export type AppContextData = {
  data?: ApiDataSet;
  setData: (d: SetStateAction<never[]>) => void;
  isLoading?: boolean;
};
