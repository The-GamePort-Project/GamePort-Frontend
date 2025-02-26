import React from 'react';
import styles from './NameInput.module.css';
interface Props {
  nameInputState: React.Dispatch<React.SetStateAction<string>>;
}
function NameInput({ nameInputState }: Props) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter your name"
      onChange={(e) => nameInputState(e.target.value)}
    />
  );
}

export default NameInput;
