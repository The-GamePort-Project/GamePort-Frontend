import ReviewStepper from "../components/reviewStepper/reviewStepper";
import { useMutation } from "@apollo/client";
import LoadingSpinner from "../../../components/loadingSpinner";
import { gqlService } from "../../../Services";
import { useParams } from "react-router-dom";
import { reviewQuestions } from "../models/reviewQuestions";
import { useGetGameForReview } from "../hooks/useReviews";

const NewReviewPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { loading, error, data } = useGetGameForReview(slug || "");
  const [createReview] = useMutation(gqlService.mutation.CREATE_REVIEW, {
    onCompleted: (data) => {
      console.log("Review created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating review:", error);
    },
  });

  const onComplete = async (
    answers: Record<string, string | number | boolean | null>
  ) => {
    const reviewData = {
      gameId: data?.getGameForReview.id,
      ...answers,
    };
    await createReview({
      variables: {
        data: reviewData,
      },
    });
    return true;
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
  if (error) {
    return (
      <LoadingSpinner
        loading={false}
        error={!!error}
        loadingMessage="Error getting review"
        errorMessage={error.message}
      />
    );
  }
  return (
    <div className="md:w-[80%] lg:w-[50%] w-[90%] flex flex-col items-center justify-center mx-auto mt-[10%]">
      <h1 className="text-yellow-500">
        New Review for {data.getGameForReview.title}
      </h1>
      <ReviewStepper
        questions={reviewQuestions}
        onComplete={(answers) => {
          onComplete(answers);
          return true;
        }}
      />
    </div>
  );
};

export default NewReviewPage;
