'use client'
import { getFilms } from '../services/film'
import { useQuery } from '@tanstack/react-query'

export default function useGetFilms() {
  return  useQuery({
    queryKey: ["films"],
    queryFn:  () => getFilms(),
})}
