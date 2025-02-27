import React from 'react';
import NameInput from '../../components/inputs/NameInput/NameInput';
import LoginForm from '../../components/formLayouts/LoginForm';
function LoginPage() {
  const [name, setName] = React.useState('');
  return (
    <LoginForm>
      <NameInput state={name} setState={setName} />
    </LoginForm>
  );
}

export default LoginPage;
