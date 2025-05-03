"use server";
import { useQuery } from "@apollo/client";
import { gqlService } from "../Services";
import { IGame } from "../features/game/models/interfaces";
import GameCard from "../features/game/components/gameCard";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const goToGame = (slug: string) => {
    navigate(`/games/${slug}`);
  };
  const { loading, error, data } = useQuery(gqlService.query.GET_ALL_GAMES, {
    variables: {
      data: {
        skip: 0,
        take: 10,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data?.games.map((game: IGame) => (
        <GameCard
          key={game.id}
          game={game}
          onClick={() => goToGame(game.slug)}
        />
      ))}
    </div>
  );
}
