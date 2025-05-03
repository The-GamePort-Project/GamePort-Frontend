import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import {
  clearAuthTokens,
  setAccessToken as setTokenInStorage,
  setRefreshToken,
} from "./Services";
import Header from "./layout/header/Header";
import { pageRoutes } from "./models/Enums/PageRoutes";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./features/auth/store/useAuthStore";

function App() {
  const navigate = useNavigate();
  const { setAccessToken, logout } = useAuthStore();
  const handleLogout = () => {
    clearAuthTokens();
    logout();
    navigate(pageRoutes.login);
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    if (accessToken) {
      setTokenInStorage(accessToken);
      setAccessToken(accessToken);
    }
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }
    if (accessToken || refreshToken) {
      window.history.replaceState({}, document.title, window.location.pathname);
      navigate(pageRoutes.dashboard);
    }
  }, [navigate, setAccessToken]);

  return (
    <>
      <Header logout={handleLogout} />
      <main
        className={`App py-6 bg-slate-300 min-h-screen flex flex-col items-center
        sm:px-4
        md:px-8 
        lg:px-12
        xl:px-16`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default App;
