import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IGetAddressResponse, IGetAddressRequest } from "./types";

const token = "0aebfddcd6e6b4784af35b5f4add311180e2ec84";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://suggestions.dadata.ru/",
  }),
  endpoints: (build) => ({
    getAddress: build.query<IGetAddressResponse, IGetAddressRequest>({
      query: ({ query/*, count*/ }) => ({
        url: "suggestions/api/4_1/rs/suggest/address",
        params: { query/*, count*/ },
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
      }),
    }),
  }),
});

export const { useGetAddressQuery } = addressApi;
