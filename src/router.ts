import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
    errorElement: React.createElement(ErrorPage),
    children: [
      {
        path: "",
        element: React.createElement(HomePage),
      },
      {
        path: "/profile",
        element: React.createElement(ProfilePage),
      },
      { path: "/login", element: React.createElement(LoginPage) },
    ],
  },
]);

export default router;
