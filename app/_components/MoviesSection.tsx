"use client";

import React from "react";
import { Movie } from "../types/movie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMoviesGenre from "../utils/hooks/useMoviesGenre";
import Link from "next/link";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCard from "./MovieCard";

export default function MoviesSection({ Title, genreId }: { Title: string, genreId: number }) {
  const { data, isLoading, error } = useMoviesGenre(genreId);

  if (isLoading)
    return (
      <div className="w-full px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    ); if (error) return <p className="text-center py-10">Error loading movies.</p>;

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        {Title} Movies
      </h2>

      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {data?.results.map((movie: Movie) => (

            <CarouselItem key={movie.id}
              className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
<MovieCard
              movie={movie}
              
            />

            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}