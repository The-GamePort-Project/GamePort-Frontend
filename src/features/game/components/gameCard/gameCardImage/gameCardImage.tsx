interface GameCardImageProps {
  styles: CSSModuleClasses;
  imageUrl?: string | null;
  fallbackImage: string;
}

const GameCardImage = ({
  imageUrl,
  fallbackImage,
  styles,
}: GameCardImageProps) => {
  return (
    <div className="relative w-full h-48">
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
