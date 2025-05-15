import React from "react";
import { IGame } from "../../models/interfaces";
import styles from "./gameCard.module.scss";
import SmallCard from "../../../../components/cards/smallCard/smallCard";
import GameCardImage from "./gameCardImage/gameCardImage";
import GameRating from "../gameRating/gameRating";
import { useNavigator } from "../../../../hooks/useNavigator";
import { NavigationButton } from "../../../../components";
interface GameCardProps {
  game: IGame;
}
const fallbackImage = "fallback-image.jpg";

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [ratingHovered, setRatingHovered] = React.useState(false);
  const { goToGame, goToGenre, goToReview } = useNavigator();
  const gameTitle =
    game.title.length > 20 ? game.title.slice(0, 20) + "..." : game.title;
  return (
    <SmallCard>
      <GameCardImage
        styles={styles}
        imageUrl={game.coverImageUrl}
        fallbackImage={fallbackImage}
        onClick={() => goToGame(game.slug)}
      />

      <h3
        className={styles.cardTitle}
        onClick={() => goToGame(game.slug)}
        style={{ cursor: "pointer" }}
      >
        {gameTitle}
      </h3>

      <div>
        <div
          onMouseEnter={() => setRatingHovered(true)}
          onMouseLeave={() => setRatingHovered(false)}
        >
          {ratingHovered ? (
            <NavigationButton
              label="Review"
              onClick={() => goToReview(game.slug)}
              noUnderLine
            />
          ) : (
            <GameRating rating={game.rating} showRatingNumber={false} />
          )}
        </div>
        <div className={styles.genres}>
          {(game.genres ?? []).map((genre, index) => (
            <React.Fragment key={genre.id || genre.name}>
              <span
                key={genre.id || genre.name}
                className={styles.genre}
                onClick={() => goToGenre(genre.name)}
              >
                {genre.name}
              </span>
              {index < (game.genres?.length ?? 0) - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SmallCard>
  );
};

export default GameCard;
