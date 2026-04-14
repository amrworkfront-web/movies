import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movie";
export  function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getPopularMovies(),
  });}
