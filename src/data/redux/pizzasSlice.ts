import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPizza } from '../types';

type TPizzas = {
  items: TPizza[];
};

const initialState: TPizzas = {
  items: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPizzas: (state: TPizzas, action: PayloadAction<{ items: TPizza[] }>) => {
      state.items = action.payload.items;
    },
  },
});

export const { setPizzas } = filtersSlice.actions;
export default filtersSlice;
