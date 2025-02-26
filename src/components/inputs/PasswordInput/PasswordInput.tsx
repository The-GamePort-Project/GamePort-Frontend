import React from 'react';

type Props = {
  passwordInputState: React.Dispatch<React.SetStateAction<string>>;
};

function PasswordInput({ passwordInputState }: Props) {
  return (
    <input
      type="password"
      placeholder="Enter your password"
      onChange={(e) => passwordInputState(e.target.value)}
    />
  );
}

export default PasswordInput;
