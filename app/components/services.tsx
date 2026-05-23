"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaVideo } from "react-icons/fa";
import ServicesCard from "./services-card";

const services = [
  {
    icon: <FaCode size={44} />,
    title: "Website Development",
    description:
      "Building fast, responsive, and modern websites tailored to your brand using the latest web technologies.",
  },
  {
    icon: <FaLaptopCode size={44} />,
    title: "Web Application",
    description:
      "Developing scalable, full-featured web apps with clean architecture, smooth UX, and robust backends.",
  },
  {
    icon: <FaMobileAlt size={44} />,
    title: "Mobile Application",
    description:
      "Crafting cross-platform mobile apps for iOS and Android that deliver native-like performance and design.",
  },
  {
    icon: <FaVideo size={44} />,
    title: "Video Editing",
    description:
      "Professional video editing for reels, promos, and content — sharp cuts, smooth transitions, great results.",
  },
];

const Services = () => {
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
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
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
            "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          top: "-100px",
          left: "-150px",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          bottom: "-80px",
          right: "-100px",
          filter: "blur(40px)",
        }}
      />

      {/* Decorative corner */}
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
          What I offer
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Services
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          Here are the things I do best. From development to creative work,
          I&apos;ve got you covered with quality and precision.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${index * 100 + 200}ms`,
            }}
          >
            <ServicesCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
