"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // API call -- set up backend?
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
      >
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Username
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              // placeholder="Username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              // placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black hover:bg-gray-600 text-white font-medium py-2 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
