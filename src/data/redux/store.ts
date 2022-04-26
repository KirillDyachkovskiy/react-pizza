import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import pizzasSlice from './pizzasSlice';

const store = configureStore({
  reducer: { filters: filtersSlice.reducer, pizzas: pizzasSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
