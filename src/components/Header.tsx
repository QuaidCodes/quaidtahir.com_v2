"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/works", label: "Works" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-white font-extrabold md:text-5xl text-3xl tracking-wider"
        >
          QuaidTahir
        </Link>

        <div className="hidden md:flex gap-8 relative">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`relative font-semibold uppercase tracking-wide transition-colors px-3 py-2 rounded-md ${
                  isActive
                    ? "text-white bg-gradient-to-r"
                    : "text-white/70 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key={href}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-0 bottom-0 h-0.5 w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 origin-left"
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative group"
        >
          <span
            className={`block w-7 h-0.5 bg-white rounded-sm transition-transform origin-center ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-sm my-1 transition-opacity ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white rounded-sm transition-transform origin-center ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800 md:hidden"
            >
              <ul className="flex flex-col py-4">
                {navItems.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <li
                      key={href}
                      className="border-b border-gray-700 last:border-none"
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-colors ${
                          isActive
                            ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                            : "text-white/80 hover:text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
