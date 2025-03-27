import React from 'react';
import styles from './NameInput.module.scss';

interface Props {
  error?: string | null;
  value: string;
  updateFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function NameInput({ updateFunction, value, error }: Props) {
  return (
    <>
      <div className="h-6 w-full">
        {error && <p className="text-red-500 font-bold text-lg">{error}</p>}
      </div>

      <input
        className={`${styles.input} border rounded-md w-full`}
        type="text"
        placeholder="Enter your name"
        onChange={updateFunction}
        value={value}
      />
    </>
  );
}

export default NameInput;
