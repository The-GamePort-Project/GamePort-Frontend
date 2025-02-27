import React from 'react';

interface LoginFormProps {
  children: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <form>{children}</form>
    </div>
  );
};

export default LoginForm;
