'use client'
import { useQuery } from "@tanstack/react-query";
import { getGeneres } from "../services/film";
export default function useGetGeneres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: async () => getGeneres(),
  });
}
