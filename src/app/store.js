import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { servicesApi } from "./apiServices";
import playerReducer from './features/playerSlice'
import { apiAuthUsers } from "./apiAuthUser";
import authUserReducer from "./features/authUserSlice";
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    [apiAuthUsers.reducerPath]: apiAuthUsers.reducer,

    player:playerReducer,
    authUser:authUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware,apiAuthUsers.middleware),
    

});



setupListeners(store.dispatch);
