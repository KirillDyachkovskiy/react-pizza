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
    id: 0,
    label: 'Все',
  },
  {
    id: 1,
    label: 'Мясные',
  },
  {
    id: 2,
    label: 'Вегетарианские',
  },
  {
    id: 3,
    label: 'Гриль',
  },
  {
    id: 4,
    label: 'Острые',
  },
  {
    id: 5,
    label: 'Закрытые',
  },
];

export default function Categories({ onChange }: ICategories) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    onChange(categories[selectedCategory].label);
  }, [selectedCategory, onChange]);

  return (
    <nav className={s.categories}>
      <Radiobuttons<number>
        name='categories'
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      >
        {categories.map(({ id, label }: TCategory) => (
          <Radiobutton key={id} value={id} label={label} />
        ))}
      </Radiobuttons>
    </nav>
  );
}
