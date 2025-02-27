import React from 'react';
import styles from './NameInput.module.scss';
interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
function NameInput({ setState, state }: Props) {
  return (
    <input
      className={`${styles.input} border p-2 rounded-md w-full bg-amber-300`}
      type="text"
      placeholder="Enter your name"
      onChange={(e) => setState(e.target.value)}
      value={state}
    />
  );
}

export default NameInput;
