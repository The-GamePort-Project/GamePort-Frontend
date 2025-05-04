import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfirmButton } from "../../../components";
import { IReviewQuestion } from "../models/reviewQuestions";
import { a, tr } from "framer-motion/client";

interface ReviewStepperProps {
  questions: IReviewQuestion[];
  onComplete: (
    answers: Record<string, string | number | null | boolean>
  ) => void;
}

const variants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export default function ReviewStepper({
  questions,
  onComplete,
}: ReviewStepperProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, number | string | boolean | null>
  >({});
  const [answerValue, setAnswerValue] = useState<
    number | string | null | boolean
  >(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleNext = (answer?: number | string | boolean) => {
    const currentQuestion = questions[step];
    if (answer !== null && step < questions.length - 1) {
      console.log("answer", answer);
      setAnswers({ ...answers, [currentQuestion.type]: answerValue });
      setStep(step + 1);
      setAnswerValue(null);
    } else {
      console.log("oncomplete", answers);
      onComplete(answers);
    }
  };

  const current = questions[step];

  return (
    <div className="relative w-full h-72 mx-auto overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current.type}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="absolute w-full h-full bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
        >
          <h2 className="text-xl font-semibold">{current.question}</h2>
          <div className="mt-4">
            {current.type === "rating" && (
              <div className="flex gap-4">
                <h3>{answerValue}</h3>
                <input
                  type="range"
                  min={1}
                  max={10}
                  className="w-full"
                  onChange={(e) => setAnswerValue(Number(e.target.value))}
                  value={(answerValue as number) ?? 5}
                />
                <ConfirmButton
                  label="Confirm"
                  onClick={() => handleNext(answerValue as number)}
                  disabled={!answerValue}
                />
              </div>
            )}
            {current.type === "recommend" && (
              <div className="flex gap-4">
                <button
                  className={`${
                    answerValue ? "bg-blue-500 text-white" : ""
                  } p-2 rounded`}
                  onClick={() => {
                    setAnswerValue(true);
                  }}
                >
                  Yes
                </button>
                <button
                  className={`${
                    !answerValue ? "bg-red-500 text-white" : ""
                  } p-2 rounded`}
                  onClick={() => {
                    setAnswerValue(false);
                  }}
                >
                  No
                </button>
                <ConfirmButton
                  label="Confirm"
                  onClick={() => handleNext(answerValue as boolean)}
                  disabled={answerValue === null}
                />
              </div>
            )}
            {current.type === "comment" && (
              <div>
                <textarea
                  className="w-full border p-2 rounded"
                  placeholder="Your thoughts..."
                  onChange={(e) => setAnswerValue(e.target.value)}
                  rows={4}
                  value={(answerValue as string) ?? ""}
                />
                <ConfirmButton
                  label="Confirm"
                  onClick={() => handleNext(answerValue as string)}
                  disabled={!answerValue}
                />
              </div>
            )}
            {current.type === "confirm" && (
              <div className="flex gap-4">
                <button
                  className="bg-green-500 text-white p-2 rounded"
                  onClick={() => handleNext()}
                >
                  Confirm
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => {
                    setAnswerValue(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
