import { useState } from 'react';
import s from './card.module.scss';
import { Image, Tabs, TabsGroup, Tab, Cost, Button } from '../../ui';

interface IButton {
  name: string;
  cost: number;
  photo?: string;
  availableTypes?: ('thin' | 'traditional')[];
  availableSizes?: (26 | 30 | 40)[];
}

export default function Card({
  name,
  cost,
  photo,
  availableTypes = ['thin', 'traditional'],
  availableSizes = [26, 30, 40],
}: IButton) {
  const [selectedType, setSelectedType] = useState<'thin' | 'traditional'>(
    'thin'
  );
  const [selectedSize, setSelectedSize] = useState<26 | 30 | 40>(26);

  return (
    <article className={s.card}>
      <div className={s.card__photo}>
        <Image src={photo || ''} alt={name} />
      </div>
      <p className={s.card__name}>{name}</p>
      <div className={s.card__characteristics}>
        <Tabs>
          <TabsGroup
            name={`${name}_type`}
            activeTab={selectedType}
            setActiveTab={setSelectedType}
          >
            <Tab
              value={1}
              title='тонкое'
              disabled={!availableTypes?.includes('thin')}
            />
            <Tab
              value={2}
              title='традиционное'
              disabled={!availableTypes?.includes('traditional')}
            />
          </TabsGroup>
          <TabsGroup
            name={`${name}_size`}
            activeTab={selectedSize}
            setActiveTab={setSelectedSize}
          >
            <Tab
              value={26}
              title='26 см.'
              disabled={!availableSizes?.includes(26)}
            />
            <Tab
              value={30}
              title='30 см.'
              disabled={!availableSizes?.includes(30)}
            />
            <Tab
              value={40}
              title='40 см.'
              disabled={!availableSizes?.includes(40)}
            />
          </TabsGroup>
        </Tabs>
      </div>
      <div className={s.card__submit}>
        <Cost value={cost} prefix='от ' />
        <Button>Добавить</Button>
      </div>
    </article>
  );
}
