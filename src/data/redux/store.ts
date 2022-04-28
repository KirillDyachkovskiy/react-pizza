import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './catalogSlice';
import cartSlice from './cartSlice';
import { pizzasApi } from './pizzasApi';

const store = configureStore({
  reducer: {
    catalog: catalogSlice.reducer,
    cart: cartSlice.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const selectFilters = (state: RootState) => state.catalog;
export const selectCartPizzas = (state: RootState) => state.cart.pizzas;

export default store;
