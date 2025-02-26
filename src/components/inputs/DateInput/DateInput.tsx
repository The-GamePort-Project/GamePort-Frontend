import React from 'react';
import styles from './DateInput.module.css';
interface Props {
  dateInputState: React.Dispatch<React.SetStateAction<string>>;
}
export default function DateInput({ dateInputState }: Props) {
  return (
    <input
      className={styles.input}
      type="date"
      onChange={(e) => dateInputState(e.target.value)}
    />
  );
}
