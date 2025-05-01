import { useState } from "react";
import NameInput from "../../components/inputs/NameInput/NameInput";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
import SmallForm from "../../components/formLayouts/SmallForm/SmallForm";
import { useNavigate } from "react-router-dom";
import { httpService, saveAuthTokens } from "../../Services";
import { pageRoutes } from "../../models/Enums/PageRoutes";

type InputFieldState = {
  value: string;
  error: string | null;
};
const defaultInputFieldState: InputFieldState = {
  value: "",
  error: null,
};
function LoginPage() {
  const navigate = useNavigate();
  const [username, setName] = useState<InputFieldState>(defaultInputFieldState);
  const [password, setPassword] = useState<InputFieldState>(
    defaultInputFieldState
  );
  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let invalidLogin = false;
    if (!username.value) {
      setName({ value: username.value, error: "Username is required" });
      invalidLogin = true;
    }
    if (!password.value) {
      setPassword({ value: password.value, error: "Password is required" });
      invalidLogin = true;
    }
    if (invalidLogin) {
      return;
    }
    const result = await loginAsync();
    if (!result) {
      setPassword({ value: password.value, error: "Invalid credentials" });
      return;
    }
    navigate(pageRoutes.dashboard);
  };
  const loginAsync = async (): Promise<boolean> => {
    try {
      const response: { data: { accessToken: string; refreshToken: string } } =
        await httpService.post("/login", { username, password });

      const { accessToken, refreshToken } = response.data;
      saveAuthTokens(accessToken, refreshToken);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ value: e.target.value, error: null });
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ value: e.target.value, error: null });
  };
  return (
    <form onSubmit={handleLogin}>
      <SmallForm formTitle="Login to GamePort">
        <NameInput
          value={username.value}
          updateFunction={onChangeUsername}
          error={username.error}
        />
        <PasswordInput
          value={password.value}
          updateFunction={onChangePassword}
          error={password.error}
        />
      </SmallForm>
    </form>
  );
}
export default LoginPage;
