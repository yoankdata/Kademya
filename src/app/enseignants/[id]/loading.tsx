// src/app/teachers/[id]/loading.tsx
import { Skeleton } from '@/components/ui/skeleton';

export default function TeacherProfileLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      {/* Header profil */}
      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-8/12" />
      </div>

      {/* Infos cours */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-40" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-9/12" />
          <Skeleton className="h-3 w-7/12" />
          <Skeleton className="h-3 w-6/12" />
        </div>
      </div>

      {/* Bouton contact / réservation */}
      <Skeleton className="h-10 w-40" />
    </div>
  );
}
