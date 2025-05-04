export interface IReviewQuestion {
  question: string;
  type: "rating" | "recommend" | "comment" | "confirm";
}

export const reviewQuestions: IReviewQuestion[] = [
  {
    question: "How would you rate the game overall?",
    type: "rating",
  },
  {
    question: "Would you recommend this game to a friend?",
    type: "recommend",
  },
  {
    question: "What did you like or dislike about the game?",
    type: "comment",
  },
  {
    question: "Submit your review? You can't undo this for now.",
    type: "confirm",
  },
];
