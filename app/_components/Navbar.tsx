"use client";

import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* 🔥 Logo */}
        <Link href="/" className="text-white text-xl font-bold">
          🎬 MovieApp
        </Link>

        {/* 🔗 Links */}
        <div className="hidden md:flex gap-6 text-gray-300 text-sm">
          <Link href="/home" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/movies" className="hover:text-white transition">
            Movies
          </Link>
          <Link href="/trending" className="hover:text-white transition">
            Trending
          </Link>
        </div>

        {/* 🔍 Search */}
        <div className="hidden md:block">
  <SearchBox /> 
        </div>

      </div>
    </nav>
  );
}