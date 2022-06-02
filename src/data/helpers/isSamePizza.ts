import { TPizzaIdentification } from '../types';

function isSamePizza(
  firstPizza: TPizzaIdentification,
  secondPizza: TPizzaIdentification
) {
  return (
    firstPizza.id === secondPizza.id &&
    firstPizza.type === secondPizza.type &&
    firstPizza.size === secondPizza.size
  );
}

export default isSamePizza;
