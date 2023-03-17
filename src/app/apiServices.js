import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', '27a48454b3msh05bc78d8a580003p18e2f5jsn5bf3664fa91f');
        return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `v1/charts/world`,
    }),
    getChartsByGerne: builder.query({
      query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    }),
    getChartsByCountry: builder.query({
      query: (country) => `v1/charts/country?country_code=${country}`,
    }),
    getChartsById: builder.query({
      query: (songsId) => `v1/tracks/details?track_id=${songsId}`,
    }),
    getArtistsById: builder.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
    
  }),
  
});

export const { useGetTopChartsQuery,useGetChartsByGerneQuery,useGetChartsByCountryQuery,useGetChartsByIdQuery,useGetArtistsByIdQuery } = servicesApi;

// getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
//     getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),