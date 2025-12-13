"use client";

import Link from "next/link";
import DropdownMenu from "./Dropdown";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* <div className="text-2xl font-bold tracking-wide">Quaid Tahir</div> */}
        <DropdownMenu />

        <div className="flex gap-6 text-sm font-medium">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/70 hover:text-white transition"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/quaidcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-white/70 transition"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.12 0 0 1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.91.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A12 12 0 0012 0z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/quaidtahir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-white/70 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.45 20.45H17.4v-5.4c0-1.29-.47-2.17-1.65-2.17-.9 0-1.43.61-1.67 1.2-.09.22-.11.53-.11.84v5.53h-3.05s.04-8.97 0-9.91h3.05v1.4c.4-.62 1.1-1.5 2.68-1.5 1.96 0 3.43 1.28 3.43 4.02v6.99zM5.34 7.43a1.78 1.78 0 110-3.56 1.78 1.78 0 010 3.56zM6.92 20.45H3.75v-9.91h3.17v9.91zM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.78 24 1.78 24h20.45c.97 0 1.77-.78 1.77-1.75V1.75C24 .78 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Quaid Tahir. All rights reserved.
      </div>
    </footer>
  );
}
