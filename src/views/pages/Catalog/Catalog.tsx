import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';

import { ECategories, TPage, TPizza } from '../../../data/types';
import { getCategory, getPizzas } from '../../../data/redux/store';

import { Card, CatalogSorter, Categories } from '../../components';
import s from './catalog.module.scss';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  const category = useSelector(getCategory);

  const pizzas = useSelector(getPizzas);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>{ECategories[category]} пиццы</h2>
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
