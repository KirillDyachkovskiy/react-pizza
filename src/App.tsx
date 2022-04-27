import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import API from './data/api';
// import { setPizzas } from './data/redux/pizzasSlice';

import Layout from './views/layout';
import { Cart, Catalog } from './views/pages';
import { useGetPizzasQuery } from './data/redux/pizzasSlice';
// import { TCategories, TSortType } from "./data/types";

export default function App() {
  const { pathname } = useLocation();

  console.log(
    useGetPizzasQuery({
      sortType: 'popularity',
      category: 'meat',
    })
  );
  const { data } = useGetPizzasQuery({
    sortType: 'popularity',
    category: 'grill',
  });

  useEffect(() => {
    // API.getPizzas().then(({ data }) => dispatch(setPizzas({ items: data })));
    console.log(data);
  }, [data]);

  return (
    <Routes>
      <Route path='/' element={<Layout hasButton={pathname === '/'} />}>
        <Route index element={<Catalog title='Пицца React' pizzas={[]} />} />
        <Route path='cart' element={<Cart title='Корзина' />} />
      </Route>
    </Routes>
  );
}
