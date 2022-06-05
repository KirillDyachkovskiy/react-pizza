import { ESortType, TSortType } from '../../../data/types';
import s from './catalogSorter.module.scss';

interface ICatalogSorterItem {
  name: string;
  value: TSortType;
  checked: boolean;
  onChange: () => void;
}

function CatalogSorterItem({
  name,
  value,
  checked,
  onChange,
}: ICatalogSorterItem) {
  return (
    <label htmlFor={`${name}_${value}`}>
      <input
        id={`${name}_${value}`}
        className={s.catalogSorter__radio}
        name={name}
        type='radio'
        checked={checked}
        onChange={onChange}
      />
      <p className={s.catalogSorter__item}>{ESortType[value]}</p>
    </label>
  );
}

export default CatalogSorterItem;
