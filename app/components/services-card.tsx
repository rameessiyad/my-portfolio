'use client';

import React from "react";

interface ServicesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesCard = ({ icon, title, description }: ServicesCardProps) => {
  return (
    <div
      className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
      style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#22c55e";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a";
      }}
    >
      {/* Icon */}
      <div className="mb-4 text-green-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-green-500 font-semibold text-lg mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServicesCard;
