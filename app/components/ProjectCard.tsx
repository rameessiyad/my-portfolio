"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

const ProjectCard = ({
  id,
  name,
  thumbnail,
  description,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/project/${id}`}>
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group"
        style={{
          backgroundColor: "#1e1e1e",
          border: `1px solid ${hovered ? "#22c55e" : "#2a2a2a"}`,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 16px 40px rgba(34,197,94,0.12)" : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          />
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 transition-all duration-300 flex items-center justify-center"
            style={{
              backgroundColor: hovered ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
            }}
          >
            {hovered && (
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#22c55e", color: "#0a0a0a" }}
              >
                View Project <FiArrowUpRight size={14} />
              </div>
            )}
          </div>
        </div>

        {/* Shimmer top border */}
        <div
          className="h-px w-full transition-all duration-300"
          style={{
            background: hovered
              ? "linear-gradient(90deg, transparent, #22c55e, transparent)"
              : "transparent",
          }}
        />

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3
              className="font-semibold text-base transition-colors duration-300"
              style={{ color: hovered ? "#22c55e" : "#ffffff" }}
            >
              {name}
            </h3>
            <FiArrowUpRight
              size={18}
              className="transition-all duration-300"
              style={{
                color: hovered ? "#22c55e" : "#3f3f3f",
                transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
              }}
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
