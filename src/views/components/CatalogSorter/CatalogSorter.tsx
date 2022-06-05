import { ESortType, sortTypes, TSortType } from '../../../data/types';

import { Dropdown } from '../../ui';
import CatalogSorterItem from './CatalogSorterItem';

import s from './catalogSorter.module.scss';

interface ICatalogSorter {
  name: string;
  value: TSortType;
  onChange: (category: TSortType) => void;
}

function CatalogSorter({ name, value, onChange }: ICatalogSorter) {
  const handleTypeChange =
    (newSortType: TSortType, hideDropdown: () => void) => () => {
      onChange(newSortType);
      hideDropdown();
    };

  return (
    <div className={s.catalogSorter}>
      <span>Сортировка по:</span>
      <Dropdown
        element={
          <span className={s.catalogSorter__span}>{ESortType[value]}</span>
        }
      >
        {(hideDropdown) => (
          <div className={s.catalogSorter__dropdown}>
            {sortTypes.map((sortType: TSortType) => (
              <CatalogSorterItem
                key={sortType}
                name={name}
                value={sortType}
                checked={value === sortType}
                onChange={handleTypeChange(sortType, hideDropdown)}
              />
            ))}
          </div>
        )}
      </Dropdown>
    </div>
  );
}

export default CatalogSorter;
