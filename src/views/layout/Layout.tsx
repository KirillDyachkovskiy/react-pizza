import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalValues } from '../../data/redux/store';

import { Button, Icon } from '../ui';
import s from './layout.module.scss';

interface ILayout {
  hasButton: boolean;
}

export default function Layout({ hasButton }: ILayout) {
  const { count, price } = useSelector(selectTotalValues);

  return (
    <div className={s.layout}>
      <div className={s.layout__wrapper}>
        <header className={s.layout__header}>
          <Link to='/'>
            <div className={s.layout__info}>
              <Icon name='pizza' />
              <div>
                <h1 className={s.layout__title}>REACT PIZZA</h1>
                <span className={s.layout__subtitle}>
                  самая вкусная пицца во вселенной
                </span>
              </div>
            </div>
          </Link>
          {hasButton && (
            <Button path='cart' count={count || '0'}>
              {price} ₽
            </Button>
          )}
        </header>
        <main className={s.layout__main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
