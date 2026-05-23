"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
  {
    icon: <MdEmail size={22} />,
    label: "Email",
    value: "rameessiyad26@gmail.com",
  },
  {
    icon: <MdPhone size={22} />,
    label: "Phone",
    value: "+91 7025014236",
  },
  {
    icon: <MdLocationOn size={22} />,
    label: "Location",
    value: "Kerala, India",
  },
];

const socials = [
  { icon: <AiOutlineInstagram size={20} />, label: "Instagram" },
  { icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
];

const ContactMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

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
          bottom: "-100px",
          left: "-100px",
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
          top: "-60px",
          right: "-80px",
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
          Get In Touch
        </span>
        <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
          Contact Me
        </h2>
        <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — info + socials */}
        <div
          className="flex flex-col gap-4 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transitionDelay: "200ms",
          }}
        >
          {contactInfo.map((item) => {
            const isH = hoveredInfo === item.label;
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: isH ? "rgba(34,197,94,0.06)" : "#1e1e1e",
                  border: `1px solid ${isH ? "#22c55e" : "#2a2a2a"}`,
                  transform: isH ? "translateX(6px)" : "translateX(0)",
                  boxShadow: isH ? "0 4px 20px rgba(34,197,94,0.08)" : "none",
                }}
                onMouseEnter={() => setHoveredInfo(item.label)}
                onMouseLeave={() => setHoveredInfo(null)}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: isH
                      ? "rgba(34,197,94,0.15)"
                      : "rgba(34,197,94,0.08)",
                    color: "#22c55e",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </div>
            );
          })}

          {/* Socials */}
          <div className="flex gap-3 mt-1">
            {socials.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "#1e1e1e",
                  border: "1.5px solid #2a2a2a",
                  color: "#aaaaaa",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "#22c55e";
                  el.style.color = "#22c55e";
                  el.style.backgroundColor = "rgba(34,197,94,0.08)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "#2a2a2a";
                  el.style.color = "#aaaaaa";
                  el.style.backgroundColor = "#1e1e1e";
                  el.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="flex flex-col gap-4 p-7 rounded-2xl transition-all duration-700"
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid #2a2a2a",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transitionDelay: "300ms",
          }}
        >
          {/* Shimmer top line */}
          <div
            className="h-px w-full rounded-full mb-1"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)",
            }}
          />

          {(["name", "email"] as const).map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "name" ? "Your Name" : "Your Email"}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all duration-300"
              style={{
                backgroundColor: "#121212",
                border: "1px solid #2a2a2a",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor =
                  "#22c55e";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor =
                  "#2a2a2a";
              }}
            />
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none resize-none transition-all duration-300"
            style={{ backgroundColor: "#121212", border: "1px solid #2a2a2a" }}
            onFocus={(e) => {
              (e.currentTarget as HTMLTextAreaElement).style.borderColor =
                "#22c55e";
            }}
            onBlur={(e) => {
              (e.currentTarget as HTMLTextAreaElement).style.borderColor =
                "#2a2a2a";
            }}
          />

          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: sent ? "#16a34a" : "#22c55e",
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
              el.style.backgroundColor = sent ? "#16a34a" : "#22c55e";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
