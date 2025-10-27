import React from 'react'
import { motion } from "framer-motion";

export default function TemplateSelector({ onSelect }) {
  const templates = [
    {
      id: "A",
      name: "Minimal Light",
      preview:
        "https://i.imgur.com/LLC4Jc3.png", // sample light portfolio screenshot
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: "B",
      name: "Dark Professional",
      preview:
        "https://i.imgur.com/D2Kz5Cy.png", // sample dark portfolio screenshot
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        ✨ Choose Your Portfolio Template
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {templates.map((t, index) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={() => onSelect(t.id)}
            className="cursor-pointer relative group border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            {/* Preview image */}
            <img
              src={t.preview}
              alt={t.name}
              className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
            />

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Template info */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-center">
              <div
                className={`inline-block bg-gradient-to-r ${t.color} text-white px-4 py-1 rounded-full text-sm shadow`}
              >
                {t.name}
              </div>
              <p className="text-gray-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition">
                Click to select this design
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
