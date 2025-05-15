import styles from "./verticalSidebar.module.scss";

interface VerticalSidebarProps {
  children: React.ReactNode;
}
const VerticalSidebar = ({ children }: VerticalSidebarProps) => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className="space-y-2 flex md:flex-col gap-3">{children}</ul>
    </div>
  );
};
export default VerticalSidebar;
