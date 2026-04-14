"use client";

import Link from "next/link";
import { useHeroMovie } from "../utils/hooks/useHeroMovie";

export default function Hero() {
    const { data, isLoading ,error} = useHeroMovie();

    if (isLoading) {
        return (
            <div className="h-[80vh] bg-gray-900 animate-pulse" />
        );
    }

    if (error) {
        return <div className="text-red-500">Error loading hero movie</div>;
    }

    const movie = data?.results?.[0]; // 🔥 أول فيلم

    if (!movie) return null;

    return (
        <div
            className="relative h-[85vh] w-full bg-cover bg-center flex items-end"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
        >
            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 pb-20 max-w-2xl">

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                    {movie.title}
                </h1>

                {/* Overview */}
                <p className="text-gray-300 mt-4 line-clamp-3">
                    {movie.overview}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                        ▶ Watch Now
                    </button>
                    <Link href={`home/movieDetails/${movie.id}`} className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
                            More Info
                    </Link>
                </div>

                {/* Rating */}
                <p className="mt-4 text-sm text-gray-400">
                    ⭐ {movie.vote_average.toFixed(1)} Rating
                </p>

            </div>
        </div>
    );
}