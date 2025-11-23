// src/app/teachers/TeachersListClient.tsx
'use client';

import { useMemo, useState } from 'react';
import { TeacherCard } from '@/components/teacher-card';
import { TeacherSearchBar } from '@/components/teachers/TeacherSearchBar';
import { TeacherFilters } from '@/components/teachers/TeacherFilters';

export type TeacherForCard = {
  id: string;
  name: string;
  location: string;
  subject: string;
  level: string;
  subjects: string[];
  rate: number;
  whatsappNumber: string;
  rating: number | null;   // ⭐ NOTE MOYENNE
  reviews: number;         // ⭐ NOMBRE D’AVIS
  photoUrl: string | null;
  verified: boolean;
};

type TeachersListClientProps = {
  initialTeachers: TeacherForCard[];
};

export function TeachersListClient({ initialTeachers }: TeachersListClientProps) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<'recent' | 'top'>('recent');   // ⭐ SORT
  const [subjectFilter, setSubjectFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Options uniques pour filtres
  const { subjectsOptions, levelsOptions, locationsOptions } = useMemo(() => {
    const subjects = new Set<string>();
    const levels = new Set<string>();
    const locations = new Set<string>();

    initialTeachers.forEach((t) => {
      if (t.subject) subjects.add(t.subject);
      if (t.level) levels.add(t.level);
      if (t.location) locations.add(t.location);
    });

    return {
      subjectsOptions: Array.from(subjects).sort(),
      levelsOptions: Array.from(levels).sort(),
      locationsOptions: Array.from(locations).sort(),
    };
  }, [initialTeachers]);

  // 🔥 FILTRES + TRI “MEILLEURS PROFS”
  const filteredTeachers = useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = initialTeachers.filter((t) => {
      // Recherche
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q) ||
        t.subjects.some((s) => s.toLowerCase().includes(q));

      // Filtres
      const matchesSubject = !subjectFilter || t.subject === subjectFilter;
      const matchesLevel = !levelFilter || t.level === levelFilter;
      const matchesLocation = !locationFilter || t.location === locationFilter;

      return matchesSearch && matchesSubject && matchesLevel && matchesLocation;
    });

    // ⭐ TRI "MEILLEURS PROFS"
    if (sort === 'top') {
      list = [...list].sort((a, b) => {
        const noteA = a.rating ?? 0;
        const noteB = b.rating ?? 0;

        if (noteA === noteB) {
          return (b.reviews ?? 0) - (a.reviews ?? 0);
        }
        return noteB - noteA;
      });
    }

    return list;
  }, [
    search,
    sort,
    subjectFilter,
    levelFilter,
    locationFilter,
    initialTeachers,
  ]);

  const hasTeachers = initialTeachers.length > 0;

  return (
    <>
      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-headline font-semibold mb-4">
        Nos professeurs à Abidjan
      </h1>

      <p className="text-muted-foreground mb-8 max-w-2xl">
        Découvrez des enseignants vérifiés, disponibles pour accompagner vos enfants à domicile ou en ligne.
      </p>

      {hasTeachers && (
        <div className="space-y-4 mb-8">
          {/* Recherche + Tri */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <TeacherSearchBar value={search} onChange={setSearch} />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as 'recent' | 'top')}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="recent">Plus récents</option>
              <option value="top">Meilleurs profs ⭐</option>
            </select>
          </div>

          {/* Filtres */}
          <TeacherFilters
            subjects={subjectsOptions}
            levels={levelsOptions}
            locations={locationsOptions}
            subjectFilter={subjectFilter}
            levelFilter={levelFilter}
            locationFilter={locationFilter}
            onSubjectChange={setSubjectFilter}
            onLevelChange={setLevelFilter}
            onLocationChange={setLocationFilter}
          />
        </div>
      )}

      {/* LISTE PROFESSEURS */}
      {!hasTeachers ? (
        <p className="text-muted-foreground">
          Aucun professeur n&apos;est encore inscrit.
        </p>
      ) : filteredTeachers.length === 0 ? (
        <p className="text-muted-foreground">
          Aucun professeur ne correspond à votre recherche pour l&apos;instant.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      )}
    </>
  );
}
