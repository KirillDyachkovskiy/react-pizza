import { useState } from 'react';
import { Button, Tab, Tabs, TabsGroup } from './ui';

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
            <Tab value={1} title='тонкое' />
            <Tab value={2} title='традиционное' />
          </TabsGroup>
          <TabsGroup
            name='rad'
            activeTab={activeRad}
            setActiveTab={setActiveRad}
          >
            <Tab value={26} title='26см.' />
            <Tab value={30} title='30см.' />
            <Tab value={40} title='40см.' disabled />
          </TabsGroup>
        </Tabs>
        <br />
        <Tabs>
          <TabsGroup
            name='size2'
            activeTab={activeSize}
            setActiveTab={setActiveSize}
          >
            <Tab value={1} title='тонкое' />
            <Tab value={2} title='традиционное' />
          </TabsGroup>
        </Tabs>
      </div>
    </main>
  );
}
