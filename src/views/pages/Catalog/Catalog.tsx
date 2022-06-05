import { useSearchParams } from 'react-router-dom';
import { useGetPizzasQuery } from '../../../data/redux/pizzasApi';
import {
  ECategory,
  TCategory,
  TPage,
  TPizza,
  TPizzaParams,
  TSortType,
} from '../../../data/types';
import { useActions, useTitle } from '../../../data/hooks';

import {
  CatalogCard,
  CatalogCardPreloader,
  CatalogCategories,
  CatalogSorter,
} from '../../components';

import s from './catalog.module.scss';

function Catalog({ title }: TPage) {
  useTitle(title);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortType = (searchParams.get('sortType') || 'rating') as TSortType;
  const category = (searchParams.get('category') || 'all') as TCategory;

  const changeSortType = (newSortType: TSortType) =>
    setSearchParams({ sortType: newSortType, category });
  const changeCategory = (newCategory: TCategory) =>
    setSearchParams({ sortType, category: newCategory });

  const { data: pizzas, isFetching } = useGetPizzasQuery({
    category,
    sortType,
  });

  const { pushPizzaToCart } = useActions();

  return (
    <section className={s.catalogPage}>
      <header className={s.catalogPage__header}>
        <CatalogCategories value={category} onChange={changeCategory} />
        <CatalogSorter
          name='pizzasSorter'
          value={sortType}
          onChange={changeSortType}
        />
      </header>
      <main className={s.catalogPage__main}>
        <h2 className={s.catalogPage__title}>{ECategory[category]} пиццы</h2>
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

export default Catalog;
