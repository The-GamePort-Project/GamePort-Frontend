import { useState } from "react";

interface ScoreInputProps {
  onClick: (value: number) => void;
}

const ScoreInput = ({ onClick }: ScoreInputProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const renderStars = (hover: boolean = false) => {
    const displayRating = hover ? hoverRating : rating;
    return [...Array(10)].map((_, index) => {
      const starIndex = index + 1;
      const isFull = starIndex <= displayRating;
      const isHalf = starIndex === displayRating && displayRating % 1 !== 0;
      return (
        <span
          className="material-icons"
          key={starIndex}
          onMouseEnter={() => hover && setHoverRating(starIndex)}
          onMouseLeave={() => hover && setHoverRating(0)}
          onClick={() => {
            setRating(starIndex);
            onClick(starIndex ?? 0);
          }}
          style={{
            cursor: "pointer",
            fontSize: "30px",
            color: isFull ? "gold" : isHalf ? "orange" : "gray",
          }}
        >
          {isFull ? "star" : isHalf ? "star_half" : "star_border"}
        </span>
      );
    });
  };

  return (
    <div>
      <div
        onMouseLeave={() => {
          setHoverRating(0);
        }}
        onMouseEnter={() => {
          setHoverRating(rating);
        }}
      >
        {renderStars(hoverRating ? true : false)}
      </div>
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default ScoreInput;
