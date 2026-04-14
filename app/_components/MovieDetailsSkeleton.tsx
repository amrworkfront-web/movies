import { Skeleton } from "@/components/ui/skeleton";

export default function MovieDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-primarybg text-primarytx">

      {/* 🎬 HERO Skeleton */}
      <div className="relative h-[70vh] w-full overflow-hidden">

        {/* Background */}
        <Skeleton className="absolute inset-0 w-full h-full" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute bottom-10 left-6 md:left-12 space-y-4 max-w-2xl">

          {/* Title */}
          <Skeleton className="h-12 w-[70%]" />

          {/* Tagline */}
          <Skeleton className="h-4 w-[40%]" />

          {/* Meta */}
          <div className="flex gap-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Button */}
          <Skeleton className="h-10 w-40 rounded-xl" />
        </div>
      </div>

      {/* 🎬 MAIN CONTENT Skeleton */}
      <div className="px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">

        {/* Poster */}
        <Skeleton className="w-full h-[420px] rounded-2xl" />

        {/* Info */}
        <div className="space-y-6">

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>

          {/* Extra info */}
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-28" />
          </div>

        </div>
      </div>

      {/* 🎬 TRAILER Skeleton */}
      <div className="px-6 md:px-12 pb-16 space-y-4">

        <Skeleton className="h-6 w-40" />

        <Skeleton className="aspect-video w-full rounded-2xl" />

      </div>
    </div>
  );
}