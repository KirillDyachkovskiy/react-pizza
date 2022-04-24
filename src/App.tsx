import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { Catalog } from './pages';
import { Preloader } from './ui';

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
