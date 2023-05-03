import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";
import { Discover } from "./routes/Discover";
import { AroundYou } from "./routes/AroundYou";
import { TopArtist } from "./routes/TopArtist";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { TopCharts } from "./routes/TopCharts";
import { ChartsDetails } from "./routes/ChartsDetails";
import { ArtistsDetails } from "./routes/ArtistsDetails";
import { Search } from "./routes/Search";
import { Login } from "./components/login-register/Login";
import { Signup } from "./components/login-register/Signup";
import { SnackbarProvider, } from "notistack";
import { LikedSong } from "./routes/LikedSong";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Discover />,
      },
      {
        path: "/around",
        element: <AroundYou />,
      },
      {
        path: "/artists",
        element: <TopArtist />,
      },
      {
        path: "/chart",
        element: <TopCharts />,
      },
      {
        path: "/songsdetails/:idsong",
        element: <ChartsDetails />,
      },
      {
        path: "/artistsdetails/:idartists",
        element: <ArtistsDetails />,
      },
      {
        path: "/search/:searchparams",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/collection/tracks",
    element: <LikedSong />,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
