import { useState } from 'react';
import { TPizzaSize, TPizzaType } from '../../../data/types';
import { Image, Tabs, TabsGroup, Tab, Cost, Button } from '../../ui';
import s from './card.module.scss';

interface IButton {
  name: string;
  price: number;
  imageUrl: string;
  types: TPizzaType[];
  sizes: TPizzaSize[];
}

export default function Card({ name, price, imageUrl, types, sizes }: IButton) {
  const [selectedType, setSelectedType] = useState<TPizzaType>(types[0]);
  const [selectedSize, setSelectedSize] = useState<TPizzaSize>(sizes[0]);

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
            activeTab={selectedType}
            setActiveTab={setSelectedType}
          >
            <Tab value={0} label='тонкое' disabled={!types.includes(0)} />
            <Tab value={1} label='традиционное' disabled={!types.includes(1)} />
          </TabsGroup>
          <TabsGroup<TPizzaSize>
            name={`${name}_size`}
            activeTab={selectedSize}
            setActiveTab={setSelectedSize}
          >
            <Tab value={26} label='26 см.' disabled={!sizes.includes(26)} />
            <Tab value={30} label='30 см.' disabled={!sizes.includes(30)} />
            <Tab value={40} label='40 см.' disabled={!sizes.includes(40)} />
          </TabsGroup>
        </Tabs>
      </div>
      <div className={s.card__submit}>
        <Cost value={price} prefix='от ' />
        <Button>Добавить</Button>
      </div>
    </article>
  );
}
