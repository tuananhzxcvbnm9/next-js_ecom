import { Skeleton } from "@/components/ui/skeleton";

export default function CartLoading() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="rounded-2xl border p-4">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="mt-3 h-4 w-1/4" />
          <Skeleton className="mt-4 h-8 w-24" />
        </div>
      ))}
    </div>
  );
}
