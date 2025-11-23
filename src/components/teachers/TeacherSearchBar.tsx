// src/components/teachers/TeacherSearchBar.tsx
'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type TeacherSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function TeacherSearchBar({
  value,
  onChange,
  placeholder = 'Rechercher un professeur, une matière ou un quartier...',
}: TeacherSearchBarProps) {
  return (
    <div className="w-full max-w-xl">
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </span>
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 h-11 text-sm"
        />
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Tape le nom d’un prof, une matière (Maths, Anglais…) ou un quartier (Cocody, Yopougon…).
      </p>
    </div>
  );
}
