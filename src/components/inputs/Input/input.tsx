import React from "react";
import styles from "./input.module.scss";

type InputType = "text" | "number" | "password";
interface InputProps {
  error?: string | null;
  type?: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ onChange, value, error, type = "text" }: InputProps) => {
  return (
    <>
      <div className="h-6 w-full">
        {error && <p className="text-red-500 font-bold text-lg">{error}</p>}
      </div>
      <input
        className={`${styles.input} border rounded-md w-full`}
        type={type}
        placeholder="Enter your name"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
