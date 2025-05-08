"use server";
import { useQuery } from "@apollo/client";
import { gqlService } from "../../Services";
import { IGame, IReview } from "../game/models/interfaces";
import GameCard from "../game/components/gameCard/gameCard";
import LoadingSpinner from "../../components/loadingSpinner";
import { useGetAllGames } from "../../hooks/useApolloQuery";
import { HorizontalScrollContainer } from "../../components";
import Hero from "./Hero/Hero";

export default function Home() {
  const { loading: gamesLoading, data: gamesData } = useGetAllGames();

  const {
    loading: reviewsLoading,
    // error: reviewsError,
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
    <div className="flex flex-col items-center min-w-full">
      <Hero />
      <HorizontalScrollContainer>
        {gamesData?.games.map((game: IGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </HorizontalScrollContainer>
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
