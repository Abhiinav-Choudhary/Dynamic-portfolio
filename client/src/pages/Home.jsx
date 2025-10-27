import React, { useState, useEffect } from "react";
import TemplateSelector from "../components/TemplateSelector";
import PortfolioForm from "../components/PortfolioForm";
import ProfileCard from "../components/ProfileCard";
import { getPortfolios } from "../api/portfolioAPI";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [portfolios, setPortfolios] = useState([]);

  // Fetch existing portfolios from API
  const fetchData = async () => {
    const res = await getPortfolios();
    setPortfolios(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        🧑‍💻 Portfolio Builder
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Choose a portfolio template, fill your details, and generate your
        personal profile. View your dynamic portfolio instantly!
      </p>

      {/* Step 1: Template Selection */}
      {!selectedTemplate && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Select a Template</h2>
          <TemplateSelector onSelect={(id) => setSelectedTemplate(id)} />
        </div>
      )}

      {/* Step 2: Show form when template selected */}
      {selectedTemplate && (
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Template Selected: <span className="text-indigo-600">{selectedTemplate}</span>
            </h2>
            <button
              onClick={() => setSelectedTemplate("")}
              className="text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
            >
              Change Template
            </button>
          </div>

          <PortfolioForm
            template={selectedTemplate}
            onAdd={() => {
              fetchData();
              setSelectedTemplate("");
            }}
          />
        </div>
      )}

      {/* Step 3: List of created portfolios */}
      {portfolios.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            👩‍💼 Created Portfolios
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {portfolios.map((p) => (
              <ProfileCard key={p.id} data={p} />
            ))}
          </div>
        </div>
      )}

      {portfolios.length === 0 && !selectedTemplate && (
        <p className="text-center text-gray-500 mt-20">
          No portfolios yet. Create your first one above!
        </p>
      )}
    </div>
  );
}
