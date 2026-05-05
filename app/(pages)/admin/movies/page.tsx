import RecentMovies from '@/app/_components/RecentMovies'
import SearchBox from '@/app/_components/SearchBox'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const Generes = [
  { id: "1", name: "Action" },
  { id: "2", name: "Comedy" },
  { id: "3", name: "Drama" },
  { id: "4", name: "Horror" },
  { id: "5", name: "Sci-Fi" },
];
export default function Movies() {
  return (
    <div className='space-y-4'>
      <div >
        <h1 className='text-white text-3xl font-bold'>Movies Management</h1>
        <p>Browse, search, and edit your catalog.</p>
      </div>
      <div className='bg-surface-low p-4 rounded-lg'>

        <div className='flex items-center  justify-between'>
          <SearchBox />


          <select
            className="p-3 mt-2 rounded-lg bg-surface-high border outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Genre</option>
            {Generes.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>

          <Link href='/admin/movies/add' className='bg-primary-container text-white px-4 py-2 rounded-lg mt-4 flex items-center gap-2'>
            <Plus size={16} /> Add Movie
          </Link>
        </div>
        <RecentMovies />
      </div>
    </div>
  )
}
