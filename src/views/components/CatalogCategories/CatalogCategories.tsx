import { useEffect, useState } from 'react';
import { useActions } from '../../../data/hooks';
import { ECategories, TCategories } from '../../../data/types';
import { Radiobutton, Radiobuttons } from '../../ui/Radiobuttons';
import s from './catalogCategories.module.scss';

type TCategory = {
  id: number;
  value: TCategories;
};

const catalogCategories: TCategory[] = [
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
  const [category, setLocalCategory] = useState<TCategories>('all');
  const { setCategory } = useActions();

  useEffect(() => {
    setCategory({ category });
  }, [category, setCategory]);

  return (
    <nav className={s.categories}>
      <Radiobuttons<TCategories>
        name='categories'
        selected={category}
        setSelected={setLocalCategory}
      >
        {catalogCategories.map(({ id, value }: TCategory) => (
          <Radiobutton key={id} value={value} label={ECategories[value]} />
        ))}
      </Radiobuttons>
    </nav>
  );
}
