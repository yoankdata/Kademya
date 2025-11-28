// src/app/teachers/loading.tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function TeachersLoading() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Header skeleton */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-80" />
      </div>

      {/* Filtres / barre de recherche éventuelle */}
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Cartes profs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 space-y-4 bg-background"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-10/12" />
            </div>

            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
