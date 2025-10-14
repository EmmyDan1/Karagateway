import React from "react";

const PartnersSection: React.FC = () => {
  const partners = [
    "Global Trade",
    "African Markets", 
    "International",
    "Worldwide"
  ];

  return (
    <section className="py-10 px-4 bg-lightbrown">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-3 text-[#4e3629]">
          Global Trade Network
        </h2>
        <p className="text-[#876e4B] text-center mb-6 text-sm">
          Bridging African markets with international partners
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
          {partners.map((name, index) => (
            <div
              key={index}
              className="bg-secondary p-3 rounded-lg shadow-xs w-28 h-20 flex items-center justify-center text-center"
            >
              <span className="text-[#876e4B] text-sm font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;