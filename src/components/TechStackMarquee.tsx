"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Define some fonts and color gradients for variety
const fonts = [
  "font-sans",
  "font-mono",
  "font-serif",
  "font-extrabold",
  "italic",
  "uppercase",
];

const colors = [
  "bg-gradient-to-r from-purple-400 to-pink-500",
  "bg-gradient-to-r from-blue-400 to-cyan-500",
  "bg-gradient-to-r from-green-400 to-lime-500",
  "bg-gradient-to-r from-yellow-400 to-orange-500",
  "bg-gradient-to-r from-red-400 to-pink-600",
  "bg-gradient-to-r from-indigo-500 to-violet-600",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Figma",
  "C++",
  "Python",
  "HTML/CSS",
  "Node.js",
  "Java",
];

export default function TechStackMarquee() {
  const repeated = useMemo(() => [...techStack, ...techStack], []);

  return (
    <div className="relative overflow-hidden border-y border-neutral-800 bg-neutral-950 py-2 md:py-6">
      <motion.div
        className="flex gap-10 md:gap-20 px-4 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {repeated.map((tech, i) => {
          const font = fonts[i % fonts.length];
          const gradient = colors[i % colors.length];
          return (
            <span
              key={`${tech}-${i}`}
              className={`md:text-lg tracking-wide text-transparent bg-clip-text ${gradient} ${font} transition-transform hover:scale-105 duration-300`}
            >
              {tech}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
