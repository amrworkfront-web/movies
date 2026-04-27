'use client'
import CategorieCard from '@/app/_components/CategorieCard';
import { CategorieDailog } from '@/app/_components/CategorieDailog'
import { Genre } from '@/app/types/film';
import useGeneres from '@/app/utils/hooks/useGeneres';

export default function Categories() {
  const { data: genres } = useGeneres();

    return (
        <div>
            <div className='flex items-center justify-between '>
                <div>     
                       <h1 className='text-3xl font-bold'>Categories Management</h1>
                    <p>Group movies by genre and theme.</p></div>
                <CategorieDailog></CategorieDailog>
            </div>

            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
                {
                    genres?.map((genre: Genre, index: number) =>
                    <CategorieCard key={index} title={genre.name} numOfMovies={genre.moviesCount} />)
                }
            </div>
        </div>
    )
}
