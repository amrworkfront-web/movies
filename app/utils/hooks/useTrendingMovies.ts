import { getTrendingMovies } from '../services/movie';
import { useQuery } from '@tanstack/react-query';

export default function useTrendingMovies() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  });
}
