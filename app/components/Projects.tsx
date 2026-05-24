"use client";

import React, { useEffect, useRef, useState } from "react";
import { Projects as ProjectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
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
          top: "-80px",
          right: "-120px",
          filter: "blur(50px)",
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
          My Work
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Projects
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          A selection of real-world projects I&apos;ve built — click any card to
          explore more.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {ProjectsData.map((project, index) => (
          <div
            key={project.id}
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${index * 120 + 200}ms`,
            }}
          >
            <ProjectCard
              id={project.id}
              name={project.name}
              thumbnail={project.thumbnail}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
