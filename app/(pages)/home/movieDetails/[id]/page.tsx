"use client";

import { useParams } from "next/navigation";
import { useMovie } from "@/app/utils/hooks/useMovie";
import { useMovieVideos } from "@/app/utils/hooks/useMovieVideos";
import { useMovieCredits } from "@/app/utils/hooks/useMovieCredits";
import MovieDetailsSkeleton from "@/app/_components/MovieDetailsSkeleton";
import Image from "next/image";
import { CastMember } from "@/app/types/movie";
import { useWatchlist } from "@/app/utils/hooks/useWatchlist";

export default function MovieDetails() {
  const params = useParams();
  const id = Number(params.id);

  const { data, isLoading, error } = useMovie(id);
  const { data: videos } = useMovieVideos(id);
  const { data: credits } = useMovieCredits(id);
const { add, remove, isInWatchlist } = useWatchlist();


  const isSaved = isInWatchlist(data?.id);
  if (isLoading) return <MovieDetailsSkeleton />;

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
      <div className="relative h-[75vh] w-full overflow-hidden">

        {/* Background */}
        <Image
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-2xl space-y-4">

          <h1 className="text-4xl md:text-6xl font-bold">
            {data.title}
          </h1>

          {data.tagline && (
            <p className="text-gray-300 italic">
              {data.tagline}
            </p>
          )}

          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span>⭐ {data.vote_average.toFixed(1)}</span>
            <span>📅 {data.release_date}</span>
            <span>⏱ {data.runtime} min</span>
          </div>

          {trailer && (
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-medium transition"
            >
              ▶ Watch Trailer
            </a>
          )}
        </div>
      </div>

      {/* 🎬 MAIN */}
      <div className="px-6 md:px-12 py-10 grid md:grid-cols-[280px_1fr] gap-10">

        {/* Poster */}
        <div className="relative w-full h-[420px]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            fill
            className="rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="space-y-6">

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-white/10 px-3 py-1 rounded-full text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          {/* Extra */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <p>Language: {data.original_language.toUpperCase()}</p>
            <p>Votes: {data.vote_count}</p>
          </div>

        </div>
        <button
  onClick={() =>
    isSaved
      ? remove(data.id)
      : add({
          id: data.id,
          title: data.title,
          poster_path: data.poster_path,
        })
  }
  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
>
  {isSaved ? "💔 Remove" : "❤️ Add to Watchlist"}
</button>
      </div>

      {/* 🎭 CAST */}

        <div className="px-6 md:px-12 pb-10">
          <h2 className="text-2xl font-bold mb-6">Top Cast</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
            {credits?.cast.slice(0, 12).map((actor: CastMember) => (
              <div key={actor.id} className=" shrink-0 flex flex-col items-center group col-span-1 ">

                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/10">
                  <Image
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                        : "/no-image.png"
                    }
                    alt={actor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                </div>

                <p className="text-xs mt-3 font-medium line-clamp-1">
                  {actor.name}
                </p>

                <p className="text-[11px] text-gray-400 line-clamp-1">
                  {actor.character}
                </p>

              </div>
            ))}
          </div>
        </div>

      {/* 🎬 TRAILER */}
      {trailer && (
        <div className="px-6 md:px-12 pb-16">
          <h2 className="text-2xl font-bold mb-6">Trailer</h2>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
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