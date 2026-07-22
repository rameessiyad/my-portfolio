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
      {/* Show more link */}
      <div
        className="mt-10 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: `${ProjectsData.length * 120 + 400}ms`,
        }}
      >
        <a
          href="https://github.com/rameessiyad"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium transition-all duration-300"
          style={{ color: "#8A8A8A" }}
        >
          <span className="group-hover:text-white transition-colors duration-300">
            View more on GitHub
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "#22c55e" }}
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "#8A8A8A" }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Projects;
