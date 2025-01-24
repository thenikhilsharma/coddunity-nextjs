import React, { useState } from "react";

const TrustedBy = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const companies = [
    "Acme Corp",
    "TechGiant",
    "InnovateCo",
    "FutureTech",
    "GlobalSoft",
    "DataDynamics",
    "CloudNine",
    "QuantumLeap",
  ];

  return (
    <div className={`bg-black py-16 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-2xl text-gray-400 font-sans">
          Trusted by Professionals and Teams
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex gap-16 items-center py-4 animate-scroll ${isHovered ? "pause" : ""}`}>
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="text-white text-4xl whitespace-nowrap font-serif font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
