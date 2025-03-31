"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const options = ["Ouro", "Prata", "Platina"];

export default function QuestionTwo({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  const handleOptionClick = (option) => {
    updateFormData("preciousMetal", option);
    nextStep();
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Em que metal precioso deseja que a joia seja produzida?
        </h3>
        <p className="text-gray-600">
          Selecione uma das opções abaixo para continuar
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleOptionClick(option)}
            className={`p-6 rounded-lg border-2 transition-all duration-200 text-gray-700 font-medium ${
              formData.preciousMetal === option
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-300 bg-white hover:border-blue-300 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeftIcon className="w-5 h-5 mr-1" />
          Voltar
        </button>
        <button
          onClick={nextStep}
          disabled={!formData.preciousMetal}
          className={`flex items-center px-4 py-2 rounded-md ${
            formData.preciousMetal
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Próximo
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
}
