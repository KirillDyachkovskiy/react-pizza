import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { ECategories, TCategories } from '../../../data/types';
import { setCategory as setCategoryAction } from '../../../data/redux/catalogSlice';

import { Radiobutton, Radiobuttons } from '../../ui/Radiobuttons';
import s from './categories.module.scss';

type TCategory = {
  id: number;
  value: TCategories;
};

const categories: TCategory[] = [
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

export default function Categories() {
  const [category, setCategory] = useState<TCategories>('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryAction({ category }));
  }, [category, dispatch]);

  return (
    <nav className={s.categories}>
      <Radiobuttons<TCategories>
        name='categories'
        selected={category}
        setSelected={setCategory}
      >
        {categories.map(({ id, value }: TCategory) => (
          <Radiobutton key={id} value={value} label={ECategories[value]} />
        ))}
      </Radiobuttons>
    </nav>
  );
}
