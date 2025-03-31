"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionOne from "./questions/QuestionOne";
import QuestionTwo from "./questions/QuestionTwo";
import QuestionThree from "./questions/QuestionThree";
import QuestionFour from "./questions/QuestionFour";
import QuestionFive from "./questions/QuestionFive";
import QuestionSix from "./questions/QuestionSix";
import QuestionSeven from "./questions/QuestionSeven";

const questions = [
  {
    id: 1,
    component: QuestionOne,
  },
  {
    id: 2,
    component: QuestionTwo,
  },
  {
    id: 3,
    component: QuestionThree,
  },
  {
    id: 4,
    component: QuestionFour,
  },
  {
    id: 5,
    component: QuestionFive,
    conditional: (formData) =>
      formData.hasPreciousStones && formData.hasPreciousStones !== "Não.",
  },
  {
    id: 6,
    component: QuestionSix,
  },
  {
    id: 7,
    component: QuestionSeven,
  },
];

export default function JewelryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    jewelryType: "",
    preciousMetal: "",
    color: "",
    hasPreciousStones: "",
    stoneDetails: "",
    finish: "",
    description: "",
  });

  const nextStep = () => {
    const nextQuestion = questions[currentStep + 1];
    if (
      nextQuestion &&
      (!nextQuestion.conditional || nextQuestion.conditional(formData))
    ) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getCurrentQuestion = () => {
    let question = questions[currentStep];
    if (question.conditional && !question.conditional(formData)) {
      return questions[currentStep + 1];
    }
    return question;
  };

  const CurrentQuestion = getCurrentQuestion().component;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Design sua Joia
              </h2>
              <div className="text-sm text-gray-500">
                Passo {currentStep + 1} de {questions.length}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentQuestion
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
