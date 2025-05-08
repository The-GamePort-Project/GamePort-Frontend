// const SmallForm: React.FC<SmallFormProps> = ({ children, formTitle }) => {
//     return (
//       <div className="p-4 bg-gray-200 rounded-lg shadow-md w-96">
//         <h2 className="text-xl font-semibold mb-[2rem]">
//           {formTitle || "Small Form"}
//         </h2>
//         <div className={styles.childrenWrapper}>{children}</div>
//       </div>
//     );
//   };
import styles from "./largeForm.module.scss";

interface LargeFormProps {
  formTitle?: string;
  children: React.ReactNode;
}

const LargeForm: React.FC<LargeFormProps> = ({ children, formTitle }) => {
  return (
    <div className={styles.largeForm}>
      <h2 className="text-xl font-semibold mb-[2rem]">
        {formTitle || "Large Form"}
      </h2>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};
export default LargeForm;
