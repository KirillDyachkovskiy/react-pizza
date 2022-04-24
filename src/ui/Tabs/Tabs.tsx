import { Children, ReactElement } from 'react';
import { ITabsGroup } from './TabsGroup';
import { ITab } from './Tab';
import s from './tabs.module.scss';

interface SimpleTabsProps<T> {
  children: ReactElement<ITabsGroup<T>>[] | ReactElement<ITabsGroup<T>>;
}

export default function Tabs<T = string>({ children }: SimpleTabsProps<T>) {
  return (
    <div className={s.tabs__field}>
      {Children.map(children, (tabsGroup: ReactElement<ITabsGroup<T>>) => {
        const {
          props: { children: tabs, name, setActiveTab, activeTab },
        } = tabsGroup;

        return (
          <div className={s.tabs__group}>
            {Children.map(tabs, (tab: ReactElement<ITab<T>>) => {
              const {
                props: { label, value, disabled },
              } = tab;

              return (
                <label htmlFor={`${name}_${value}`} className={s.tabs__tab}>
                  <input
                    className={s.tabs__radio}
                    type='radio'
                    id={`${name}_${value}`}
                    name={name}
                    disabled={disabled}
                    checked={activeTab === value}
                    onChange={() => setActiveTab(value)}
                  />
                  <div className={s.tabs__label}>{label}</div>
                </label>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
