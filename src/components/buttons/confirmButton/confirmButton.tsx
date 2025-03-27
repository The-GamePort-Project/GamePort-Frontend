import { ReactNode } from "react";
import styles from "./confirmButton.module.scss";
import { IBaseButtonProps } from "../../../types";

interface IConfirmButtonProps extends Omit<IBaseButtonProps, "route"> {
  type?: "submit";
}
const ConfirmButton =({
  label,
  onClick,
  disabled = false,
  type = "submit",
}: IConfirmButtonProps): ReactNode  => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={styles.button}>
      {label}
    </button>
  );
}

export default ConfirmButton;
