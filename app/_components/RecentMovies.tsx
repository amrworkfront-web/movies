'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useGetFilms from "../utils/filmHooks/useGetFilms";
import { useEffect } from "react";
import { MovieResponse } from "../types/film";


export default function RecentMovies() {
  const { data: films } = useGetFilms();
  useEffect(() => {
    console.log(films);
  }, [films]);
 return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Movie</TableHead>
          <TableHead>Genres</TableHead>
          <TableHead>Release</TableHead>
          <TableHead >Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {films?.map((film:MovieResponse) => (
          <TableRow key={film.id}>
            <TableCell className="font-medium">{film.title}</TableCell>
            <TableCell>{film.genre?.name}</TableCell>
            <TableCell>{film.description}</TableCell>
            <TableCell  ><img src={film.photoUrl} alt={film.title} className="w-16 h-16 object-cover" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )  
}
