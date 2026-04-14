"use client";

import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/movie";

export const useMovie = (id: number) => {

  return  useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });
};  
