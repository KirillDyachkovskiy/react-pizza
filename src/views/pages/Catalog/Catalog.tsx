import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';
import { useGetPizzasQuery } from '../../../data/redux/pizzasSlice';

import { ECategories, TPage, TPizza } from '../../../data/types';

import { getFilters } from '../../../data/redux/store';
import {
  Card,
  CardPreloader,
  CatalogSorter,
  Categories,
} from '../../components';
import s from './catalog.module.scss';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  const filters = useSelector(getFilters);

  const { data: pizzas, isLoading } = useGetPizzasQuery(filters);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <Categories />
        <CatalogSorter name='pizzasSorter' />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>
          {ECategories[filters.category]} пиццы {isLoading.toString()}
        </h2>
        <div className={s.catalogPage__catalog}>
          {isLoading
            ? Array.from(Array(4).keys()).map((num: number) => (
                <CardPreloader key={num} />
              ))
            : pizzas?.map(({ category: noUsed, rating, ...pizza }: TPizza) => (
                <Card key={pizza.id} {...pizza} />
              ))}
        </div>
      </main>
    </section>
  );
}
