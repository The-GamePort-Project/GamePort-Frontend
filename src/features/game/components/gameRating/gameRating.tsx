interface GameRatingProps {
  rating: number;
}

const GameRating = ({ rating }: GameRatingProps) => {
  const fullStar = "star";
  const halfStar = "star_half";
  const emptyStar = "star_border";

  const normalizedRating = rating / 2;

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;

        if (normalizedRating >= starNumber) {
          return (
            <span key={i} className="material-icons text-yellow-500">
              {fullStar}
            </span>
          );
        } else if (normalizedRating >= starNumber - 0.5) {
          return (
            <span key={i} className="material-icons text-yellow-500">
              {halfStar}
            </span>
          );
        } else {
          return (
            <span key={i} className="material-icons text-gray-400">
              {emptyStar}
            </span>
          );
        }
      })}
    </div>
  );
};

export default GameRating;
