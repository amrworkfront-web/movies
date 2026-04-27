'use client'
import { useQuery } from "@tanstack/react-query";
import { getGeneres } from "../services/film";
export default function useGeneres() {
  return useQuery({
    queryKey: ["generes"],
    queryFn: async () => getGeneres(),
  });
}
