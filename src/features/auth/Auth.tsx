import { Outlet } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Navigate } from "react-router-dom";
const Auth = () => {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn) {
    console.log("isLoggedIn", isLoggedIn);
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default Auth;
