import styles from "./scrollButton.module.scss";
interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: (direction: "left" | "right") => void;
}

const ScrollButton = ({ onClick, direction }: ScrollButtonProps) => {
  const icon: "arrow_back" | "arrow_forward" =
    direction === "left" ? "arrow_back" : "arrow_forward";
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onClick(direction)}
        className={` ${styles.button} material-symbols-outlined`}
      >
        {icon}
      </button>
    </div>
  );
};
export default ScrollButton;
