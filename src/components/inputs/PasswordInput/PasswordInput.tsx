import React from 'react';
import styles from './PasswordInput.module.scss';
type Props = {
  updateFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string | null;
  label?: string;
};

function PasswordInput({ value, updateFunction, error }: Props) {
  return (
    <>
      <div className="h-6 w-full">
        {error && <p className="text-red-500 font-bold text-lg">{error}</p>}
      </div>
      <input
        className={styles.input}
        type="password"
        placeholder="Enter your password"
        onChange={updateFunction}
        value={value}
      />
    </>
  );
}

export default PasswordInput;
