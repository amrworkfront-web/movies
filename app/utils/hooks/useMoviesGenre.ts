import { getMoviesbyGenre } from '../services/movie';
import { useQuery } from '@tanstack/react-query';

export default function useMoviesGenre(genreId: number) {
  return useQuery({
    queryKey: ["moviesGenre", genreId],
    queryFn: () => getMoviesbyGenre(genreId),
        enabled: !!genreId,

  });
}
