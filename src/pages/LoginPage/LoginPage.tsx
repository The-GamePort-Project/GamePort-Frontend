import { useState } from 'react';
import NameInput from '../../components/inputs/NameInput/NameInput';
import PasswordInput from '../../components/inputs/PasswordInput/PasswordInput';
import LoginForm from '../../components/formLayouts/LoginForm';
import httpService from '../../Services/HttpService';
function LoginPage() {
  const [username, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await httpService
        .setApplicationJson()
        .post('/login', { username, password });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <LoginForm>
        <NameInput state={username} setState={setName} />
        <PasswordInput state={password} setState={setPassword} />
        <button type="submit">Login</button>
      </LoginForm>
    </form>
  );
}
export default LoginPage;
