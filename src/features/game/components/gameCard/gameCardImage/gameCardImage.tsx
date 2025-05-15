interface GameCardImageProps {
  styles: CSSModuleClasses;
  imageUrl?: string | null;
  fallbackImage: string;
  onClick?: () => void;
}

const GameCardImage = ({
  imageUrl,
  fallbackImage,
  styles,
  onClick,
}: GameCardImageProps) => {
  return (
    <div
      className="relative w-full h-48"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className={styles.gameImage}
        src={imageUrl ?? fallbackImage}
        alt="Game Card"
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackImage;
        }}
        loading="lazy"
      />
    </div>
  );
};
export default GameCardImage;
