import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: string;
  question: string;
  type: "rating" | "yesno" | "text";
}

interface ReviewStepperProps {
  questions: Question[];
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
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleNext = (value: any) => {
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.id]: value });

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete({ ...answers, [currentQuestion.id]: value });
    }
  };

  const current = questions[step];

  return (
    <div className="relative w-full h-72 mx-auto overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current.id}
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
              <input
                type="range"
                min={1}
                max={10}
                defaultValue={5}
                className="w-full"
                onChange={(e) => handleNext(parseInt(e.target.value))}
              />
            )}
            {current.type === "yesno" && (
              <div className="flex gap-4">
                <button
                  onClick={() => handleNext(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleNext(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  No
                </button>
              </div>
            )}
            {current.type === "text" && (
              <div>
                <textarea
                  onBlur={(e) => handleNext(e.target.value)}
                  className="w-full border p-2 rounded"
                  placeholder="Your thoughts..."
                />
                <p className="text-sm mt-2 text-gray-500">
                  Click outside the box to continue
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
