import { ReactNode } from "react";
import styles from "./navigationButton.module.scss";
import { IBaseButtonProps } from "../../../types";

interface INavigationButtonProps extends Omit<IBaseButtonProps, "route"> {
  type?: "button";
}
const NavigationButton = ({
  label,
  onClick,
  disabled = false,
  type = "button",
}: INavigationButtonProps): ReactNode => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles.button}
    >
      <span>{label}</span>
    </button>
  );
};

export default NavigationButton;
