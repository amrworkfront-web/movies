'use client'
import useGetFilms from "../utils/filmHooks/useGetFilms";
import useGetGeneres from "../utils/filmHooks/useGetGeneres";

type Props = {
    title: string;
    icon: React.ReactNode;
    isActive: boolean;
}
export default function StatisticsCard({ title, icon , isActive }: Props) {
  let value=0
      const{data:films}=useGetFilms();
    const{data:categories}=useGetGeneres();
    if(title==="Total Movies"){
        value=films?.length || 0;
    }
    if(title==="Total Categories"){
        value=categories?.length || 0;
    }   
  return (
  <div className={`bg-surface-low flex flex-col items-start p-6 rounded-xl space-y-4 ${isActive ? 'border-l-4 border-primary-container' : ''}`}>
        <div className={`bg-primary-container/16 p-4 rounded-lg ${isActive ? 'text-primary-container' : 'text-gray-200'}`}>
        
        {icon}
        </div>
        <h2   className='text-2xl text-white'>{value}</h2>
        <p>{title}</p></div>
  )
}
