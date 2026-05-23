"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const socialLinks = [
  { label: "Instagram", icon: <AiOutlineInstagram size={20} />, href: "#" },
  { label: "LinkedIn", icon: <FaLinkedinIn size={18} />, href: "#" },
];

const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  "Frontend Developer",
  "Video Editor",
];

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Decorative corner lines */}
      <span
        className="absolute top-10 left-10 w-16 h-16 pointer-events-none"
        style={{
          borderTop: "1.5px solid #22c55e",
          borderLeft: "1.5px solid #22c55e",
          opacity: 0.35,
          borderRadius: "4px 0 0 0",
        }}
      />
      <span
        className="absolute bottom-10 right-10 w-16 h-16 pointer-events-none"
        style={{
          borderBottom: "1.5px solid #22c55e",
          borderRight: "1.5px solid #22c55e",
          opacity: 0.35,
          borderRadius: "0 0 4px 0",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Badge */}
        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-medium tracking-widest uppercase"
          style={{
            backgroundColor: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: "#22c55e",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </div>

        {/* Greeting */}
        <p
          className="text-sm font-normal mb-2 tracking-widest uppercase"
          style={{ color: "#666666" }}
        >
          Hi, I am
        </p>

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
          Ramees M Siyad
        </h2>

        {/* Typewriter Title */}
        <div className="mb-10 h-16 flex items-center justify-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ color: "#22c55e" }}
          >
            {displayed}
            <span
              className="inline-block w-0.5 h-12 ml-1 align-middle animate-pulse"
              style={{ backgroundColor: "#22c55e" }}
            />
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
              style={{
                backgroundColor: "transparent",
                border: "1.5px solid #2a2a2a",
                color: "#666666",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#22c55e";
                el.style.color = "#22c55e";
                el.style.backgroundColor = "rgba(34,197,94,0.08)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#2a2a2a";
                el.style.color = "#666666";
                el.style.backgroundColor = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="relative px-8 py-3 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 group"
            style={{
              backgroundColor: "#22c55e",
              color: "#0a0a0a",
              boxShadow: "0 0 0 rgba(34,197,94,0)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#16a34a";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 25px rgba(34,197,94,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "#22c55e";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 0 0 rgba(34,197,94,0)";
            }}
          >
            Hire Me
          </button>

          <button
            className="px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1.5px solid #2a2a2a",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "#22c55e";
              el.style.color = "#22c55e";
              el.style.transform = "translateY(-2px)";
              el.style.backgroundColor = "rgba(34,197,94,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "#2a2a2a";
              el.style.color = "#ffffff";
              el.style.transform = "translateY(0)";
              el.style.backgroundColor = "transparent";
            }}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-700"
        style={{ opacity: visible ? 0.4 : 0 }}
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <HiArrowDown size={14} className="text-gray-600 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
