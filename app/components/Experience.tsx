"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdWork } from "react-icons/md";

const experiences = [
  {
    period: "June 2024 – May 2025",
    company: "Cords Innovations Pvt Ltd",
    role: "Full Stack Developer",
  },
  {
    period: "May 2025 – January 2026",
    company: "Dataspot Technologies",
    role: "Full Stack Developer",
  },
  {
    period: "February 2026 – Present",
    company: "Axel Technologies",
    role: "Associate Software Engineer",
    current: true,
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
          top: "-80px",
          right: "-120px",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)",
          bottom: "-60px",
          left: "-80px",
          filter: "blur(40px)",
        }}
      />

      {/* Corner brackets */}
      <span
        className="absolute top-10 left-10 w-16 h-16 pointer-events-none"
        style={{
          borderTop: "1.5px solid #22c55e",
          borderLeft: "1.5px solid #22c55e",
          opacity: 0.25,
          borderRadius: "4px 0 0 0",
        }}
      />
      <span
        className="absolute bottom-10 right-10 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: "1.5px solid #22c55e",
          borderRight: "1.5px solid #22c55e",
          opacity: 0.25,
          borderRadius: "0 0 4px 0",
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
          My Journey
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Experience
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          My professional journey so far — building products and growing as a
          developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-2xl flex flex-col">
        {/* Vertical line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px"
          style={{ backgroundColor: "#2a2a2a" }}
        />
        {/* Animated fill line */}
        <div
          className="absolute left-5 top-0 w-px transition-all duration-1000"
          style={{
            backgroundColor: "#22c55e",
            height: visible ? "100%" : "0%",
            transitionDelay: "300ms",
            boxShadow: "0 0 8px rgba(34,197,94,0.5)",
          }}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-start gap-6 pb-10 last:pb-0 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${index * 150 + 300}ms`,
            }}
          >
            {/* Dot */}
            <div
              className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-all duration-300"
              style={{
                backgroundColor: "#1e1e1e",
                border: "2px solid #22c55e",
                boxShadow: exp.current
                  ? "0 0 14px rgba(34,197,94,0.45)"
                  : "none",
              }}
            >
              <MdWork size={18} className="text-green-500" />
            </div>

            {/* Card */}
            <div
              className="flex-1 p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #2a2a2a",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#22c55e";
                el.style.transform = "translateX(6px)";
                el.style.boxShadow = "0 0 20px rgba(34,197,94,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#2a2a2a";
                el.style.transform = "translateX(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="text-xs text-green-500 font-medium tracking-wide">
                  {exp.period}
                </span>
                {exp.current && (
                  <span
                    className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(34,197,94,0.1)",
                      color: "#22c55e",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg">
                {exp.company}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
