import { createBrowserRouter } from "react-router-dom";
import { routerPaths } from "./models/Constants/PageRoutes";
import LoginPage from "./features/auth/pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import AddGame from "./features/admin/pages/addGame";
import App from "./App";
import React from "react";
import Games from "./features/game/Games";
import AdminLogin from "./features/admin/pages/adminLogin";
import TestPage from "./pages/TestPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import NewReviewPage from "./features/review/pages/newReviewPage";
import GameInfo from "./features/game/pages/gameInfo";
import Auth from "./features/auth/Auth";
import Users from "./features/user/Users";
import Home from "./features/dashboard/Home";
import Review from "./features/review/Review";
import GenresPage from "./features/game/pages/genresPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
    errorElement: React.createElement(ErrorPage),
    children: [
      {
        path: "",
        element: React.createElement(Home),
      },
      { path: "test", element: React.createElement(TestPage) },
      {
        path: routerPaths.auth,
        element: React.createElement(Auth),
        children: [
          { path: routerPaths.login, element: React.createElement(LoginPage) },
          {
            path: routerPaths.register,
            element: React.createElement(RegisterPage),
          },
        ],
      },
      {
        path: routerPaths.register,
        element: React.createElement(RegisterPage),
      },
      {
        path: "/admin/login",
        element: React.createElement(AdminLogin),
      },
      {
        path: "/games",
        element: React.createElement(Games),
        children: [
          { path: routerPaths.slug, element: React.createElement(GameInfo) },
          {
            path: routerPaths.genres,
            element: React.createElement(GenresPage),
          },
          {
            path: routerPaths.genres_base,
            element: React.createElement(GenresPage),
          },
        ],
      },
      {
        path: "/reviews",
        element: React.createElement(Review),
        children: [
          {
            path: routerPaths.new_review,
            element: React.createElement(NewReviewPage),
          },
        ],
      },

      { path: routerPaths.users, element: React.createElement(Users) },
      {
        path: "/admin/add-game",
        element: React.createElement(AddGame),
      },
    ],
  },
]);

export default router;
