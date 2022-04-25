import { useTitle } from '../../../data/hooks';
import { TPage, TPizza } from '../../../data/types';
import { Card } from '../../components';
import s from './catalog.module.scss';

type TCatalog = TPage & {
  pizzas: TPizza[];
};

export default function Catalog({ title, pizzas }: TCatalog) {
  useTitle(title);

  return (
    <section className={s.catalog}>
      {pizzas.map(({ id, name, price, imageUrl, sizes, types }: TPizza) => (
        <Card
          key={id}
          name={name}
          price={price}
          imageUrl={imageUrl}
          sizes={sizes}
          types={types}
        />
      ))}
    </section>
  );
}
