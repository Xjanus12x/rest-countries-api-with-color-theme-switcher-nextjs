import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="px-8 py-10 ">
      <Skeleton className="h-52 w-full" />
      <div className="space-y-8">
        <div className="space-y-5">
          <Skeleton className="h-4 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </section>
  );
}
