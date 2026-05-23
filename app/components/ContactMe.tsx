"use client";

import React, { useState } from "react";
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

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // hook up your API here
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-6"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Heading */}
      <h2 className="text-white text-4xl font-bold mb-3 tracking-wide">
        Contact Me
      </h2>
      <p className="text-gray-400 text-sm mb-14 text-center max-w-lg">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — contact info + socials */}
        <div className="flex flex-col gap-5">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #2a2a2a",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#22c55e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#2a2a2a";
              }}
            >
              <div className="text-green-500">{item.icon}</div>
              <div>
                <p className="text-gray-500 text-xs">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="flex gap-3 mt-2">
            {[
              { icon: <AiOutlineInstagram size={20} />, label: "Instagram" },
              { icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
            ].map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="flex items-center justify-center cursor-pointer w-10 h-10 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "#1e1e1e",
                  border: "1.5px solid #2a2a2a",
                  color: "#aaaaaa",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#22c55e";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#22c55e";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "#2a2a2a";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#aaaaaa";
                }}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="flex flex-col gap-4 p-7 rounded-2xl"
          style={{ backgroundColor: "#1e1e1e", border: "1px solid #2a2a2a" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all duration-300"
            style={{
              backgroundColor: "#121212",
              border: "1px solid #2a2a2a",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLInputElement).style.borderColor =
                "#22c55e")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLInputElement).style.borderColor =
                "#2a2a2a")
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all duration-300"
            style={{
              backgroundColor: "#121212",
              border: "1px solid #2a2a2a",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLInputElement).style.borderColor =
                "#22c55e")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLInputElement).style.borderColor =
                "#2a2a2a")
            }
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none resize-none transition-all duration-300"
            style={{
              backgroundColor: "#121212",
              border: "1px solid #2a2a2a",
            }}
            onFocus={(e) =>
              ((e.currentTarget as HTMLTextAreaElement).style.borderColor =
                "#22c55e")
            }
            onBlur={(e) =>
              ((e.currentTarget as HTMLTextAreaElement).style.borderColor =
                "#2a2a2a")
            }
          />
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300"
            style={{ backgroundColor: "#22c55e", color: "#0a0a0a" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#16a34a")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#22c55e")
            }
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
