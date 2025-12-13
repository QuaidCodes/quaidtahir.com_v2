'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl font-bold tracking-wide"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Quaid Tahir
      </button>

      {isOpen && (
        <motion.ul
          className="absolute left-0 w-25 mt-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border-0"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          role="menu"
        >
          <Link href="/login">
            <li
              className="px-1 py-1 cursor-pointer text-md text-black text-center rounded-lg hover:bg-gray-200 transition border-0"
              role="menuitem"
            >
              Login
            </li>
          </Link>
        </motion.ul>
      )}
    </div>
  );
};

export default DropdownMenu;
