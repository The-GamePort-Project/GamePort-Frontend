import React from "react";
import { IGame } from "../models/interfaces";
interface GameCardProps {
  game: IGame;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div className="game-card border-2 border-black">
      {game.coverImageUrl ? (
        <img
          src={game.coverImageUrl}
          alt={`${game.title} cover`}
          className="game-card__image"
        />
      ) : (
        <div className="game-card__placeholder">No Image</div>
      )}

      {/* Game Info */}
      <div className="game-card__content">
        <h3 className="game-card__title" onClick={onClick}>
          {game.title}
        </h3>
        <p className="game-card__developer">By {game.developer}</p>
        <p className="game-card__rating">Rating: {game.rating.toFixed(1)}</p>
        <p className="game-card__release-date">
          Release Date: {new Date(game.releaseDate).toLocaleDateString()}
        </p>

        {/* Genres */}
        {game.genres && game.genres.length > 0 && (
          <div className="game-card__genres">
            {game.genres.map((genre) => genre.name).join(", ")}
          </div>
        )}

        {/* Platforms */}
        {game.platforms && game.platforms.length > 0 && (
          <div className="game-card__platforms">
            <strong>Platforms:</strong>{" "}
            {game.platforms.map((platform) => platform.name).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
