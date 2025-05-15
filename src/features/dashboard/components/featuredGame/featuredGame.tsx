import { IGame } from "../../../game/models/interfaces";
import styles from "./featuredGame.module.scss";
import GameRating from "../../../game/components/gameRating/gameRating";
import GameVideo from "../../../game/components/gameVideo";
import { useState } from "react";
import { NavigationButton } from "../../../../components";
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
            <div style={{ position: "relative", width: "60%" }}>
              <img
                src={game.coverImageUrl || fallbackImage}
                alt={game.title}
                className={styles.featuredGameImage}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                  e.currentTarget.onerror = null;
                }}
              ></img>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <NavigationButton
                  onClick={() => setTrailerVisible(true)}
                  label="Play Trailer"
                  noUnderLine
                />
              </div>
            </div>
          </>
        ) : (
          <GameVideo
            videoUrl={game.trailerUrl as string}
            width="50%"
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
