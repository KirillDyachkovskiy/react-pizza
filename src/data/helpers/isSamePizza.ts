import { TPizzaIdentification } from '../types';

export default function isSamePizza(
  firstPizza: TPizzaIdentification,
  secondPizza: TPizzaIdentification
) {
  return (
    firstPizza.id === secondPizza.id &&
    firstPizza.type === secondPizza.type &&
    firstPizza.size === secondPizza.size
  );
}
