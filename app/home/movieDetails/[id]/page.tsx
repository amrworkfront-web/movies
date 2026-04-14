"use client";

import { useParams } from "next/navigation";
import { useMovie } from "@/app/utils/hooks/useMovie";
import { useMovieVideos } from "@/app/utils/hooks/useMovieVideos";
import MovieDetailsSkeleton from "@/app/_components/MovieDetailsSkeleton";

export default function MovieDetails() {
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading, error } = useMovie(id);
  const { data: videos } = useMovieVideos(id);

  if (isLoading)
    return  <MovieDetailsSkeleton />;

  if (error)
    return (
      <p className="text-center py-20 text-red-400">
        Error loading movie details.
      </p>
    );

  if (!data) return null;

  const trailer = videos?.find(
    (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  return (
    <div className="bg-primarybg text-primarytx min-h-screen">
      
      {/* 🎬 HERO */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        
        {/* Background */}
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primarybg via-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl space-y-4">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {data.title}
          </h1>

          {data.tagline && (
            <p className="text-secondarytx italic">
              {data.tagline}
            </p>
          )}

          <div className="flex gap-4 text-sm text-mutedtx">
            <span>⭐ {data.vote_average.toFixed(1)}</span>
            <span>📅 {data.release_date}</span>
            <span>⏱ {data.runtime} min</span>
          </div>

          {/* CTA */}
          {trailer && (
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              className="inline-block bg-primary-container text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              ▶ Watch Trailer
            </a>
          )}
        </div>
      </div>

      {/* 🎬 MAIN CONTENT */}
      <div className="px-6 md:px-12 py-10 grid md:grid-cols-[300px_1fr] gap-10">
        
        {/* Poster */}
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          
          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {data.genres.map((genre: { id: number; name: string }) => (
              <span
                key={genre.id}
                className="bg-secondarybg text-secondarytx px-3 py-1 rounded-full text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <p className="text-secondarytx leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          {/* Extra */}
          <div className="grid grid-cols-2 gap-4 text-sm text-mutedtx">
            <p>Language: {data.original_language.toUpperCase()}</p>
            <p>Votes: {data.vote_count}</p>
          </div>
        </div>
      </div>

      {/* 🎬 TRAILER EMBED */}
      {trailer && (
        <div className="px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-bold mb-4">Trailer</h2>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}