import { ReactNode } from "react";
import styles from "./navigationButton.module.scss";
import { IBaseButtonProps } from "../../../types";

interface INavigationButtonProps extends Omit<IBaseButtonProps, "route"> {
  type?: "button";
  noUnderLine?: boolean;
}
const NavigationButton = ({
  label,
  onClick,
  disabled = false,
  type = "button",
  noUnderLine,
}: INavigationButtonProps): ReactNode => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={noUnderLine ? styles.buttonNoUnderline : styles.button}
    >
      <h3>{label}</h3>
    </button>
  );
};

export default NavigationButton;
