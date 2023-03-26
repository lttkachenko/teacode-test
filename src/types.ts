import { ReactElement, ReactNode, SetStateAction } from 'react';

export type ObjectLiteral = { [key: string]: unknown };
export type ReactText = string | number;
export type ReactChild = ReactElement | ReactText;
export type PropsWithChildren<P> = P & { children?: ReactNode };
export type ApiDataSet = ObjectLiteral | ObjectLiteral[];
export type DataHookProps = {
  data?: ApiDataSet;
  setData: (d: SetStateAction<never[]>) => void;
  isLoading?: boolean;
  setIsLoading: (l: boolean) => void;
  sorting?: ObjectLiteral;
};
