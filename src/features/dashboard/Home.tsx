"use server";

import { IGame } from "../game/models/interfaces";
import GameCard from "../game/components/gameCard/gameCard";
import LoadingSpinner from "../../components/loadingSpinner";
import { useGetAllGames, useGetHighestRatedGame } from "../game/hooks/useGames";
import { HorizontalScrollContainer } from "../../components";
import Hero from "./components/Hero/hero";
import { useEffect } from "react";

export default function Home() {
  const { loading: gamesLoading, data: gamesData, refetch } = useGetAllGames();
  const {
    loading: highestRatedGameLoading,
    data: highestRatedGameData,
    refetch: refetchHighestRatedGame,
  } = useGetHighestRatedGame();
  useEffect(() => {
    refetch();
    refetchHighestRatedGame();
  }, [refetch, refetchHighestRatedGame]);

  if (gamesLoading || highestRatedGameLoading) {
    return (
      <LoadingSpinner
        loading={gamesLoading}
        error={false}
        loadingMessage="Getting games ready..."
      />
    );
  }
  if (!gamesData || !highestRatedGameData) {
    return (
      <LoadingSpinner
        loading={false}
        error={true}
        loadingMessage="Error getting games"
      />
    );
  }

  return (
    <div className="flex flex-col items-center min-w-full">
      <Hero featuredGame={highestRatedGameData.getHighestRatedGame} />
      <HorizontalScrollContainer>
        {gamesData?.games.map((game: IGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </HorizontalScrollContainer>
    </div>
  );
}
