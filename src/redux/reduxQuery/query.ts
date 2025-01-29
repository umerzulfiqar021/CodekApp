import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const getData = createApi({
reducerPath: 'getData',
baseQuery: fetchBaseQuery({baseUrl:'https://671029b3a85f4164ef2d3eaf.mockapi.io/'}),
endpoints: (builder)=>({
    getNames:builder.query({
        query:(name) => `${name}`
    }),
})

})

export const {useGetNamesQuery} = getData;