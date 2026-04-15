"use client";

import { useEffect, useState } from "react";

export type WatchlistItem = {
  id: number;
  title: string;
  poster_path: string;
};

export const useWatchlist = () => {
  const [list, setList] = useState<WatchlistItem[]>([]);

  // load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("watchlist");
    if (data) setList(JSON.parse(data));
  }, []);




const add = (movie: WatchlistItem) => {
  if (!list.find((m) => m.id === movie.id)) {
    const updated = [...list, movie]
    setList(updated)
    localStorage.setItem("watchlist", JSON.stringify(updated)) // ✅
  }
}

const remove = (id: number) => {
  const updated = list.filter((m) => m.id !== id)
  setList(updated)
  localStorage.setItem("watchlist", JSON.stringify(updated)) // ✅
}
  // check
  const isInWatchlist = (id: number) => {
    return list.some((m) => m.id === id);
  };

  return { list, add, remove, isInWatchlist };
};