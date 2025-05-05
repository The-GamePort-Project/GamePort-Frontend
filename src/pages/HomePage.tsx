"use server";
import { useQuery } from "@apollo/client";
import { gqlService } from "../Services";
import { IGame, IReview } from "../features/game/models/interfaces";
import GameCard from "../features/game/components/gameCard";
import LoadingSpinner from "../components/loadingSpinner";
import { useNavigator } from "../hooks/useNavigator";
export default function HomePage() {
  const { goToGame } = useNavigator();
  const {
    loading: gamesLoading,
    error: gamesError,
    data: gamesData,
  } = useQuery(gqlService.query.GET_ALL_GAMES, {
    variables: {
      data: {
        skip: 0,
        take: 10,
      },
    },
  });

  const {
    loading: reviewsLoading,
    error: reviewsError,
    data: reviewsData,
  } = useQuery(gqlService.query.GET_ALL_REVIEWS);
  if (gamesLoading || reviewsLoading) {
    return (
      <LoadingSpinner
        loading={gamesLoading || reviewsLoading}
        error={false}
        loadingMessage="Getting games ready..."
      />
    );
  }
  return (
    <div>
      {gamesData?.games.map((game: IGame) => (
        <GameCard
          key={game.id}
          game={game}
          onClick={() => goToGame(game.slug)}
        />
      ))}
      {reviewsData?.getAllReviews.map((review: IReview) => (
        <div key={review.id} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">{review.title}</h2>
          <p className="text-gray-600">{review.content}</p>
          <p className="text-gray-500">Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
}
