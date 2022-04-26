import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import pizzasSlice from './pizzasSlice';

const store = configureStore({
  reducer: { filters: filtersSlice.reducer, pizzas: pizzasSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export const getPizzas = (state: RootState) => state.pizzas.items;
export const getCategory = (state: RootState) => state.filters.category;

export default store;
