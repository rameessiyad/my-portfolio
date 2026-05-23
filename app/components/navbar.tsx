"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full px-6 py-4"
      style={{
        backgroundColor: "#1e1e1e",
        borderBottom: "1px solid #2a2a2a",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-lg font-bold tracking-wide"
          style={{ color: "#ffffff" }}
        >
          Ramees <span className="text-green-500">M Siyad</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-green-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
          style={{ backgroundColor: "#22c55e", color: "#0a0a0a" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#16a34a")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#22c55e")
          }
        >
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-400 hover:text-green-500 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden mt-4 mx-0 rounded-2xl p-5 flex flex-col gap-4"
          style={{ backgroundColor: "#121212", border: "1px solid #2a2a2a" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center py-2 rounded-xl text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: "#22c55e", color: "#0a0a0a" }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
