"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎬 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* 🔥 Floating blur effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-3xl px-6 space-y-6">

        {/* Badge */}
        <span className="px-4 py-1 rounded-full bg-white/10 text-sm text-gray-300">
          🎬 Powered by TMDB API
        </span>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Unlimited <span className="text-red-500">Movies</span><br />
          One Place 🍿
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl">
          Explore trending, popular and upcoming movies instantly.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 pt-4">

          <Link
            href="/trending"
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
          >
            🔥 Start Watching
          </Link>

          <Link
            href="/movies"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            Browse Library
          </Link>

        </div>

      </div>
    </div>
  );
}