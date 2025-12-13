"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Let’s build something exceptional.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Whether you have an idea to explore, a project to kickstart, or just want to connect — I’m always open to meaningful conversations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block mt-4 px-8 py-3 rounded-md bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition"
          >
            Get In Touch →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
