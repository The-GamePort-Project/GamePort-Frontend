import { ReactNode } from "react";
import styles from "./confirmButton.module.scss";
import { IBaseButtonProps } from "../../../types";

interface IConfirmButtonProps extends Omit<IBaseButtonProps, "route"> {
  type?: "submit";
  size?: "small" | "medium" | "large";
}
const ConfirmButton = ({
  label,
  onClick,
  disabled = false,
  type = "submit",
  size = "medium",
}: IConfirmButtonProps): ReactNode => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[size || "medium"]}`}
    >
      {label}
    </button>
  );
};

export default ConfirmButton;
