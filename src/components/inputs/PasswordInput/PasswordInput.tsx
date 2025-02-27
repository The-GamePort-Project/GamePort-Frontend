import React from 'react';
import styles from './PasswordInput.module.scss';
type Props = {
  setState: React.Dispatch<React.SetStateAction<string>>;
  state: string;
};

function PasswordInput({ setState, state }: Props) {
  return (
    <input
      className={styles.input}
      type="password"
      placeholder="Enter your password"
      onChange={(e) => setState(e.target.value)}
      value={state}
    />
  );
}

export default PasswordInput;
