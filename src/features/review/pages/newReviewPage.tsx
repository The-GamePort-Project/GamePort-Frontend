import ReviewStepper from "../components/reviewStepper";

const NewReviewPage = () => {
  const questions: {
    id: string;
    question: string;
    type: "rating" | "yesno" | "text";
  }[] = [
    {
      id: "overallRating",
      question: "How would you rate the game overall?",
      type: "rating",
    },
    {
      id: "recommend",
      question: "Would you recommend this game?",
      type: "yesno",
    },
    { id: "comment", question: "What did you like or dislike?", type: "text" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New Review</h1>
      <ReviewStepper
        questions={questions}
        onComplete={(answers) => {
          console.log("Review submitted:", answers);
        }}
      />
    </div>
  );
};

export default NewReviewPage;
