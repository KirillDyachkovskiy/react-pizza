import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TCartItem,
  TAddPizzaToCartPayload,
  TPizzaIdentification,
} from '../types';
import { isSamePizza } from '../hooks';

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
        const {
          id: newPizzaId,
          type: newPizzaType,
          size: newPizzaSize,
        } = action.payload;

        const currentPizzaIndex = state.pizzas.findIndex((pizza: TCartItem) => {
          const { id, type, size } = pizza;

          return isSamePizza(
            { id, type, size },
            { id: newPizzaId, type: newPizzaType, size: newPizzaSize }
          );
        });

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
      const currentPizzaIndex = state.pizzas.findIndex((pizza: TCartItem) => {
        const { id, type, size } = pizza;

        return isSamePizza({ id, type, size }, action.payload);
      });

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
      const currentPizzaIndex = state.pizzas.findIndex((pizza: TCartItem) => {
        const { id, type, size } = pizza;

        return isSamePizza({ id, type, size }, action.payload);
      });

      state.pizzas.splice(currentPizzaIndex, 1);
    },
    clearCart: (state: TCart) => {
      state.pizzas = [];
    },
  },
});

export const {
  pushPizzaToCart,
  subtractPizzaFromCart,
  removePizzaFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice;
