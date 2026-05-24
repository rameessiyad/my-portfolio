"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdSchool } from "react-icons/md";
import { Education as EducationData } from "../data/education";

const Education = () => {
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
          left: "-120px",
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
          right: "-80px",
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
          Academic Background
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Education
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          The academic foundation behind my technical skills and professional
          growth.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-2xl flex flex-col">
        {/* Static bg line */}
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

        {EducationData.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex items-start gap-6 pb-10 last:pb-0 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${index * 150 + 300}ms`,
            }}
          >
            {/* Icon dot */}
            <div
              className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full shrink-0"
              style={{
                backgroundColor: "#1e1e1e",
                border: "2px solid #22c55e",
              }}
            >
              <MdSchool size={18} className="text-green-500" />
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
              {/* Period badge */}
              <span className="text-xs text-green-500 font-medium tracking-wide">
                {edu.period}
              </span>

              {/* Course */}
              <h3 className="text-white font-semibold text-base mt-1 leading-snug">
                {edu.course}
              </h3>

              {/* Institution */}
              <p className="text-gray-300 text-sm mt-1">{edu.institution}</p>

              {/* Location */}
              <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
