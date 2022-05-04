import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TCartItem,
  TAddPizzaToCartPayload,
  TPizzaIdentification,
} from '../types';

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

type TCart = {
  pizzas: TCartItem[];
};

const initialState: TCart = {
  pizzas: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pushPizzaToCart: (
      state: TCart,
      action: PayloadAction<TAddPizzaToCartPayload>
    ) => {
      try {
        const currentPizzaIndex = state.pizzas.findIndex(
          ({ id, type, size }: TCartItem) =>
            isSamePizza({ id, type, size }, action.payload)
        );

        state.pizzas[currentPizzaIndex].count += 1;
        state.pizzas[currentPizzaIndex].totalPrice +=
          state.pizzas[currentPizzaIndex].price;
      } catch {
        state.pizzas.push({
          ...action.payload,
          count: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    subtractPizzaFromCart: (
      state: TCart,
      action: PayloadAction<TPizzaIdentification>
    ) => {
      const currentPizzaIndex = state.pizzas.findIndex(({ id, type, size }) =>
        isSamePizza({ id, type, size }, action.payload)
      );

      if (state.pizzas[currentPizzaIndex].count > 1) {
        state.pizzas[currentPizzaIndex].count -= 1;
        state.pizzas[currentPizzaIndex].totalPrice -=
          state.pizzas[currentPizzaIndex].price;
      }
    },
    removePizzaFromCart: (
      state: TCart,
      action: PayloadAction<TPizzaIdentification>
    ) => {
      const currentPizzaIndex = state.pizzas.findIndex(
        ({ id, type, size }: TCartItem) =>
          isSamePizza({ id, type, size }, action.payload)
      );

      state.pizzas.splice(currentPizzaIndex, 1);
    },
    clearCart: (state: TCart) => {
      state.pizzas = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
