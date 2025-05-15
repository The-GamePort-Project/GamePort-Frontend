import React from "react";
import styles from "./input.module.scss";

type InputType = "text" | "number" | "password" | "email" | "date";
interface InputProps {
  error?: string | null;
  type?: InputType;
  placeholder?: string;
  className?: string;
  required?: boolean;
  name?: string;
  value: string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = ({
  onChange,
  value,
  error,
  type = "text",
  className = "",
  placeholder = "Enter your name",
  required = false,
  name,
  onBlur,
  onFocus,
}: InputProps) => {
  return (
    <>
      <div className={styles.error}>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        className={`${styles.input} border rounded-md w-full ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </>
  );
};

export default Input;
