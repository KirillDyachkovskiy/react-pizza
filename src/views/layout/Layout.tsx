import { Outlet } from 'react-router-dom';
import s from './layout.module.scss';

export default function Layout() {
  return (
    <div className={s.layout__wrapper}>
      <header className={s.layout__header}>
        <div>
          <h1 className={s.layout__title}>REACT PIZZA</h1>
          <span className={s.layout__subtitle}>
            самая вкусная пицца во вселенной
          </span>
        </div>
      </header>
      <main className={s.layout__main}>
        <Outlet />
      </main>
    </div>
  );
}
