import { configureStore, createSelector } from '@reduxjs/toolkit';
import { TCartItem } from '../types';
import { cartReducer } from './cartSlice';
import { pizzasApi } from './pizzasApi';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;

export const selectCartPizzas = (state: TRootState) => state.cart.pizzas;
export const selectTotalValues = createSelector(
  [selectCartPizzas],
  (pizzas: TCartItem[]) =>
    pizzas.reduce(
      (accum: { count: number; price: number }, pizza: TCartItem) => ({
        count: accum.count + pizza.count,
        price: accum.price + pizza.totalPrice,
      }),
      { count: 0, price: 0 }
    )
);

const selectPizzaId = (state: TRootState, pizzaId: number) => pizzaId;

export const selectPizzaCount = createSelector(
  [selectCartPizzas, selectPizzaId],
  (pizzas: TCartItem[], id: number) =>
    pizzas
      .filter((pizza: TCartItem) => pizza.id === id)
      .reduce((accum: number, pizza: TCartItem) => accum + pizza.count, 0)
);

export default store;
