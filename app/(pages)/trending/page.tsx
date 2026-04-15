'use client';

import MovieCard from "../../_components/MovieCard";
import MovieCardSkeleton from "../../_components/MovieCardSkeleton";
import  useTrendingMovies  from "../../utils/hooks/useTrendingMovies";
export default function Trending() {
    const { data, isLoading, error } = useTrendingMovies();
    if (isLoading)
        return (<div className="w-full px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
                <MovieCardSkeleton key={i} />
            ))}
        </div>)
    if (error) return <p className="text-center py-10">Error loading movies.</p>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 px-4 md:px-8">Trending Movies</h1>
            <div className="w-full px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data?.results.map((movie) => ( 
                    <div key={movie.id}>
<MovieCard  movie={movie} ></MovieCard>
                    </div>
                ))}
            </div>
        </div>
    )
}
