import Input from "@/app/_components/Input"
import MovieForm from "@/app/_components/MovieForm"
import {ArrowLeft} from "lucide-react"
import Link from "next/link"


export default function AddMovie() {
  return (
    <div className="space-y-6">
        <div className="flex gap-3 items-center text-white ">
            <Link href="/movies">
                <ArrowLeft size={16} />
                </Link>
            <h1>
                Add New Movie</h1>
        </div>
        <div className="bg-surface-low rounded-2xl">
            <MovieForm />
        </div>
    </div>
  )
}
