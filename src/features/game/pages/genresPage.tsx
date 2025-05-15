import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useGetGamesByGenre } from "../hooks/useGames";
import LoadingSpinner from "../../../components/loadingSpinner";
import GameCard from "../components/gameCard/gameCard";
import { FlexResponsiveContainer } from "../../../components";
import { IGame } from "../models/interfaces";
const GenresPage = () => {
  const { name } = useParams<{ name: string }>();
  const { loading, error, games } = useGetGamesByGenre(name || "");
  if (!name) {
    return <Navigate to="/games" replace />;
  }
  if (loading) {
    return (
      <LoadingSpinner
        loading={loading}
        error={false}
        loadingMessage="Getting games ready..."
      />
    );
  }
  return (
    <div className="flex flex-col items-center min-w-full">
      <h1 className="text-yellow-500 text-2xl font-bold mb-12">{name}</h1>
      {error && (
        <LoadingSpinner
          loading={false}
          error={true}
          loadingMessage="Error getting games"
        />
      )}
      <FlexResponsiveContainer>
        {games.map((game: IGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </FlexResponsiveContainer>
    </div>
  );
};
export default GenresPage;
