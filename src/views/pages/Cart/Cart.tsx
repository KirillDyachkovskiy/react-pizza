import { useTitle } from '../../../data/hooks';
import { TPage } from '../../../data/types';
import { SimpleCard } from '../../components';
import { Button, Cost } from '../../ui';
import s from './cart.module.scss';

export default function Cart({ title }: TPage) {
  useTitle(title);

  return (
    <section className={s.cartPage}>
      <header className={s.cartPage__header}>
        <h2>Корзина</h2>
        <Button>Очистить корзину</Button>
      </header>
      <SimpleCard
        name='Пепперони Фреш с перцем'
        price={200}
        imageUrl='https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg'
        type='тонкое'
        size={26}
        count={3}
      />
      <SimpleCard
        name='Цыпленок барбекю'
        price={340}
        imageUrl='https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg'
        type='толстое'
        size={40}
        count={2}
      />
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
    </section>
  );
}
