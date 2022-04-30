import { useDispatch, useSelector } from 'react-redux';
import { useTitle } from '../../../data/helpers';
import {
  TCartItem,
  TAddPizzaToCartPayload,
  TPage,
  TPizzaIdentification,
} from '../../../data/types';

import {
  clearCart,
  pushPizzaToCart,
  removePizzaFromCart,
  subtractPizzaFromCart,
} from '../../../data/redux/cartSlice';
import { selectCartPizzas, selectTotalValues } from '../../../data/redux/store';

import { CartCard } from '../../components';
import { Button, Cost, Image } from '../../ui';
import s from './cart.module.scss';

import emptyCart from '../../assets/images/empty-cart.png';

export default function Cart({ title }: TPage) {
  useTitle(title);

  const pizzas = useSelector(selectCartPizzas);
  const { count, price } = useSelector(selectTotalValues);

  const dispatch = useDispatch();

  const handleAddPizza = (pizza: TAddPizzaToCartPayload) => {
    dispatch(pushPizzaToCart(pizza));
  };

  const handleSubtractPizza = (pizza: TPizzaIdentification) => {
    dispatch(subtractPizzaFromCart(pizza));
  };

  const handleRemovePizza = (pizza: TPizzaIdentification) => {
    dispatch(removePizzaFromCart(pizza));
  };

  const handleCartClear = () => {
    dispatch(clearCart());
  };

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
          <Button onClick={handleCartClear}>Очистить корзину</Button>
        </header>
        {pizzas.map((pizza: TCartItem) => (
          <CartCard
            key={`${pizza.id}_${pizza.type}_${pizza.size}`}
            {...pizza}
            onPizzaAdd={handleAddPizza}
            onPizzaSubtract={handleSubtractPizza}
            onPizzaRemove={handleRemovePizza}
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
