import React from "react";
import styles from "./SmallForm.module.scss";
interface SmallFormProps {
  formTitle?: string;
  children: React.ReactNode;
}

const SmallForm: React.FC<SmallFormProps> = ({ children, formTitle }) => {
  return (
    <div className={styles.smallForm}>
      <h2 className="text-2xl font-semibold mb-[2rem]">
        {formTitle || "Small Form"}
      </h2>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default SmallForm;
