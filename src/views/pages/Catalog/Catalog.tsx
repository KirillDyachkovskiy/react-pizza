import { useGetPizzasQuery } from '../../../data/redux/pizzasApi';
import { ECategories, TPizzaParams, TPage, TPizza } from '../../../data/types';
import { useActions, useAppSelector, useTitle } from '../../../data/hooks';
import { selectFilters } from '../../../data/redux/store';

import {
  CatalogCard,
  CatalogCardPreloader,
  CatalogSorter,
  CatalogCategories,
} from '../../components';

import s from './catalog.module.scss';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  const filters = useAppSelector(selectFilters);
  const { pushPizzaToCart } = useActions();

  const { data: pizzas, isFetching } = useGetPizzasQuery(filters);

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <CatalogCategories />
        <CatalogSorter name='pizzasSorter' sortType={filters.sortType} />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>
          {ECategories[filters.category]} пиццы
        </h2>
        <div className={s.catalogPage__catalog}>
          {isFetching
            ? Array.from(Array(4).keys()).map((num: number) => (
                <CatalogCardPreloader key={num} />
              ))
            : pizzas?.map(({ category: noUsed, rating, ...pizza }: TPizza) => (
                <CatalogCard
                  key={pizza.id}
                  {...pizza}
                  getPizzaParams={(pizzaParams: TPizzaParams) =>
                    pushPizzaToCart({ ...pizza, ...pizzaParams })
                  }
                />
              ))}
        </div>
      </main>
    </section>
  );
}
