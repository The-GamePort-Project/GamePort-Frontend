import { Outlet } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Navigate } from "react-router-dom";
const Auth = () => {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <Outlet />
    </div>
  );
};

export default Auth;
