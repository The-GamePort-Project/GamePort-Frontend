import { ReactNode } from "react";
import styles from "./smallCard.module.scss";
const SmallCard = ({ children }: { children: ReactNode }) => {
  return <div className={styles.smallCard}>{children}</div>;
};
export default SmallCard;
