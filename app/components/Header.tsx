"use client";

export default function Header() {
  return (
    <nav>
      <ul className="flex w-full flex-auto justify-evenly">
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
      </ul>
    </nav>
  );
}
