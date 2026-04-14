"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchMovies } from "../utils/hooks/useSearchMovies";
import { MovieCard } from "../types/movie";

export default function SearchBox() {
    const [query, setQuery] = useState("");
    const [debounced, setDebounced] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const { data, isLoading } = useSearchMovies(debounced);

    return (
        <div className="relative w-64">

            {/* 🔍 Input */}
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/10 text-white px-3 py-2 rounded-md outline-none"
            />

            {/* 📦 Results */}
            {query && (
                <div className="absolute top-full mt-2 w-full bg-black border border-white/10 rounded-lg max-h-80 overflow-y-auto z-50">

                    {isLoading && <p className="p-3 text-sm">Searching...</p>}

                    {data?.map((movie: MovieCard) => (
                        <Link
                            key={movie.id}
                            href={`/movie/${movie.id}`}
                            className="flex items-center gap-3 p-2 hover:bg-white/10 transition"
                        >
                            <div className="relative w-10 h-14">
                                <Image
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                            : "/no-image.png"
                                    }
                                    alt={movie.title}
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>

                            <span className="text-sm">{movie.title}</span>
                        </Link>
                    ))}

                </div>
            )}
        </div>
    );
}