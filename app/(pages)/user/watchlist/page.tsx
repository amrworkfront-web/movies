"use client";

import { useWatchlist } from "@/app/utils/hooks/useWatchlist";
import Image from "next/image";
import Link from "next/link";

export default function WatchlistPage() {
  const { list } = useWatchlist();

  if (list.length === 0)
    return <p className="text-center py-20">No movies yet 😢</p>;

  return (

    <>
      <div className="px-4 md:px-8 pt-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Trending Movies
        </h1>
        <p className="text-secondarytx mt-1">
          Discover what’s popular right now
        </p>
      </div>
      <div className=" md:px-12 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">

        {list.map((movie) => (
          <div key={movie.id}>
            <Link href={`/home/movieDetails/${movie.id}`} >
              <div className="relative w-full h-[250px]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="text-sm mt-2">{movie.title}</p></Link>
          </div>
        ))}
      </div>   
         </>

  );
}