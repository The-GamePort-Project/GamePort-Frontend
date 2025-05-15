import { useAuthStore } from "../auth/store/useAuthStore";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Review = () => {
  const { isLoggedIn } = useAuthStore();
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default Review;
