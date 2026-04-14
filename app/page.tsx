'use client'

import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import MoviesSection from "./_components/MoviesSection";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; // 👈 استخدم المتغير من .env
export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // 👈 دي أهم حاجة
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans dark:bg-black">

        <ThemeToggle />
    </div>
  );
}
