import React from "react";
import { Outlet } from "react-router-dom";
import {
  clearAuthTokens,
  setAccessToken as setTokenInStorage,
  setRefreshToken,
  isLoggedIn,
} from "./Services";
import Header from "./layout/header/Header";
import { useNavigator } from "./hooks/useNavigator";
import { useAuthStore } from "./features/auth/store/useAuthStore";
import Footer from "./layout/footer/footer";
import styles from "./App.module.scss";

function App() {
  const { goToLogin, goHome } = useNavigator();
  const { login, logout } = useAuthStore();

  const handleLogout = () => {
    clearAuthTokens();
    logout();
    goToLogin();
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");
    const refreshToken = urlParams.get("refreshToken");

    if (accessToken) {
      setTokenInStorage(accessToken);
      login(accessToken);
    }
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }
    if (accessToken || refreshToken) {
      window.history.replaceState({}, document.title, window.location.pathname);
      goHome();
    }
  }, [login, goHome]);

  return (
    <>
      <div className="lg:px-3 bg-black">
        <Header logout={handleLogout} isLoggedIn={isLoggedIn()} />
        <main
          className={`App min-h-screen flex flex-col items-center ${styles.background}`}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
