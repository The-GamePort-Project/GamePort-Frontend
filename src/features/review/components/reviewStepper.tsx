import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfirmButton } from "../../../components";
import { IReviewQuestion } from "../models/reviewQuestions";

interface ReviewStepperProps {
  questions: IReviewQuestion[];
  onComplete: (answers: Record<string, any>) => void;
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
    Record<string, number | string | null>
  >({});
  const [answerValue, setAnswerValue] = useState<number | string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleNext = () => {
    console.log("answers", answers);
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.type]: answerValue });
    console.log("answers", answers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete({ ...answers, [currentQuestion.type]: answerValue });
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
                  onClick={handleNext}
                  disabled={!answerValue}
                />
              </div>
            )}
            {current.type === "recommend" && (
              <div className="flex gap-4">
                <button
                  className={`${
                    answerValue === "yes" ? "bg-blue-500 text-white" : ""
                  } p-2 rounded`}
                  onClick={() => {
                    setAnswerValue("yes");
                    setIsAnswered(true);
                  }}
                >
                  Yes
                </button>
                <button
                  className={`${
                    answerValue === "no" ? "bg-red-500 text-white" : ""
                  } p-2 rounded`}
                  onClick={() => {
                    setAnswerValue("no");
                    setIsAnswered(true);
                  }}
                >
                  No
                </button>
                <ConfirmButton
                  label="Confirm"
                  onClick={handleNext}
                  disabled={!answerValue}
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
                  value={answerValue as string}
                />
                <ConfirmButton
                  label="Confirm"
                  onClick={handleNext}
                  disabled={!answerValue}
                />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
