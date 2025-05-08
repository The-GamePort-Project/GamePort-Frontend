import { useRef } from "react";
import styles from "./horizontalScrollContainer.module.scss";
import { ScrollButton } from "../../buttons";
interface HorizontalScrollContainerProps {
  scrollAmount?: number;
  children: React.ReactNode;
}
const HorizontalScrollContainer = ({
  scrollAmount = 690,
  children,
}: HorizontalScrollContainerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollBy = direction === "left" ? -scrollAmount : scrollAmount;
    scrollRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });
  };
  return (
    <div className={styles.wrapper}>
      <ScrollButton direction="left" onClick={onScroll} />
      <div ref={scrollRef} className={`${styles.scrollContainer}`}>
        {children}
      </div>
      <ScrollButton direction="right" onClick={onScroll} />
    </div>
  );
};
export default HorizontalScrollContainer;
