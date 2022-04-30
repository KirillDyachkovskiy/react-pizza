import {
  EPizzaType,
  TAddPizzaToCartPayload,
  TPizzaIdentification,
  TPizzaSize,
  TPizzaType,
} from '../../../data/types';
import { Button, Cost, Image } from '../../ui';
import s from './cartCard.module.scss';

interface IButton {
  id: number;
  name: string;
  totalPrice: number;
  imageUrl: string;
  type: TPizzaType;
  size: TPizzaSize;
  price: number;
  count: number;
  onPizzaAdd: (pizza: TAddPizzaToCartPayload) => void;
  onPizzaSubtract: (pizza: TPizzaIdentification) => void;
  onPizzaRemove: (pizza: TPizzaIdentification) => void;
}

export default function CartCard({
  id,
  name,
  totalPrice,
  imageUrl,
  type,
  size,
  price,
  count,
  onPizzaAdd,
  onPizzaSubtract,
  onPizzaRemove,
}: IButton) {
  return (
    <div className={s.cartCard}>
      <div className={s.cartCard__info}>
        <div className={s.cartCard__photo}>
          <Image src={imageUrl} alt={name} />
        </div>
        <div>
          <h2 className={s.cartCard__name}>{name}</h2>
          <span className={s.cartCard__description}>
            {`${EPizzaType[type]} тесто, ${size} см.`}
          </span>
        </div>
      </div>
      <div className={s.cartCard__calculator}>
        <div className={s.cartCard__counter}>
          <Button
            onClick={() =>
              onPizzaSubtract({
                id,
                size,
                type,
              })
            }
          >
            -
          </Button>
          <span className={s.cartCard__count}>{count}</span>
          <Button
            onClick={() =>
              onPizzaAdd({
                id,
                name,
                imageUrl,
                type,
                size,
                price,
              })
            }
          >
            +
          </Button>
        </div>
        <Cost value={totalPrice} />
        <Button
          type='black'
          onClick={() =>
            onPizzaRemove({
              id,
              size,
              type,
            })
          }
        >
          x
        </Button>
      </div>
    </div>
  );
}
