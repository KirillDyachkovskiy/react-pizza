import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCategories, TSortType } from '../types';

type TCatalog = {
  sortType: TSortType;
  category: TCategories;
};

const initialState: TCatalog = {
  sortType: 'rating',
  category: 'all',
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSortType: (
      state: TCatalog,
      action: PayloadAction<{ sortType: TSortType }>
    ) => {
      state.sortType = action.payload.sortType;
    },
    setCategory: (
      state: TCatalog,
      action: PayloadAction<{ category: TCategories }>
    ) => {
      state.category = action.payload.category;
    },
  },
});

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
