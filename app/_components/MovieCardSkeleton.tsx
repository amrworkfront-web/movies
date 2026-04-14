import { Skeleton } from "@/components/ui/skeleton";

export default function MovieCardSkeleton() {
  return (
    <div className="space-y-2">
      {/* image */}
      <Skeleton className="h-[260px] w-full rounded-xl" />

      {/* title */}
      <Skeleton className="h-4 w-3/4" />

      {/* rating */}
      <Skeleton className="h-3 w-1/3" />
    </div>
  );
}