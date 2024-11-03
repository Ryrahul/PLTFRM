import React from "react";
import { navLinks, socialLinks } from "../data/data";

const Navbar: React.FC = () => {
  return (
    <header className="border-b-4 border-blue-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-black text-3xl">
            PLTFRM<span className="text-blue-600">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, url }) => (
              <a key={label} href={url} className="text-sm font-medium">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ platform, url, svgPath }) => (
              <a
                key={platform}
                href={url}
                className="text-blue-600 hover:text-blue-700"
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
