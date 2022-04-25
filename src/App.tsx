import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TPizza } from './data/types';
import Layout from './views/layout';
import { Catalog } from './views/pages';
import { Preloader } from './views/ui';
import API from './data/api';

export default function App() {
  const [pizzas, setPizzas] = useState<TPizza[]>([]);

  useEffect(() => {
    API.getPizzas().then(({ data }) => setPizzas(data));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={<Catalog title='Пицца React' pizzas={pizzas} />}
        />
        <Route path='cart' element={<Preloader />} />
      </Route>
    </Routes>
  );
}
