import { getTrendingMovies } from '../services/movie';
import { useQuery } from '@tanstack/react-query';

export default function useTrendingMovies(page: number ) {
  return useQuery({
    queryKey: ["trending-movies", page],
    queryFn: () => getTrendingMovies(page),
  });
}
