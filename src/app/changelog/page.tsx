"use client";

import { motion } from "framer-motion";

import { WorkingLog } from "@/data/changelog";

export default function Changelog() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-30">
      <h1 className="text-3xl underline">Changelog</h1>

      <div className="my-2">
        <h2 className="text-1xl pb-1 font-bold">In Progress</h2>
        <div className="flex flex-col gap-5">
          {WorkingLog.map((item) => {
            return (
              <motion.div
                className="bg-zinc-800 w-200 rounded p-2 flex flex-col gap-0.5"
                whileHover={{ scaleX: 1.02 }}
                key={item.key}
              >
                <p className="font-bold">{item.title}</p>
                <p className="italic text-sm">{item.date}</p>
                <p className="italic">{item.changes.description}</p>
                <p className="bg-red-500 w-fit px-2 rounded-full text-sm">In Progress</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="my-2">
        <h2 className="text-1xl pb-1 font-bold">Completed</h2>
        <div className="flex flex-col gap-5">
          {WorkingLog.map((item) => {
            return (
              <motion.div
                className="bg-zinc-800 w-200 rounded p-2 flex flex-col gap-0.5"
                whileHover={{ scaleX: 1.02 }}
                key={item.key}
              >
                <p className="font-bold">{item.title}</p>
                <p className="italic text-sm">{item.date}</p>
                <p className="italic">{item.changes.description}</p>
                <p className="bg-green-400 w-fit px-2 rounded-full text-sm">Completed
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
