import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import { pizzasApi } from './pizzasApi';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const getFilters = (state: RootState) => state.filters;

export default store;
