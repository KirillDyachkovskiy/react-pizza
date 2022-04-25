import { useEffect, useState } from 'react';
import { Radiobutton, Radiobuttons } from '../../ui/Radiobuttons';
import s from './categories.module.scss';

type TCategory = {
  id: number;
  label: string;
};

interface ICategories {
  onChange: () => void;
  categories: TCategory[];
}

export default function Categories({ onChange }: ICategories) {
  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => {
    onChange();
  }, [selectedCategory, onChange]);

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

  return (
    <nav className={s.categories}>
      <Radiobuttons<number>
        name='radio'
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      >
        {categories.map((category: TCategory) => (
          <Radiobutton value={category.id} label={category.label} />
        ))}
      </Radiobuttons>
    </nav>
  );
}
