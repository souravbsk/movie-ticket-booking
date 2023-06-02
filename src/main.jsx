import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Components/Pages/Home/Home";
import MovieDetails from "./Components/Pages/MovieDetails/MovieDetails";
import MyBookings from "./Components/Pages/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/moviedetails/:id",
        element:<MovieDetails></MovieDetails>
      },
      {
        path:"/mybooking",
        element:<MyBookings></MyBookings>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
