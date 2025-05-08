interface GameRatingProps {
  rating: number;
  size?: "small" | "large";
  showRatingNumber?: boolean;
}

const GameRating = ({
  rating,
  size,
  showRatingNumber = true,
}: GameRatingProps) => {
  const fullStar = "star";
  const halfStar = "star_half";
  const emptyStar = "star_border";

  const normalizedRating = rating / 2;

  return (
    <div className="flex items-center">
      {showRatingNumber && (
        <span
          className="text-yellow-500 mr-2"
          style={{ fontSize: size === "large" ? "2rem" : "1.5rem" }}
        >
          {rating}/10
        </span>
      )}
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;

        if (normalizedRating >= starNumber) {
          return (
            <span
              key={i}
              className="material-icons text-yellow-500"
              style={{ fontSize: size === "large" ? "3rem" : "2rem" }}
            >
              {fullStar}
            </span>
          );
        } else if (normalizedRating >= starNumber - 0.5) {
          return (
            <span
              key={i}
              className="material-icons text-yellow-500"
              style={{ fontSize: size === "large" ? "3rem" : "2rem" }}
            >
              {halfStar}
            </span>
          );
        } else {
          return (
            <span
              key={i}
              className="material-icons text-gray-400"
              style={{ fontSize: size === "large" ? "3rem" : "2rem" }}
            >
              {emptyStar}
            </span>
          );
        }
      })}
    </div>
  );
};

export default GameRating;
