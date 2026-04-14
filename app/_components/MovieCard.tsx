import Image from 'next/image'
import type { MovieCard } from '../types/movie'
import Link from 'next/link'

export default function MovieCard({ movie }: { movie: MovieCard }) {
  return (
    <div>

      <Link
        href={`home/movieDetails/${movie.id}`}>

        <div className="group relative cursor-pointer">

          {/* Image */}
<div className="relative w-full h-[260px] overflow-hidden rounded-xl">
  <Image
    src={
      movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/no-image.png"
    }
    alt={movie.title}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3 rounded-xl">
            <h3 className="text-sm font-semibold line-clamp-2 text-white">
              {movie.title}
            </h3>

            <p className="text-xs text-gray-300 mt-1">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>
          </div>

        </div>
      </Link>
    </div>
  )
}
