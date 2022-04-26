import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCategories } from '../types';

type TFilters = {
  sortBy: string;
  category: TCategories;
};

const initialState: TFilters = {
  sortBy: '',
  category: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSort: (state: TFilters, action: PayloadAction<{ sortType: string }>) => {
      state.sortBy = action.payload.sortType;
    },
    setCategory: (
      state: TFilters,
      action: PayloadAction<{ category: TCategories }>
    ) => {
      state.category = action.payload.category;
    },
  },
});

export const { setSort, setCategory } = filtersSlice.actions;
export default filtersSlice;
