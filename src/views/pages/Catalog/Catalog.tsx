import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';

import { ECategories, TPage, TPizza } from '../../../data/types';
import { getCategory } from '../../../data/redux/store';

import { Card, CatalogSorter, Categories } from '../../components';
import s from './catalog.module.scss';

export default function Catalog({
  title,
  pizzas,
}: TPage & { pizzas: TPizza[] }) {
  useTitle(title);

  const categoryFilter = useSelector(getCategory);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>
          {ECategories[categoryFilter]} пиццы
        </h2>
        <div className={s.catalogPage__catalog}>
          {pizzas.map(({ category, rating, ...pizza }: TPizza) => (
            <Card {...pizza} />
          ))}
        </div>
      </main>
    </section>
  );
}
