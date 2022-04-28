import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartItem, TCartItemPayload } from '../types';

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
      action: PayloadAction<TCartItemPayload>
    ) => {
      try {
        const currentPizzaIndex = state.pizzas.findIndex(
          (pizza: TCartItem) =>
            pizza.id === action.payload.id &&
            pizza.type === action.payload.type &&
            pizza.size === action.payload.size
        );

        state.pizzas[currentPizzaIndex].count += 1;
      } catch {
        state.pizzas.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { pushPizzaToCart } = cartSlice.actions;
export default cartSlice;
