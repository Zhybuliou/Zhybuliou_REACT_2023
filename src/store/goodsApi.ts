import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (arg) => {
        const { name } = arg;
        return {
          url: '',
          params: { name },
        };
      },
    }),
  }),
});

export default goodsApi;

export const { useGetGoodsQuery } = goodsApi;
