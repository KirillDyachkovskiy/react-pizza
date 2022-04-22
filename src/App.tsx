import { Button } from './ui';

export default function App() {
  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 40 }}
    >
      <Button>Click me!</Button>
      <Button type='black'>Click me!</Button>
      <Button disabled>Click me!</Button>
      <Button disabled type='black'>
        Click me!
      </Button>
    </main>
  );
}
