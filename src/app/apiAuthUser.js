import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_SERVER = process.env.REACT_APP_MY_API_SERVER;
export const apiAuthUsers = createApi({
  reducerPath: "apiAuthUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/auth/", 
     //baseUrl: "https://api-rest-node-express.up.railway.app/api/v1/auth/" ,//https://api-rest-node-express.up.railway.app
    credentials: "include",
  }),
  
  endpoints: (builder) => ({
    getGoogleUsers: builder.query({
      query: () => `login/success`,
     
    }),
    getUsers: builder.query({
      query: () => `user`,
    
    }),
    getLikedSongs: builder.query({
      query: (userId) => `songs/${userId}`,
    
    }),
  }),
});

export const { useGetGoogleUsersQuery,useGetUsersQuery,useGetLikedSongsQuery} = apiAuthUsers;

// GetLogOut: builder.query({
//   query: () => `logout`,
// }),
