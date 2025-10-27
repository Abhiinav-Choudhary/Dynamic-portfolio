import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getPortfolioById } from "../api/portfolioAPI";
import TemplateA from "../components/templates/TemplateA";
import TemplateB from "../components/templates/TemplateB";

export default function PortfolioPage() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    getPortfolioById(id).then((res) => setPortfolio(res.data));
  }, [id]);

  if (!portfolio) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div>
      {portfolio.template === "A" ? (
        <TemplateA data={portfolio} />
      ) : (
        <TemplateB data={portfolio} />
      )}
    </div>
  );
}
