import { ReactNode } from "react";
import styles from "./confirmButton.module.scss";
interface ConfirmButtonProps {
  label: string;
  route?: string | null;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function ConfirmButton({
  label,
  route = null,
  onClick,
  disabled = false,
  type = "button",
}: ConfirmButtonProps): ReactNode {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={styles.button}>
      {label}
    </button>
  );
}

export default ConfirmButton;
