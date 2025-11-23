// src/components/teachers/TeacherFilters.tsx
'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TeacherFiltersProps = {
  subjects: string[];
  levels: string[];
  locations: string[];
  subjectFilter: string;
  levelFilter: string;
  locationFilter: string;
  onSubjectChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onLocationChange: (value: string) => void;
};

export function TeacherFilters({
  subjects,
  levels,
  locations,
  subjectFilter,
  levelFilter,
  locationFilter,
  onSubjectChange,
  onLevelChange,
  onLocationChange,
}: TeacherFiltersProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
      {/* Matière */}
      <div className="w-full md:w-1/3">
        <Select
          value={subjectFilter}
          onValueChange={(v) => onSubjectChange(v === 'all' ? '' : v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Toutes les matières" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les matières</SelectItem>
            {subjects.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Niveau */}
      <div className="w-full md:w-1/3">
        <Select
          value={levelFilter}
          onValueChange={(v) => onLevelChange(v === 'all' ? '' : v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tous les niveaux" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les niveaux</SelectItem>
            {levels.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Commune */}
      <div className="w-full md:w-1/3">
        <Select
          value={locationFilter}
          onValueChange={(v) => onLocationChange(v === 'all' ? '' : v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Toutes les communes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les communes</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
