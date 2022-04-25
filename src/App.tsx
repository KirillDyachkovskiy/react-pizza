import { Routes, Route } from 'react-router-dom';
import Layout from './views/layout';
import { Catalog } from './views/pages';
import { Preloader } from './views/ui';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Catalog title='Пицца React' />} />
        <Route path='cart' element={<Preloader />} />
      </Route>
    </Routes>
  );
}
