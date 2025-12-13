"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      <Link href="https://linkedin.com/in/quaidtahir" target="_blank" aria-label="LinkedIn">
        <div className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer transition-colors duration-300 hover:bg-[#0077b5]">
          <FaLinkedin
            size={28}
            className="text-[#0077b5] group-hover:text-white transition-colors duration-300"
          />
        </div>
      </Link>

      <Link href="https://github.com/QuaidCodes" target="_blank" aria-label="GitHub">
        <div className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer transition-colors duration-300 hover:bg-black">
          <FaGithub
            size={28}
            className="text-black group-hover:text-white transition-colors duration-300"
          />
        </div>
      </Link>
    </div>
  );
}
