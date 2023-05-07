import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders:(headers)=>{
        headers.set('X-RapidAPI-Key', API_TOKEN);
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
    getChartsRelatedById: builder.query({
      query: (songId) => `v1/tracks/related?track_id=${songId}`,
    }),
    getMultiSearch: builder.query({
      query: (search) => `v1/search/multi?query=${search}&search_type=SONGS_ARTISTS`,
    }),
    
  }),
  
});

export const { useGetTopChartsQuery,useGetChartsByGerneQuery,useGetChartsByCountryQuery,useGetChartsByIdQuery,useGetArtistsByIdQuery,useGetChartsRelatedByIdQuery,useGetMultiSearchQuery } = servicesApi;

// getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
//     getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),