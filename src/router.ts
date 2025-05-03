import { createBrowserRouter } from "react-router-dom";
import { pageRoutes } from "./models/Enums/PageRoutes";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./features/auth/pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import AddGame from "./features/admin/pages/addGame";
import App from "./App";
import React from "react";
import AdminLogin from "./features/admin/pages/adminLogin";
import TestPage from "./pages/TestPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import NewReviewPage from "./features/review/pages/newReviewPage";
import GameInfo from "./features/game/pages/gameInfo";

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
        path: pageRoutes.profile,
        element: React.createElement(ProfilePage),
      },
      { path: pageRoutes.login, element: React.createElement(LoginPage) },
      { path: pageRoutes.register, element: React.createElement(RegisterPage) },
      {
        path: "/admin/login",
        element: React.createElement(AdminLogin),
      },
      {
        path: "/admin/add-game",
        element: React.createElement(AddGame),
      },
      { path: "/games/:slug", element: React.createElement(GameInfo) },
      {
        path: "/games/:slug/review",
        element: React.createElement(NewReviewPage),
      },
    ],
  },
]);

export default router;
