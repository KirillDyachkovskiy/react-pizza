import { useState } from 'react';
import { Dropdown } from '../../ui';
import s from './catalogSorter.module.scss';

enum ESort {
  popularity = 'по популярности',
  price = 'по цене',
  alphabetical = 'по алфавиту',
}

type TSort = keyof typeof ESort;

interface ICatalogSorter {
  name: string;
}

export default function CatalogSorter({ name }: ICatalogSorter) {
  const [sortType, setSortType] = useState<TSort>('popularity');

  const handleTypeChange = (
    value: TSort,
    setIsDropdownVisible: (value: boolean) => void
  ) => {
    setSortType(value);
    setIsDropdownVisible(false);
  };

  return (
    <div className={s.catalogSorter}>
      <span>Сортировка по:</span>
      <Dropdown
        element={
          <span className={s.catalogSorter__span}>{ESort[sortType]}</span>
        }
      >
        {(setIsDropdownVisible: (value: boolean) => void) => (
          <div className={s.catalogSorter__dropdown}>
            {(Object.keys(ESort) as TSort[]).map((value: TSort) => (
              <label htmlFor={`${name}_${value}`}>
                <input
                  id={`${name}_${value}`}
                  className={s.catalogSorter__radio}
                  name={name}
                  key={value}
                  type='radio'
                  checked={sortType === value}
                  onChange={() => handleTypeChange(value, setIsDropdownVisible)}
                />
                <p className={s.catalogSorter__item}>{ESort[value]}</p>
              </label>
            ))}
          </div>
        )}
      </Dropdown>
    </div>
  );
}
