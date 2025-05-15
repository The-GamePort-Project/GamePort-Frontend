import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gqlService } from "../../../../Services";
import { IGame } from "../../models/interfaces";
import { FlexResponsiveContainer } from "../../../../components";
const GameInfo: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("slug", slug);

  //TODO Fix this page
  const { data, loading, error } = useQuery<{ game: IGame }>(
    gqlService.query.GET_GAME_BY_SLUG,
    {
      variables: { data: { slug } },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error: Something went wrong
        {slug}
      </p>
    );

  const game = data?.game;

  if (!game) {
    return <p>Game not found.</p>;
  }

  return (
    <FlexResponsiveContainer backgroundColor="light">
      <h1>{game.title}</h1>
      <img
        src={game.coverImageUrl || ""}
        alt={`${game.title} cover`}
        // className={styles.coverImage}
      />
      <p>
        <strong>Developer:</strong> {game.developer}
      </p>
      <p>
        <strong>Publisher:</strong> {game.publisher}
      </p>
      <p>
        <strong>Release Date:</strong>{" "}
        {new Date(game.releaseDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Rating:</strong> {game.rating.toFixed(1)}
      </p>
      <p>
        <strong>Description:</strong> {game.description}
      </p>

      {/* Genres */}
      {game.genres && game.genres.length > 0 && (
        <div>
          <strong>Genres:</strong>{" "}
          {game.genres.map((genre) => genre.name).join(", ")}
        </div>
      )}

      {/* Platforms */}
      {game.platforms && game.platforms.length > 0 && (
        <div>
          <strong>Platforms:</strong>{" "}
          {game.platforms.map((platform) => platform.name).join(", ")}
        </div>
      )}
    </FlexResponsiveContainer>
  );
};

export default GameInfo;
