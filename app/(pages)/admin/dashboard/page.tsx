import RecentMovies from '@/app/_components/RecentMovies';
import StatisticsCard from '@/app/_components/StatisticsCard'
import useGetFilms from '@/app/utils/filmHooks/useGetFilms';
import useGetGeneres from '@/app/utils/filmHooks/useGetGeneres';

import { Film, LayoutGrid, Users, Plus, ArrowRight } from "lucide-react";
import Link from 'next/link';

const data = [
    {
        icon: Film,
        title: "Total Movies",
        isActive: true,
    },
    {
        icon: LayoutGrid,
        title: "Total Categories",
        isActive: false,
    },
    {
        icon: Users,
        title: "Total Users",
        isActive: false,
    },
];

export default function Dashboard() {

    return (
        <div className='space-y-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map((item, index) =>
                        <div className=' 


' key={index}> <StatisticsCard title={item.title} icon={<item.icon size={24} />} isActive={item.isActive} /> </div>)}
            </div>

            <div className='bg-surface-low p-4 rounded-lg



'>
                <h2>Quick Actions</h2>

                <span>Jump straight into managing your library.

                </span>
                <div className='flex gap-4'>
                    <Link href='/movies/add' className='bg-primary-container text-white px-4 py-2 rounded-lg mt-4 flex items-center gap-2'><Plus size={16} /> Add Movie</Link>
                    <Link href='/categories' className='bg-black/90

 text-white px-4 py-2 rounded-lg mt-4 flex items-center gap-2'><Plus size={16} /> Add Category</Link>
                </div>
            </div>
            <div className='bg-surface-low p-4 rounded-lg'>
                <div className='flex items-center  justify-between '>
                    <h2>    Recent Movies
                    </h2>

                    <Link href='/admin/movies' className='text-sm text-primary-container flex gap-2'>View All
                        <ArrowRight size={16} />
                    </Link>
                </div>
                <RecentMovies />

            </div>
        </div>
    )
}
