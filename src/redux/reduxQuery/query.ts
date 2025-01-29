import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PayloadAction } from "@reduxjs/toolkit";

export const getData = createApi({
  reducerPath: "getData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://671029b3a85f4164ef2d3eaf.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getNames: builder.query({
      query: (name) => `${name}`,
    }),
    deleteData: builder.mutation({
      query: (id: Number) => {
        console.log("id", id);

        return {
          url: `name/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetNamesQuery, useDeleteDataMutation } = getData;
