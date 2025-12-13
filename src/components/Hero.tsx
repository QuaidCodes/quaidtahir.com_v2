"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reemKufiInk } from "@/fonts/fonts";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="w-full h-screen flex items-center justify-center px-6 md:px-12 text-white ">
        <div className="lg:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-300 mb-2"
          >
            Hello World, I’m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            Quaid Tahir
          </motion.h1>

          <motion.span
            className={`${reemKufiInk.className} text-[#990000] text-4xl md:text-6xl block mt-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            قائد طاہر
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-base md:text-lg text-neutral-400 max-w-xl italic"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-base md:text-lg text-neutral-400 max-w-xl"
          >
            To solve problems that matter. To build things that last. To shape a
            future worth scaling.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="px-3 py-1 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all lg:px-6 lg:py-2 text-nowrap"
            >
              View Portfolio
            </Link>
            <Link
              href="/works"
              className="px-3 py-1 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all lg:px-6 lg:py-2 text-nowrap"
            >
              View Works
            </Link>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
