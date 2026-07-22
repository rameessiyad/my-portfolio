"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Projects } from "@/app/data/projects";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

interface Props {
  params: Promise<{ id: string }>;
}

const ProjectPage = ({ params }: Props) => {
  const { id } = use(params);
  const project = Projects.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!project) return notFound();

  const isMobile = project.type === "mobile-app";

  const prev = () =>
    setActiveImg((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const next = () =>
    setActiveImg((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <main
      className="relative min-h-screen py-16 px-6 overflow-hidden"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 mb-10 transition-all duration-300 group hover:text-green-500"
        >
          <FiArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Portfolio
        </Link>

        {/* Project name + link */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full inline-block"
                style={{
                  color: "#22c55e",
                  backgroundColor: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                Project
              </span>
              {isMobile && (
                <span
                  className="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
                  style={{
                    color: "#8A8A8A",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid #2A2A2A",
                  }}
                >
                  📱 Mobile App
                </span>
              )}
            </div>
            <h1 className="text-white text-4xl font-bold mt-3">
              {project.name}
            </h1>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ backgroundColor: "#22c55e", color: "#0a0a0a" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#16a34a";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 25px rgba(34,197,94,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#22c55e";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {isMobile ? "View on GitHub" : "Visit Site"}{" "}
              <FiArrowUpRight size={16} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl">
          {project.description}
        </p>

        {/* ── MOBILE APP LAYOUT ── */}
        {isMobile ? (
          <>
            {/* Phone viewer — portrait centered */}
            <div
              className="flex items-center justify-center w-full rounded-2xl mb-6 py-10 relative"
              style={{
                backgroundColor: "#0D0D0D",
                border: "1px solid #2a2a2a",
                minHeight: "520px",
              }}
            >
              {/* Prev */}
              {project.images.length > 1 && (
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 z-10"
                  style={{
                    backgroundColor: "rgba(18,18,18,0.85)",
                    border: "1px solid #2a2a2a",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#22c55e";
                    (e.currentTarget as HTMLButtonElement).style.color = "#22c55e";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                  }}
                >
                  <FiChevronLeft size={18} />
                </button>
              )}

              {/* Phone frame */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "260px",
                  height: "530px",
                  border: "2px solid #2A2A2A",
                  boxShadow: "0 0 40px rgba(34,197,94,0.08), 0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={project.images[activeImg]}
                  alt={`${project.name} screenshot ${activeImg + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                />
              </div>

              {/* Next */}
              {project.images.length > 1 && (
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 z-10"
                  style={{
                    backgroundColor: "rgba(18,18,18,0.85)",
                    border: "1px solid #2a2a2a",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#22c55e";
                    (e.currentTarget as HTMLButtonElement).style.color = "#22c55e";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                  }}
                >
                  <FiChevronRight size={18} />
                </button>
              )}

              {/* Counter */}
              <div
                className="absolute bottom-4 right-4 text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(18,18,18,0.8)",
                  color: "#aaaaaa",
                  border: "1px solid #2a2a2a",
                }}
              >
                {activeImg + 1} / {project.images.length}
              </div>
            </div>

            {/* Portrait thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="relative shrink-0 rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    width: "52px",
                    height: "88px",
                    border: `2px solid ${i === activeImg ? "#22c55e" : "#2a2a2a"}`,
                    boxShadow: i === activeImg ? "0 0 12px rgba(34,197,94,0.3)" : "none",
                    opacity: i === activeImg ? 1 : 0.5,
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ── DESKTOP/WEB LAYOUT ── original landscape */}
            <div
              className="relative w-full rounded-2xl overflow-hidden mb-4"
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #2a2a2a",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src={project.images[activeImg]}
                alt={`${project.name} screenshot ${activeImg + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(18,18,18,0.75)",
                      border: "1px solid #2a2a2a",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#22c55e";
                      (e.currentTarget as HTMLButtonElement).style.color = "#22c55e";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
                      (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                    }}
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(18,18,18,0.75)",
                      border: "1px solid #2a2a2a",
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#22c55e";
                      (e.currentTarget as HTMLButtonElement).style.color = "#22c55e";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
                      (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                    }}
                  >
                    <FiChevronRight size={18} />
                  </button>
                </>
              )}

              <div
                className="absolute bottom-3 right-3 text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(18,18,18,0.8)",
                  color: "#aaaaaa",
                  border: "1px solid #2a2a2a",
                }}
              >
                {activeImg + 1} / {project.images.length}
              </div>
            </div>

            {/* Landscape thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="relative shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    border: `2px solid ${i === activeImg ? "#22c55e" : "#2a2a2a"}`,
                    boxShadow: i === activeImg ? "0 0 12px rgba(34,197,94,0.3)" : "none",
                    opacity: i === activeImg ? 1 : 0.55,
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;