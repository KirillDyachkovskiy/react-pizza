import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TFilters = {
  sortBy: string;
  category: string;
};

const initialState: TFilters = {
  sortBy: '',
  category: '',
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
      action: PayloadAction<{ category: string }>
    ) => {
      state.category = action.payload.category;
    },
  },
});

export const { setSort, setCategory } = filtersSlice.actions;
export default filtersSlice;
