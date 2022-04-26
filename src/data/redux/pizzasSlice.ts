import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPizza } from '../types';

type TPizzas = {
  items: TPizza[];
  isLoading: boolean;
};

const initialState: TPizzas = {
  items: [],
  isLoading: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPizzas: (state: TPizzas, action: PayloadAction<{ items: TPizza[] }>) => {
      state.items = action.payload.items;
    },
    setLoadStatus: (
      state: TPizzas,
      action: PayloadAction<{ status: boolean }>
    ) => {
      state.isLoading = action.payload.status;
    },
  },
});

export const { setPizzas, setLoadStatus } = filtersSlice.actions;
export default filtersSlice;
