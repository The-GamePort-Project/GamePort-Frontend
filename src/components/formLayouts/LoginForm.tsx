import React from 'react';

interface LoginFormProps {
  children: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md w-96 relative">
      {children}
    </div>
  );
};

export default LoginForm;
