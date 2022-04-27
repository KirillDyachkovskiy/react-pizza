import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import { pizzasApi } from './pizzasSlice';
// import pizzasSlice from './pizzasSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// export const getPizzas = (state: RootState) => state.pizzas.items;
export const getCategory = (state: RootState) => state.filters.category;
export const getSortType = (state: RootState) => state.filters.sortType;

export default store;
