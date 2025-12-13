"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6 text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold tracking-tight"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        I’m Quaid Tahir — a full-stack software engineer with a sharp focus on
        building fast, scalable, and modern web applications using technologies
        like <strong>Next.js</strong>, <strong>React</strong>,{" "}
        <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        I specialize in crafting responsive interfaces and engineering efficient
        backend architectures, often using tools like <strong>Node.js</strong>,{" "}
        <strong>Prisma</strong>, and <strong>PostgreSQL</strong>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg text-gray-400 leading-relaxed"
      >
        I’m deeply committed to continuous learning, clean architecture, and
        creating real-world impact through well-engineered software.
      </motion.p>
    </section>
  );
}
