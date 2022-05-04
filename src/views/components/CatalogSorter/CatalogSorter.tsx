import { useSelector } from 'react-redux';
import { useActions } from '../../../data/hooks';
import { selectFilters } from '../../../data/redux/store';
import { ESortType, TSortType } from '../../../data/types';
import { Dropdown } from '../../ui';
import s from './catalogSorter.module.scss';

interface ICatalogSorter {
  name: string;
}

export default function CatalogSorter({ name }: ICatalogSorter) {
  const { sortType } = useSelector(selectFilters);
  const { setSortType } = useActions();

  const handleTypeChange = (
    newSortType: TSortType,
    setIsDropdownVisible: (value: boolean) => void
  ) => {
    setSortType({ sortType: newSortType });
    setIsDropdownVisible(false);
  };

  return (
    <div className={s.catalogSorter}>
      <span>Сортировка по:</span>
      <Dropdown
        element={
          <span className={s.catalogSorter__span}>{ESortType[sortType]}</span>
        }
      >
        {(setIsDropdownVisible: (value: boolean) => void) => (
          <div className={s.catalogSorter__dropdown}>
            {(Object.keys(ESortType) as TSortType[]).map((value: TSortType) => (
              <label htmlFor={`${name}_${value}`} key={value}>
                <input
                  id={`${name}_${value}`}
                  className={s.catalogSorter__radio}
                  name={name}
                  type='radio'
                  checked={sortType === value}
                  onChange={() => handleTypeChange(value, setIsDropdownVisible)}
                />
                <p className={s.catalogSorter__item}>{ESortType[value]}</p>
              </label>
            ))}
          </div>
        )}
      </Dropdown>
    </div>
  );
}
