import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PayloadAction } from "@reduxjs/toolkit";
interface prop {
  name: string;
}
export const getData = createApi({
  reducerPath: "getData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://671029b3a85f4164ef2d3eaf.mockapi.io/",
  }),
  tagTypes:['Update'],
  endpoints: (builder) => ({
    getNames: builder.query({
      query: (name) => `${name}`,
      providesTags: ["Update"],
    }),
    deleteData: builder.mutation({
      query: (id: Number) => {
        return {
          url: `name/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ['Update'],
    }),
    addData: builder.mutation({
      query: (name) =>({
        url:`name`,
        method: 'POST',
        body: {name}
      }),
      invalidatesTags: ['Update']
    })
  }),
});

export const { useGetNamesQuery, useDeleteDataMutation,useAddDataMutation } = getData;
