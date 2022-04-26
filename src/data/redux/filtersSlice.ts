import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCategories, TSortType } from '../types';

type TFilters = {
  sortType: TSortType;
  category: TCategories;
};

const initialState: TFilters = {
  sortType: 'popularity',
  category: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortType: (
      state: TFilters,
      action: PayloadAction<{ sortType: TSortType }>
    ) => {
      state.sortType = action.payload.sortType;
    },
    setCategory: (
      state: TFilters,
      action: PayloadAction<{ category: TCategories }>
    ) => {
      state.category = action.payload.category;
    },
  },
});

export const { setSortType, setCategory } = filtersSlice.actions;
export default filtersSlice;
