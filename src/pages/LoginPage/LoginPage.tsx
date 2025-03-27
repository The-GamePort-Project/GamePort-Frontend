import { useState } from 'react';
import NameInput from '../../components/inputs/NameInput/NameInput';
import PasswordInput from '../../components/inputs/PasswordInput/PasswordInput';
import SmallForm from '../../components/formLayouts/SmallForm/SmallForm';
import { useNavigate } from 'react-router-dom';
import httpService from '../../Services/HttpService';
import { pageRoutes } from '../../models/Enums/PageRoutes';

type InputFieldState = {
  value: string;
  error: string | null;
};
const defaultInputFieldState: InputFieldState = {
  value: '',
  error: null,
};
function LoginPage() {
  const navigate = useNavigate();
  const [username, setName] = useState<InputFieldState>(defaultInputFieldState);
  const [password, setPassword] = useState<InputFieldState>(
    defaultInputFieldState
  );
  const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    let invalidLogin = false;
    if (!username.value) {
      setName({ value: username.value, error: 'Username is required' });
      invalidLogin = true;
    }
    if (!password.value) {
      setPassword({ value: password.value, error: 'Password is required' });
      invalidLogin = true;
    }
    if (invalidLogin) {
      return;
    }
    loginAsync();
    navigate(pageRoutes.dashboard);
  };
  const loginAsync = async () => {
    try {
      const response = await httpService
        .setApplicationJson()
        .post('/login', { username, password });
      console.log(response);
    } catch (error) {
      console.error(error);
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
