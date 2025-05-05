import { useState } from "react";
import Input from "../../../components/inputs/Input/input";
import SmallForm from "../../../components/formLayouts/SmallForm/SmallForm";
import { useNavigate } from "react-router-dom";
import { httpService } from "../../../Services";
import { pageRoutes } from "../../../models/Constants/PageRoutes";
import { AxiosResponse } from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { storageService } from "../../../Services";

type InputFieldState = {
  value: string;
  error: string | null;
};

const defaultInputFieldState: InputFieldState = {
  value: "",
  error: null,
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [useEmail, setUseEmail] = useState(false);
  const [identifier, setIdentifier] = useState<InputFieldState>(
    defaultInputFieldState
  );
  const [password, setPassword] = useState<InputFieldState>(
    defaultInputFieldState
  );
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (!identifier.value) {
      setIdentifier({
        value: identifier.value,
        error: `${useEmail ? "Email" : "Username"} is required`,
      });
      hasError = true;
    }
    if (!password.value) {
      setPassword({ value: password.value, error: "Password is required" });
      hasError = true;
    }

    if (hasError) return;

    try {
      const response: AxiosResponse = await httpService.post("/auth/login", {
        [useEmail ? "email" : "username"]: identifier.value,
        password: password.value,
      });
      const { accessToken, refreshToken } = response.data;
      login(accessToken);
      storageService.setItem("token", accessToken);
      storageService.setCookie("refreshToken", refreshToken, 1);

      navigate(pageRoutes.dashboard);
    } catch (error) {
      console.error(error);
      setGeneralError("Login failed. Please check your credentials.");
    }
  };

  const handleLoginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_BASEURL}/auth/google`;
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <SmallForm formTitle="Login to GamePort">
          <div style={{ textAlign: "right", marginBottom: "0.5rem" }}>
            <button
              type="button"
              onClick={() => setUseEmail(!useEmail)}
              style={{ fontSize: "0.9rem" }}
            >
              {useEmail ? "Use username instead" : "Use email instead"}
            </button>
          </div>

          <Input
            value={identifier.value}
            onChange={(e) =>
              setIdentifier({ value: e.target.value, error: null })
            }
            error={identifier.error}
            type={useEmail ? "email" : "text"}
            placeholder={useEmail ? "Email" : "Username"}
          />

          <Input
            value={password.value}
            onChange={(e) =>
              setPassword({ value: e.target.value, error: null })
            }
            error={password.error}
            type="password"
            placeholder="Password"
          />

          {generalError && <p style={{ color: "red" }}>{generalError}</p>}

          <button type="submit">Login</button>
        </SmallForm>
      </form>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button onClick={handleLoginWithGoogle}>Login with Google</button>
      </div>
    </>
  );
};

export default LoginPage;
