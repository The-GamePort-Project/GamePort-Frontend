import React from "react";
import styles from "./smallCard.module.scss";

interface SmallCardProps {
  children: React.ReactNode[];
}

const SmallCard = ({ children }: SmallCardProps) => {
  const [image, title, footer] = React.Children.toArray(children);

  return (
    <div className={styles.smallCard}>
      <div className={styles.cardImage}>{image}</div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardFooter}>{footer}</div>
    </div>
  );
};

export default SmallCard;
