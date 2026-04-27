"use client";

import { useState } from "react";
import MovieCard from "../../../_components/MovieCard";
import MovieCardSkeleton from "../../../_components/MovieCardSkeleton";
import useTrendingMovies from "../../../utils/hooks/useTrendingMovies";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Trending() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useTrendingMovies(page);

  // 🎯 helper for pages
  const getPages = () => {
    return [page - 1, page, page + 1].filter((p) => p > 0);
  };

  // 🎯 Loading
  if (isLoading)
    return (
      <div className="w-full px-4 md:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    );

  // 🎯 Error
  if (error)
    return (
      <p className="text-center py-20 text-red-400">
        Error loading movies.
      </p>
    );

  return (
    <div className="bg-primarybg text-primarytx min-h-screen">
      
      {/* 🎬 Header */}
      <div className="px-4 md:px-8 pt-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Trending Movies
        </h1>
        <p className="text-secondarytx mt-1">
          Discover what’s popular right now
        </p>
      </div>

      {/* 🎬 Movies Grid */}
      <div className="w-full px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* 🎬 Pagination */}
      <div className="flex justify-center py-10">
        <Pagination>
          <PaginationContent>

            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  setPage((prev) => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`cursor-pointer ${
                  page === 1 && "opacity-50 pointer-events-none"
                }`}
              />
            </PaginationItem>

            {/* Pages */}
            {getPages().map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  isActive={p === page}
                  onClick={() => {
                    setPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="cursor-pointer"
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  setPage((prev) => Math.min(prev + 1, 500)); // TMDB limit
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="cursor-pointer"
              />
            </PaginationItem>

          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}