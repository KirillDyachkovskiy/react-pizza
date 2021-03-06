import { useActions, useAppSelector, useTitle } from '../../../data/hooks';
import { selectCartPizzas, selectTotalValues } from '../../../data/redux/store';
import { TCartItem, TPage } from '../../../data/types';
import { CartCard } from '../../components';
import { Button, Cost, Image } from '../../ui';
import s from './cart.module.scss';

import emptyCart from '../../assets/images/empty-cart.png';

export default function Cart({ title }: TPage) {
  useTitle(title);

  const pizzas = useAppSelector(selectCartPizzas);
  const { count, price } = useAppSelector(selectTotalValues);
  const {
    pushPizzaToCart,
    subtractPizzaFromCart,
    removePizzaFromCart,
    clearCart,
  } = useActions();

  const onCartClear = () => clearCart();

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
          <Button onClick={onCartClear}>Очистить корзину</Button>
        </header>
        {pizzas.map((pizza: TCartItem) => (
          <CartCard
            key={`${pizza.id}_${pizza.type}_${pizza.size}`}
            pizza={pizza}
            onPizzaAdd={pushPizzaToCart}
            onPizzaSubtract={subtractPizzaFromCart}
            onPizzaRemove={removePizzaFromCart}
          />
        ))}
        <footer className={s.cartPage__footer}>
          <div className={s.cartPage__cancel}>
            <p className={s.cartPage__summary}>
              Всего пицц: <span className={s.cartPage__count}>{count} шт.</span>
            </p>
            <Button path='/' type='black'>
              Вернуться назад
            </Button>
          </div>
          <div className={s.cartPage__submit}>
            <p className={s.cartPage__summary}>
              Сумма заказа: <Cost value={price} color='orange' />
            </p>
            <Button onClick={() => {}}>Оплатить сейчас</Button>
          </div>
        </footer>
      </div>
    </section>
  );
}
