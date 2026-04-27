import React from 'react'
type Props = {
    title: string,
    numOfMovies: number
}
export default function CategorieCard({ title, numOfMovies }: Props) {
  return (
    <div  className='bg-surface-low p-6 rounded-xl space-y-4   border-l-4  border-primary-container hover:border-1  hover:border-primary-container transition-all cursor-pointer  duration-300 ease-in-out'>
        <h2>{title}</h2>
        <p>{numOfMovies}</p>
    </div>
  )
}
