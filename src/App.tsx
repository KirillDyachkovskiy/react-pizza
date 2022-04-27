import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPizzasQuery } from './data/redux/pizzasSlice';

import Layout from './views/layout';
import { Cart, Catalog } from './views/pages';
import { getFilters } from './data/redux/store';

export default function App() {
  const { pathname } = useLocation();
  const filters = useSelector(getFilters);

  const { data: pizzas } = useGetPizzasQuery(filters);

  return (
    <Routes>
      <Route path='/' element={<Layout hasButton={pathname === '/'} />}>
        <Route
          index
          element={
            pizzas ? <Catalog title='Пицца React' pizzas={pizzas} /> : null
          }
        />
        <Route path='cart' element={<Cart title='Корзина' />} />
      </Route>
    </Routes>
  );
}
