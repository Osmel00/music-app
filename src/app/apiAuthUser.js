import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiAuthUsers = createApi({
  reducerPath: "apiAuthUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/auth/",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    getGoogleUsers: builder.query({
      query: () => `login/success`,
    }),
    getUsers: builder.query({
      query: () => `user`,
    }),
  }),
});

export const { useGetGoogleUsersQuery,useGetUsersQuery} = apiAuthUsers;

// GetLogOut: builder.query({
//   query: () => `logout`,
// }),
