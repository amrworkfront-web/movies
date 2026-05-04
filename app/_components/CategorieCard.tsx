import { CategorieUpdate } from './CategorieUpdate'
type Props = {
  id: string
  title: string,
  numOfMovies: number
}
export default function CategorieCard({ id, title, numOfMovies }: Props) {
  return (
    <div className='bg-surface-low p-6 rounded-xl space-y-4   border-l-4  border-primary-container   flex justify-between items-start'>
      <div className='space-y-3'>
        <h2>{title}</h2>
        <p>{numOfMovies}</p>
      </div>
      <div className='hover:cursor-pointer'>
        <CategorieUpdate title={title} id={id} />
      </div>
    </div>
  )
}
