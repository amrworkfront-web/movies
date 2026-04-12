'use client'

import { useEffect } from "react";

export default function Home() {

useEffect(() => {  
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=a8b8bde8891f59b628ba32b8cf747490`
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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
test
    </div>
  );
}
