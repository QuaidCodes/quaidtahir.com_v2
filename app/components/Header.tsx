"use client";

import {motion} from "motion/react";

export default function Header() {
  return (
    <nav className="m-2 flex justify-between ">
      <h1 className="text-nowrap text-4xl">Quaid Tahir</h1>
      <ul className="flex w-full flex-auto justify-end gap-4 text-2xl">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/portfolio">Portfolio</a>
        </li>

        <li>
          <a href="/project">Projects</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
        
        <li>
          <a href="/login">Sign in</a>
        </li>
      </ul>
    </nav>
  );
}
