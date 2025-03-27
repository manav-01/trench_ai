"use client";

import { Star, Bell, Cog } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#171717] border-t border-[#1F1F1F] py-2 px-5 z-50 ">
      <div className="mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-[#4FFFAB] hover:bg-[#1D291D] hover:border hover:border-[#000000] hover:rounded-md px-1.5 py-0.5 transition-all"
          >
            <Star size={18} />
            <span>Watchlist</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-[#4FFFAB] hover:bg-[#1D291D] hover:border hover:border-[#000000] hover:rounded-md px-1.5 py-0.5 transition-all"
          >
            <Cog size={18} />
            <span>Preset 1</span>
          </Link>
          <Link
            href="#"
            className="text-[#4FFFAB] hover:bg-[#1D291D] hover:border hover:border-[#000000] hover:rounded-md px-1.5 py-0.5 transition-all"
          >
            Active Positions
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="text-[#4FFFAB] ">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2 text-[#4FFFAB]">
            <div className="w-7 h-6 relative ">
              {/* India flag - using inline SVG for simplicity */}
              <svg
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-md"
              >
                <rect width="900" height="600" fill="#f8f9fa" />
                <rect width="900" height="200" fill="#FF9933" />
                <rect width="900" height="200" y="400" fill="#138808" />
                <circle cx="450" cy="300" r="60" fill="#000080" />
                <circle cx="450" cy="300" r="55" fill="#fff" />
                <circle cx="450" cy="300" r="11" fill="#000080" />
                <g id="spokes">
                  <line
                    x1="450"
                    y1="245"
                    x2="450"
                    y2="235"
                    stroke="#000080"
                    strokeWidth="2"
                  />
                </g>
                {Array.from({ length: 24 }).map((_, i) => (
                  <use
                    key={i}
                    href="#spokes"
                    transform={`rotate(${i * 15}, 450, 300)`}
                  />
                ))}
              </svg>
            </div>
            <span>En</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
