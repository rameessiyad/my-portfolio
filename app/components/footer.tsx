"use client";

import React from "react";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const navLinks = ["Home", "Services", "Skills", "Experience", "Contact"];

const Footer = () => {
  return (
    <footer
      className="w-full py-10 px-6"
      style={{ backgroundColor: "#1e1e1e", borderTop: "1px solid #2a2a2a" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Name / Brand */}
        <h2 className="text-white text-xl font-bold tracking-wide">
          Ramees <span className="text-green-500">M Siyad</span>
        </h2>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 text-sm transition-colors duration-300 hover:text-green-500"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex gap-3">
          {[
            {
              icon: <AiOutlineInstagram size={20} />,
              label: "Instagram",
              href: "https://www.instagram.com/rameessiyad/",
            },
            {
              icon: <FaLinkedinIn size={18} />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ramees-m-siyad",
            },

            {
              icon: <AiOutlineGithub size={20} />,
              label: "GitHub",
              href: "https://github.com/rameessiyad",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#121212",
                border: "1.5px solid #2a2a2a",
                color: "#aaaaaa",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#22c55e";
                e.currentTarget.style.color = "#22c55e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.color = "#aaaaaa";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ backgroundColor: "#2a2a2a" }} />

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Ramees M Siyad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
