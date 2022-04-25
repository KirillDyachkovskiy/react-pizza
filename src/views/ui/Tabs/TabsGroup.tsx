import { ReactElement } from 'react';
import { ITab } from './Tab';

export interface ITabsGroup<T> {
  children: ReactElement<ITab<T>>[] | ReactElement<ITab<T>>;
  name: string;
  activeTab: T;
  setActiveTab: (id: T) => void;
}

export default function TabsGroup<T = string>({ children }: ITabsGroup<T>) {
  return <div>{children}</div>;
}
