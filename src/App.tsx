import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './views/layout';
import { Cart, Catalog } from './views/pages';

export default function App() {
  const { pathname } = useLocation();

  return (
    <Routes>
      <Route path='/' element={<Layout hasButton={pathname === '/'} />}>
        <Route index element={<Catalog title='Пицца React' />} />
        <Route path='cart' element={<Cart title='Корзина' />} />
      </Route>
    </Routes>
  );
}
