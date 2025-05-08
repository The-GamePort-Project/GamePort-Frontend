import React from "react";
import { IGame } from "../../models/interfaces";
import styles from "./gameCard.module.scss";
import SmallCard from "../../../../components/cards/smallCard/smallCard";
import GameCardImage from "./gameCardImage/gameCardImage";
import GameRating from "../gameRating/gameRating";
import { useNavigator } from "../../../../hooks/useNavigator";
interface GameCardProps {
  game: IGame;
}
const fallbackImage = "fallback-image.jpg";

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { goToGame, goToGenre } = useNavigator();
  const gameTitle =
    game.title.length > 20 ? game.title.slice(0, 20) + "..." : game.title;
  return (
    <SmallCard>
      <GameCardImage
        styles={styles}
        imageUrl={game.coverImageUrl}
        fallbackImage={fallbackImage}
      />

      <h3 className={styles.cardTitle} onClick={() => goToGame(game.slug)}>
        {gameTitle}
      </h3>

      <div>
        <GameRating rating={game.rating} />
        <div className={styles.genres}>
          {(game.genres ?? []).map((genre, index) => (
            <>
              {" "}
              <span
                key={genre.id || genre.name}
                className={styles.genre}
                onClick={() => goToGenre(genre.name)}
              >
                {genre.name}
              </span>
              {index < (game.genres?.length ?? 0) - 1 && ", "}
            </>
          ))}
        </div>
      </div>
    </SmallCard>
  );
};

export default GameCard;
