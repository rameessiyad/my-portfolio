"use client";

import React from "react";
import Image from "next/image";
import { Skills } from "../data/skills";

const SkillsSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-6"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Heading */}
      <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
        Skills
      </h2>
      <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
        Technologies and tools I work with to bring ideas to life.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 w-full max-w-4xl">
        {Skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300 cursor-pointer"
            style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#22c55e";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a";
              (e.currentTarget as HTMLDivElement).style.transform =
                "translateY(0)";
            }}
          >
            <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src={skill.iconSrc}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-gray-400 text-xs text-center group-hover:text-green-500 transition-colors duration-300 leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
