import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./features/auth/pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import AddGame from "./features/admin/pages/addGame";
import App from "./App";
import React from "react";
import AdminLogin from "./features/admin/pages/adminLogin";
import TestPage from "./pages/TestPage";
import RegisterPage from "./features/auth/pages/RegisterPage";

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
      { path: "test", element: React.createElement(TestPage) },
      {
        path: "/profile",
        element: React.createElement(ProfilePage),
      },
      { path: "/login", element: React.createElement(LoginPage) },
      { path: "/register", element: React.createElement(RegisterPage) },
      {
        path: "/admin/login",
        element: React.createElement(AdminLogin),
      },
      {
        path: "/admin/add-game",
        element: React.createElement(AddGame),
      },
    ],
  },
]);

export default router;
