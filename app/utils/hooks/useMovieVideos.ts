import { useQuery } from "@tanstack/react-query";
import { getMovieVideos } from "../services/movie";

export const useMovieVideos = (id: number) => {
  return useQuery({
    queryKey: ["movieVideos", id],
    queryFn: () => getMovieVideos(id),
    enabled: !!id,
  });
};