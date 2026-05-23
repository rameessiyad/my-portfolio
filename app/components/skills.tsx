"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Skills } from "../data/skills";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)",
          top: "-60px",
          left: "-60px",
          filter: "blur(40px)",
        }}
      />

      {/* Corner brackets */}
      <span
        className="absolute top-10 right-10 w-16 h-16 pointer-events-none"
        style={{
          borderTop: "1.5px solid #22c55e",
          borderRight: "1.5px solid #22c55e",
          opacity: 0.25,
          borderRadius: "0 4px 0 0",
        }}
      />
      <span
        className="absolute bottom-10 left-10 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: "1.5px solid #22c55e",
          borderLeft: "1.5px solid #22c55e",
          opacity: 0.25,
          borderRadius: "0 0 0 4px",
        }}
      />

      {/* Heading */}
      <div
        className="flex flex-col items-center transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span
          className="text-xs font-medium tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full"
          style={{
            color: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          Tech Stack
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Skills
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 w-full max-w-4xl">
        {Skills.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: isHovered ? "rgba(34,197,94,0.07)" : "#1e1e1e",
                border: `1px solid ${isHovered ? "#22c55e" : "#2a2a2a"}`,
                transform: isHovered
                  ? "translateY(-6px) scale(1.06)"
                  : "translateY(0) scale(1)",
                boxShadow: isHovered
                  ? "0 8px 28px rgba(34,197,94,0.15), 0 0 0 1px rgba(34,197,94,0.1)"
                  : "none",
                opacity: visible ? 1 : 0,
                transitionDelay: visible ? `${index * 40}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Shimmer line on top */}
              <div
                className="absolute top-0 left-4 right-4 h-px rounded-full transition-all duration-300"
                style={{
                  background: isHovered
                    ? "linear-gradient(90deg, transparent, #22c55e, transparent)"
                    : "transparent",
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 relative transition-all duration-300"
                style={{
                  transform: isHovered
                    ? "scale(1.2) rotate(-6deg)"
                    : "scale(1) rotate(0deg)",
                }}
              >
                <Image
                  src={skill.iconSrc}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <span
                className="text-xs text-center leading-tight transition-colors duration-300 font-medium"
                style={{ color: isHovered ? "#22c55e" : "#6b7280" }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
