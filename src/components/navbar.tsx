import React from "react";
import { navLinks, socialLinks } from "../data/data";

const Navbar: React.FC = () => {
  return (
    <header className="border-b-4 border-[#0D3B66]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-black text-3xl text-[#0D3B66]">
            PLTFRM<span className="text-[#F4D35E]">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="text-sm font-medium text-[#0D3B66] hover:text-[#F4D35E] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ platform, url, svgPath }) => (
              <a
                key={platform}
                href={url}
                className="text-[#0D3B66] hover:text-[#F4D35E] transition-colors duration-200"
                aria-label={platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
