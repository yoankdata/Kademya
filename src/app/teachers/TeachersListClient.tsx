'use client';

import * as React from 'react';
import { Search } from 'lucide-react';
import type { TeacherForClient } from './TeacherCard';
import { TeacherCard } from './TeacherCard';

type TeachersListClientProps = {
  initialTeachers: TeacherForClient[];
};

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

type TeacherSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function TeacherSearchBar({ value, onChange }: TeacherSearchBarProps) {
  return (
    <div className="flex-grow">
      <div className="bg-card p-3 shadow-sm rounded-lg flex items-center border border-border">
        <Search className="w-5 h-5 text-muted-foreground mr-2" />
        <input
          type="text"
          placeholder="Rechercher par matière, niveau, ou commune..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-grow text-sm md:text-base bg-transparent border-none focus:outline-none focus:ring-0 text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
}

function TeacherFilters({
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
    <div className="flex flex-wrap gap-4 p-4 bg-card rounded-lg shadow-sm border border-border">
      <select
        value={subjectFilter}
        onChange={(e) => onSubjectChange(e.target.value)}
        className="border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground max-w-full md:max-w-xs"
      >
        <option value="">Toutes les matières</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        value={levelFilter}
        onChange={(e) => onLevelChange(e.target.value)}
        className="border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground max-w-full md:max-w-xs"
      >
        <option value="">Tous les niveaux</option>
        {levels.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <select
        value={locationFilter}
        onChange={(e) => onLocationChange(e.target.value)}
        className="border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground max-w-full md:max-w-xs"
      >
        <option value="">Toutes les communes</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TeachersListClient({ initialTeachers }: TeachersListClientProps) {
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState<'recent' | 'top'>('recent');
  const [subjectFilter, setSubjectFilter] = React.useState('');
  const [levelFilter, setLevelFilter] = React.useState('');
  const [locationFilter, setLocationFilter] = React.useState('');

  const { subjectsOptions, levelsOptions, locationsOptions } = React.useMemo(() => {
    const subjects = new Set<string>();
    const levels = new Set<string>();
    const locations = new Set<string>();

    initialTeachers.forEach((t) => {
      if (t.matiere) subjects.add(t.matiere);
      if (t.niveau) levels.add(t.niveau);
      if (t.commune) locations.add(t.commune);
    });

    return {
      subjectsOptions: Array.from(subjects).sort(),
      levelsOptions: Array.from(levels).sort(),
      locationsOptions: Array.from(locations).sort(),
    };
  }, [initialTeachers]);

  const filteredTeachers = React.useMemo(() => {
    const q = search.trim().toLowerCase();

    let list = initialTeachers.filter((t) => {
      const matchesSearch =
        !q ||
        t.nom_complet.toLowerCase().includes(q) ||
        t.commune.toLowerCase().includes(q) ||
        t.matiere.toLowerCase().includes(q);

      const matchesSubject = !subjectFilter || t.matiere === subjectFilter;
      const matchesLevel = !levelFilter || t.niveau === levelFilter;
      const matchesLocation =
        !locationFilter || t.commune === locationFilter;

      return matchesSearch && matchesSubject && matchesLevel && matchesLocation;
    });

    if (sort === 'top') {
      list = [...list].sort((a, b) => {
        const noteA = a.avis_moyenne ?? 0;
        const noteB = b.avis_moyenne ?? 0;

        if (noteA !== noteB) return noteB - noteA;
        return (b.avis_nombre ?? 0) - (a.avis_nombre ?? 0);
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-background min-h-screen">
      <header className="mb-10 text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
          Trouvez le professeur idéal pour votre enfant
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Tous les professeurs présentés ici ont un profil vérifié et un
          abonnement actif sur Edalia. Filtrez par matière, niveau et commune
          pour trouver l&apos;accompagnement le plus adapté.
        </p>
      </header>

      {hasTeachers && (
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <TeacherSearchBar value={search} onChange={setSearch} />

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as 'recent' | 'top')
              }
              className="border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground shadow-sm md:w-52"
            >
              <option value="recent">Profils les plus récents</option>
              <option value="top">Meilleurs avis ⭐</option>
            </select>
          </div>

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

      {!hasTeachers ? (
        <div className="text-center p-12 bg-card rounded-lg shadow-sm border border-border">
          <p className="text-lg text-muted-foreground">
            Aucun professeur n&apos;est encore inscrit sur Edalia.
          </p>
        </div>
      ) : filteredTeachers.length === 0 ? (
        <div className="text-center p-12 bg-card rounded-lg shadow-sm border border-border">
          <p className="text-lg text-primary">
            Aucun professeur ne correspond à votre recherche pour l&apos;instant.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Essayez de retirer un filtre ou de modifier votre recherche.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTeachers.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      )}
    </div>
  );
}
