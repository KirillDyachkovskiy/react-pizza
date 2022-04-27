import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';

import { ECategories, TPage, TPizza } from '../../../data/types';
import { getFilters } from '../../../data/redux/store';

import { Card, CatalogSorter, Categories } from '../../components';
import s from './catalog.module.scss';

export default function Catalog({
  title,
  pizzas,
}: TPage & { pizzas: TPizza[] }) {
  useTitle(title);

  const { category } = useSelector(getFilters);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>{ECategories[category]} пиццы</h2>
        <div className={s.catalogPage__catalog}>
          {pizzas.map(({ category: noUsed, rating, ...pizza }: TPizza) => (
            <Card key={pizza.id} {...pizza} />
          ))}
        </div>
      </main>
    </section>
  );
}
