import { useActions } from '../../../data/hooks';
import { ESortType, sortTypes, TSortType } from '../../../data/types';

import { Dropdown } from '../../ui';
import CatalogSorterItem from './CatalogSorterItem';

import s from './catalogSorter.module.scss';

interface ICatalogSorter {
  name: string;
  sortType: TSortType;
}

function CatalogSorter({ name, sortType }: ICatalogSorter) {
  const { setSortType } = useActions();

  const handleTypeChange =
    (newSortType: TSortType, hideDropdown: () => void) => () => {
      setSortType({ sortType: newSortType });
      hideDropdown();
    };

  return (
    <div className={s.catalogSorter}>
      <span>Сортировка по:</span>
      <Dropdown
        element={
          <span className={s.catalogSorter__span}>{ESortType[sortType]}</span>
        }
      >
        {(hideDropdown) => (
          <div className={s.catalogSorter__dropdown}>
            {sortTypes.map((value: TSortType) => (
              <CatalogSorterItem
                key={value}
                name={name}
                value={value}
                checked={sortType === value}
                onChange={handleTypeChange(value, hideDropdown)}
              />
            ))}
          </div>
        )}
      </Dropdown>
    </div>
  );
}

export default CatalogSorter;
