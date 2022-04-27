import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCategories, TPizza, TSortType } from '../types';

export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getPizzas: builder.query<
      TPizza[],
      { sortType: TSortType; category: TCategories }
    >({
      query: ({ sortType, category }) => ({
        url: 'pizzas',
        params: {
          _sort: sortType,
          ...(category !== 'all' && { category }),
        },
      }),
    }),
  }),
});

export const { useGetPizzasQuery } = pizzasApi;
