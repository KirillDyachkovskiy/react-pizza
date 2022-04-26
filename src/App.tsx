import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import API from './data/api';
import { setPizzas } from './data/redux/pizzasSlice';

import Layout from './views/layout';
import { Cart, Catalog } from './views/pages';

export default function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    API.getPizzas().then(({ data }) => dispatch(setPizzas({ items: data })));
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout hasButton={pathname === '/'} />}>
        <Route index element={<Catalog title='Пицца React' />} />
        <Route path='cart' element={<Cart title='Корзина' />} />
      </Route>
    </Routes>
  );
}
