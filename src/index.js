import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { Discover } from "./routes/Discover";
import { AroundYou } from "./routes/AroundYou";
import {TopArtist} from "./routes/TopArtist"
import {store} from './app/store'
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Discover/>,
      },
      {
       
        path: "/around",
        element: <AroundYou/>,
      },
      {
       
        path: "/artists",
        element: <TopArtist/>,
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
