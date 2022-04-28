import { EPizzaType, TPizzaSize, TPizzaType } from '../../../data/types';
import { Button, Cost, Image } from '../../ui';
import s from './cartCard.module.scss';

interface IButton {
  name: string;
  price: number;
  imageUrl: string;
  type: TPizzaType;
  size: TPizzaSize;
  count: number;
}

export default function CartCard({
  name,
  price,
  imageUrl,
  type,
  size,
  count,
}: IButton) {
  return (
    <div className={s.simpleCard}>
      <div className={s.simpleCard__info}>
        <div className={s.simpleCard__photo}>
          <Image src={imageUrl} alt={name} />
        </div>
        <div>
          <h2 className={s.simpleCard__name}>{name}</h2>
          <span className={s.simpleCard__description}>
            {`${EPizzaType[type]} тесто, ${size} см.`}
          </span>
        </div>
      </div>
      <div className={s.simpleCard__calculator}>
        <div className={s.simpleCard__counter}>
          <Button>-</Button>
          <span className={s.simpleCard__count}>{count}</span>
          <Button>+</Button>
        </div>
        <Cost value={price} />
        <Button type='black'>x</Button>
      </div>
    </div>
  );
}
