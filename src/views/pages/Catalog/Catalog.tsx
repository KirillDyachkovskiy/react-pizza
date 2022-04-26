import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';

import { TPage, TPizza } from '../../../data/types';
import { RootState } from '../../../data/redux/store';

import { Card, CatalogSorter, Categories } from '../../components';
import s from './catalog.module.scss';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  const [category, setCategory] = useState<string>('Все');

  const pizzas = useSelector((state: RootState) => state.pizzas.items);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories
          onChange={(activeCategory: string) => setCategory(activeCategory)}
        />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>{category} пиццы</h2>
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
      </main>
    </section>
  );
}
