import { Outlet } from "react-router-dom";
import { useAuthStore } from "../auth/store/useAuthStore";
import { Navigate } from "react-router-dom";
const Users = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
};
export default Users;
