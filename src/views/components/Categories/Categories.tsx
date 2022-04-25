import { useEffect, useState } from 'react';
import { Radiobutton, Radiobuttons } from '../../ui/Radiobuttons';
import s from './categories.module.scss';

type TCategory = {
  id: number;
  label: string;
};

interface ICategories {
  onChange: (label: string) => void;
}

const categories = [
  {
    id: 1,
    label: 'Все',
  },
  {
    id: 2,
    label: 'Мясные',
  },
  {
    id: 3,
    label: 'Вегетарианские',
  },
  {
    id: 4,
    label: 'Гриль',
  },
  {
    id: 5,
    label: 'Острые',
  },
  {
    id: 6,
    label: 'Закрытые',
  },
];

export default function Categories({ onChange }: ICategories) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    onChange(categories[selectedCategory].label);
  }, [selectedCategory, onChange, categories]);

  return (
    <nav className={s.categories}>
      <Radiobuttons<number>
        name='categories'
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      >
        {[{ id: 0, label: 'Все' }, ...categories].map(
          ({ id, label }: TCategory) => (
            <Radiobutton key={id} value={id} label={label} />
          )
        )}
      </Radiobuttons>
    </nav>
  );
}
