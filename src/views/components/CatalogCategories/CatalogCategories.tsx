import {
  ECategory,
  TCatalogCategoriesItem,
  TCategory,
} from '../../../data/types';

import { Radiobutton, Radiobuttons } from '../../ui/Radiobuttons';

import s from './catalogCategories.module.scss';

const catalogCategories: TCatalogCategoriesItem[] = [
  {
    id: 0,
    value: 'all',
  },
  {
    id: 1,
    value: 'meat',
  },
  {
    id: 2,
    value: 'vegetarian',
  },
  {
    id: 3,
    value: 'grill',
  },
  {
    id: 4,
    value: 'sharp',
  },
  {
    id: 5,
    value: 'closed',
  },
];

interface ICategories {
  value: TCategory;
  onChange: (category: TCategory) => void;
}

function Categories({ value, onChange }: ICategories) {
  return (
    <nav className={s.categories}>
      <Radiobuttons<TCategory>
        name='categories'
        selected={value}
        setSelected={onChange}
      >
        {catalogCategories.map(
          ({ id, value: item }: TCatalogCategoriesItem) => (
            <Radiobutton key={id} value={item} label={ECategory[item]} />
          )
        )}
      </Radiobuttons>
    </nav>
  );
}

export default Categories;
