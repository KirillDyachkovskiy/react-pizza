import { useState } from 'react';
import { Button, Tab, Tabs, TabsGroup } from './ui';
import { Card, CatalogSorter, Categories } from './components';
import cheeseChicken from './assets/images/cheese-chicken.png';

const categories = [
  {
    id: 1,
    label: 'Все',
  },
  {
    id: 2,
    label: 'Мясные',
  },
  {
    id: 3,
    label: 'Вегетарианские',
  },
  {
    id: 4,
    label: 'Гриль',
  },
  {
    id: 5,
    label: 'Острые',
  },
  {
    id: 6,
    label: 'Закрытые',
  },
];

export default function App() {
  const [activeSize, setActiveSize] = useState<1 | 2>(1);
  const [activeRad, setActiveRad] = useState<26 | 30 | 40>(26);

  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 40 }}
    >
      <div>
        <Button>Click me!</Button>
        <Button type='black'>Click me!</Button>
        <Button disabled>Click me!</Button>
        <Button disabled type='black'>
          Click me!
        </Button>
      </div>
      <div style={{ width: 280 }}>
        <p>
          {activeSize} {activeRad}
        </p>
        <Tabs>
          <TabsGroup
            name='size'
            activeTab={activeSize}
            setActiveTab={setActiveSize}
          >
            <Tab value={1} label='тонкое' />
            <Tab value={2} label='традиционное' />
          </TabsGroup>
          <TabsGroup
            name='rad'
            activeTab={activeRad}
            setActiveTab={setActiveRad}
          >
            <Tab value={26} label='26см.' />
            <Tab value={30} label='30см.' />
            <Tab value={40} label='40см.' disabled />
          </TabsGroup>
        </Tabs>
        <br />
        <Tabs>
          <TabsGroup
            name='size2'
            activeTab={activeSize}
            setActiveTab={setActiveSize}
          >
            <Tab value={1} label='тонкое' />
            <Tab value={2} label='традиционное' />
          </TabsGroup>
        </Tabs>
      </div>
      <Card name='Креветки по-азиатски' cost={450} photo={cheeseChicken} />
      <CatalogSorter name='pizza-catalog' />
      <Categories categories={categories} onChange={() => {}} />
    </main>
  );
}
