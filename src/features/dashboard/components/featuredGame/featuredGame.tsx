import { IGame } from "../../../game/models/interfaces";
import styles from "./featuredGame.module.scss";
import GameRating from "../../../game/components/gameRating/gameRating";
import GameVideo from "../../../game/components/gameVideo";
import { useState } from "react";
interface FeaturedGameProps {
  game: IGame;
}
const fallbackImage = "/fallback-image.jpg";
const FeaturedGame = ({ game }: FeaturedGameProps) => {
  const [trailerVisible, setTrailerVisible] = useState(false);
  return (
    <div className={styles.featuredGameContainer}>
      <section className={styles.featuredGameSectionOne}>
        {!trailerVisible ? (
          <>
            <img
              src={game.coverImageUrl || fallbackImage}
              alt={game.title}
              className={styles.featuredGameImage}
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
                e.currentTarget.onerror = null;
              }}
            ></img>
            <button
              onClick={() => setTrailerVisible(true)}
              className={styles.playButton}
            >
              Play trailer
            </button>
          </>
        ) : (
          <GameVideo
            videoUrl={game.trailerUrl as string}
            width="500px"
            height="300px"
          />
        )}
      </section>
      <section className={styles.featuredGameSectionTwo}>
        <h2 className={styles.featuredGameTitle}>{game.title}</h2>
        <GameRating rating={game.rating} size="large" />
        <p className={styles.featuredGameDescription}>{game.description}</p>
      </section>
    </div>
  );
};

export default FeaturedGame;
