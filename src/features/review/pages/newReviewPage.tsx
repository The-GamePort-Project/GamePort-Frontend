import ReviewStepper from "../components/reviewStepper/reviewStepper";
import { useQuery, useMutation } from "@apollo/client";
import LoadingSpinner from "../../../components/loadingSpinner";
import { gqlService } from "../../../Services";
import { useParams } from "react-router-dom";
import { reviewQuestions } from "../models/reviewQuestions";

const NewReviewPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading } = useQuery(
    gqlService.query.GET_GAME_BY_SLUG_FOR_REVIEW,
    {
      variables: { data: { slug } },
    }
  );
  const [createReview] = useMutation(gqlService.mutation.CREATE_REVIEW, {
    onCompleted: (data) => {
      console.log("Review created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating review:", error);
    },
  });

  const onComplete = (
    answers: Record<string, string | number | boolean | null>
  ) => {
    const reviewData = {
      gameId: data?.game.id,
      ...answers,
    };
    createReview({
      variables: {
        data: reviewData,
      },
    });
  };
  if (loading) {
    return (
      <LoadingSpinner
        loading={loading}
        error={false}
        loadingMessage="Getting review ready..."
      />
    );
  }

  return (
    <div className="md:w-[80%] lg:w-[50%] w-[90%] flex flex-col items-center justify-center mx-auto mt-[10%]">
      <h1 className="text-yellow-500">New Review for {data.game.title}</h1>
      <ReviewStepper
        questions={reviewQuestions}
        onComplete={(answers) => {
          onComplete(answers);
        }}
      />
    </div>
  );
};

export default NewReviewPage;
