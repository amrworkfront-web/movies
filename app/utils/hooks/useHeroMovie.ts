import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/movie";

export const useHeroMovie = () => {
  return useQuery({
    queryKey: ["heroMovie"],
    queryFn: getTrendingMovies,
  });
};