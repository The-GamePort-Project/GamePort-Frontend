import React from 'react';
import styles from './SmallForm.module.scss';
interface SmallFormProps {
  formTitle?: string;
  children: React.ReactNode;
}

const SmallForm: React.FC<SmallFormProps> = ({ children, formTitle }) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-semibold mb-[2rem]">
        {formTitle || 'Small Form'}
      </h2>
      <div className={styles.childrenWrapper}>
        {children}
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default SmallForm;
