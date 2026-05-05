'use client'
import CategorieCard from '@/app/_components/CategorieCard';
import { CategorieDailog } from '@/app/_components/CategorieDailog'
import { Genre } from '@/app/types/film';
import useGetGeneres from '@/app/utils/filmHooks/useGetGeneres';

export default function Categories() {
    const { data: genres } = useGetGeneres();

    return (
        <div>
            <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 '>
                <div>
                    <h1 className='text-3xl font-bold'>Categories Management</h1>
                    <p>Group movies by genre and theme.</p>
                    </div>
                <CategorieDailog></CategorieDailog>
            </div>

            <div className='grid grid-cols-1  md:grid-cols-2   lg:grid-cols-4 gap-4 mt-6'>
                {
                    genres?.map((genre: Genre) =>
                        <CategorieCard key={genre.id} id={genre.id} title={genre.name} numOfMovies={genre.moviesCount} />
                    )
                }
            </div>
        </div>
    )
}
