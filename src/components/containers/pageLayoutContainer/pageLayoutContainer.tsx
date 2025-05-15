import styles from "./pageLayoutContainer.module.scss";

interface PageLayoutContainerProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
}

const PageLayoutContainer = ({
  children,
  variant,
}: PageLayoutContainerProps) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row gap-4 justify-between w-full min-h-screen p-4 ${
        variant === "dark" ? styles.dark : ""
      } `}
    >
      {children}
    </div>
  );
};
export default PageLayoutContainer;
