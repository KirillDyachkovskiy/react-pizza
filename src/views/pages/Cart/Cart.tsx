import { useSelector } from 'react-redux';
import { useTitle } from '../../../data/hooks';
import { TCartItem, TPage } from '../../../data/types';
import { SimpleCard } from '../../components';
import { Button, Cost, Image } from '../../ui';

import emptyCart from '../../assets/images/empty-cart.png';
import s from './cart.module.scss';
import { selectCartPizzas } from '../../../data/redux/store';

export default function Cart({ title }: TPage) {
  useTitle(title);

  const pizzas = useSelector(selectCartPizzas);

  if (!pizzas.length) {
    return (
      <section className={s.cartPage}>
        <div className={s.cartPage__wrapper}>
          <h2 className={s.cartPage__title}>Корзина пустая 😕</h2>
          <p className={s.cartPage__description}>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <div className={s.cartPage__photo}>
            <Image src={emptyCart as string} />
          </div>
          <Button type='black' path='/'>
            Вернуться назад
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className={s.cartPage}>
      <div className={s.cartPage__wrapper}>
        <header className={s.cartPage__header}>
          <h2>Корзина</h2>
          <Button>Очистить корзину</Button>
        </header>
        {pizzas.map((pizza: TCartItem) => (
          <SimpleCard
            key={`${pizza.id}_${pizza.type}_${pizza.size}`}
            name={pizza.name}
            price={pizza.price}
            imageUrl={pizza.imageUrl}
            type={pizza.type}
            size={pizza.size}
            count={pizza.count}
          />
        ))}
        <footer className={s.cartPage__footer}>
          <div className={s.cartPage__cancel}>
            <p className={s.cartPage__summary}>
              Всего пицц: <span className={s.cartPage__count}>{3} шт.</span>
            </p>
            <Button path='/' type='black'>
              Вернуться назад
            </Button>
          </div>
          <div className={s.cartPage__submit}>
            <p className={s.cartPage__summary}>
              Сумма заказа: <Cost value={900} color='orange' />
            </p>
            <Button onClick={() => {}}>Оплатить сейчас</Button>
          </div>
        </footer>
      </div>
    </section>
  );
}
