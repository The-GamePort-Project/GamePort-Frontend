import React from "react";
import styles from "./flexResponsiveContainer.module.scss";
interface FlexResponsiveContainerProps {
  children: React.ReactNode;
  backgroundColor?: "light" | "dark";
}

const FlexResponsiveContainer = ({
  children,
  backgroundColor,
}: FlexResponsiveContainerProps) => {
  return (
    <div
      className={`${styles.flexResponsiveContainer} ${
        backgroundColor === "light" ? styles.light : styles.dark
      }`}
    >
      {children}
    </div>
  );
};
export default FlexResponsiveContainer;
