import { useState } from 'react';
import { useTitle } from '../../../data/hooks';
import { TPage, TPizza } from '../../../data/types';
import { Card, CatalogSorter, Categories } from '../../components';
import s from './catalog.module.scss';

type TCatalog = TPage & {
  pizzas: TPizza[];
};

export default function Catalog({ title, pizzas }: TCatalog) {
  useTitle(title);
  const [category, setCategory] = useState<string>('Все');

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories
          onChange={(activeCategory: string) => setCategory(activeCategory)}
        />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <section className={s.catalogPage__section}>
        <h1 className={s.catalogPage__title}>{category} пиццы</h1>
        <div className={s.catalogPage__catalog}>
          {pizzas.map(({ id, name, price, imageUrl, sizes, types }: TPizza) => (
            <Card
              key={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
              sizes={sizes}
              types={types}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
