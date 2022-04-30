import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState, selectPizzaCount } from '../../../data/redux/store';
import {
  EPizzaType,
  TPizzaParams,
  TPizzaSize,
  TPizzaType,
} from '../../../data/types';

import { Image, Tabs, TabsGroup, Tab, Cost, Button } from '../../ui';
import s from './catalogCard.module.scss';

interface ICard {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  types: TPizzaType[];
  sizes: TPizzaSize[];
  getPizzaParams: (pizzaParams: TPizzaParams) => void;
}

export default function CatalogCard({
  id,
  name,
  price,
  imageUrl,
  types,
  sizes,
  getPizzaParams,
}: ICard) {
  const [type, setType] = useState<TPizzaType>(types[0]);
  const [size, setSize] = useState<TPizzaSize>(sizes[0]);

  const count = useSelector((state: RootState) => selectPizzaCount(state, id));

  const handleAdd = () => {
    getPizzaParams({ type, size });
  };

  return (
    <article className={s.card}>
      <div className={s.card__photo}>
        <Image src={imageUrl} alt={name} />
      </div>
      <p className={s.card__name}>{name}</p>
      <div className={s.card__characteristics}>
        <Tabs>
          <TabsGroup<TPizzaType>
            name={`${name}_type`}
            activeTab={type}
            setActiveTab={setType}
          >
            <Tab
              value='thin'
              label={EPizzaType.thin}
              disabled={!types.includes('thin')}
            />
            <Tab
              value='traditional'
              label={EPizzaType.traditional}
              disabled={!types.includes('traditional')}
            />
          </TabsGroup>
          <TabsGroup<TPizzaSize>
            name={`${name}_size`}
            activeTab={size}
            setActiveTab={setSize}
          >
            <Tab value={26} label='26 см.' disabled={!sizes.includes(26)} />
            <Tab value={30} label='30 см.' disabled={!sizes.includes(30)} />
            <Tab value={40} label='40 см.' disabled={!sizes.includes(40)} />
          </TabsGroup>
        </Tabs>
      </div>
      <div className={s.card__submit}>
        <Cost value={price} prefix='от ' />
        <Button onClick={handleAdd} count={count}>
          Добавить
        </Button>
      </div>
    </article>
  );
}
