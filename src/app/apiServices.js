import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', '27a48454b3msh05bc78d8a580003p18e2f5jsn5bf3664fa91f');
        return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `/charts/world`,
    }),
    getChartsByGerne: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
  }),
  
});

export const { useGetTopChartsQuery,useGetChartsByGerneQuery } = servicesApi;
