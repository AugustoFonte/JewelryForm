"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function QuestionSeven({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          Indique-nos uma breve descrição do que tem em mente
        </h3>
        <p className="text-gray-600">
          Descreva suas preferências para que possamos apresentar algo que vá de
          encontro às suas expectativas
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descrição (ex: desejo que seja um anel que tenha um desenho de uma
            cobra)
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black"
            placeholder="Descreva sua ideia aqui..."
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
          />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            Voltar
          </button>
          <button
            type="submit"
            disabled={!formData.description.trim()}
            className={`flex items-center px-4 py-2 rounded-md ${
              formData.description.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Finalizar
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </button>
        </div>
      </motion.form>
    </div>
  );
}
