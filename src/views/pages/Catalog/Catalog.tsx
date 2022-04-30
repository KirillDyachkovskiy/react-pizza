import { useDispatch, useSelector } from 'react-redux';
import { useTitle } from '../../../data/helpers';
import { useGetPizzasQuery } from '../../../data/redux/pizzasApi';
import { pushPizzaToCart } from '../../../data/redux/cartSlice';
import { selectFilters } from '../../../data/redux/store';

import { ECategories, TPizzaParams, TPage, TPizza } from '../../../data/types';
import {
  CatalogCard,
  CatalogCardPreloader,
  CatalogSorter,
  CatalogCategories,
} from '../../components';
import s from './catalog.module.scss';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const { data: pizzas, isFetching } = useGetPizzasQuery(filters);

  const handleAddPizzaToCart = (
    pizzaParams: TPizzaParams,
    pizza: Omit<TPizza, 'category' | 'rating'>
  ) => {
    dispatch(pushPizzaToCart({ ...pizza, ...pizzaParams }));
  };

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <CatalogCategories />
        <CatalogSorter name='pizzasSorter' />
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
                    handleAddPizzaToCart(pizzaParams, pizza)
                  }
                />
              ))}
        </div>
      </main>
    </section>
  );
}
