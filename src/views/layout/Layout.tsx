import { Outlet } from 'react-router-dom';
import { Button } from '../ui';
import s from './layout.module.scss';

interface ILayout {
  hasButton: boolean;
}

export default function Layout({ hasButton }: ILayout) {
  return (
    <div className={s.layout__wrapper}>
      <header className={s.layout__header}>
        <div>
          <h1 className={s.layout__title}>REACT PIZZA</h1>
          <span className={s.layout__subtitle}>
            самая вкусная пицца во вселенной
          </span>
        </div>
        {hasButton && <Button path='cart'>122 p</Button>}
      </header>
      <main className={s.layout__main}>
        <Outlet />
      </main>
    </div>
  );
}
