import React from "react";
import Input from "../../../components/inputs/Input/input";
import SmallForm from "../../../components/formLayouts/SmallForm/SmallForm";
import { useAdminStore } from "../store/useAdminStore";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const admin_password = import.meta.env.VITE_ADMIN_ROUTE_PASSWORD;
const AdminLogin = () => {
  const [password, setPassword] = React.useState<string>("");
  const { setAdmin } = useAdminStore();
  const navigate = useNavigate();
  React.useEffect(() => {
    const storedPassword = localStorage.getItem("admin_password");
    if (storedPassword === admin_password) {
      setAdmin("admin");
      navigate("/admin/add-game");
    }
  }, [setAdmin, navigate]);

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === admin_password) {
      localStorage.setItem("admin_password", password);
      setAdmin("admin");
      navigate("/admin/add-game");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin}>
        <SmallForm>
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <Input
            type="password"
            placeholder="Password"
            className="mb-4"
            onChange={handleChangePassword}
            value={password}
            required={true}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            type="submit"
          >
            Login to Admin
          </button>
        </SmallForm>
      </form>
      <Outlet />
    </div>
  );
};

export default AdminLogin;
