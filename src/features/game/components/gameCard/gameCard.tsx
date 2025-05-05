import React from "react";
import { IGame } from "../../models/interfaces";
import styles from "./gameCard.module.scss";
import SmallCard from "../../../../components/cards/smallCard/smallCard";
interface GameCardProps {
  game: IGame;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <SmallCard>
      <div className={styles.gameCard} onClick={onClick}>
        <div className={styles.gameInfo}>
          <h3 className={styles.gameTitle}>{game.title}</h3>
          <p className={styles.gameDescription}>{game.description}</p>
        </div>
      </div>
    </SmallCard>
  );
};

export default GameCard;
