import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="space-y-3 rounded-2xl border p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-9 w-full" />
        </div>
      ))}
    </div>
  );
}
