import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { servicesApi } from "./apiServices";
import playerReducer from './features/playerSlice'
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    player:playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});

setupListeners(store.dispatch);
