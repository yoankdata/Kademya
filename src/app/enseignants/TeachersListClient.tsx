'use client';

import * as React from 'react';
import { Search, SlidersHorizontal, MapPin, BookOpen, GraduationCap, ChevronDown, ArrowUpDown, XCircle } from 'lucide-react';
import type { TeacherForClient } from './TeacherCard';
import { TeacherCard } from './TeacherCard';

// --- TYPES ---
type TeachersListClientProps = {
  initialTeachers: TeacherForClient[];
};

type FilterSelectProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

// --- SOUS-COMPOSANTS UI (Design System) ---

// 1. Barre de recherche Premium
function TeacherSearchBar({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <div className="relative group w-full md:max-w-md lg:max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl leading-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-sm transition-all duration-200"
        placeholder="Rechercher (ex: Maths, Cocody...)"
      />
    </div>
  );
}

// 2. Select Personnalisé (Pour éviter le look natif moche)
function FilterSelect({ icon: Icon, label, value, options, onChange }: FilterSelectProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className={`h-4 w-4 ${value ? 'text-emerald-600' : 'text-gray-400'}`} />
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none block w-full pl-10 pr-10 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer
          ${value
            ? 'bg-emerald-50 border-emerald-200 text-emerald-900 focus:ring-emerald-500'
            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
          } focus:outline-none`}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ChevronDown className={`h-4 w-4 ${value ? 'text-emerald-600' : 'text-gray-400'}`} />
      </div>
    </div>
  );
}

// --- COMPOSANT PRINCIPAL ---

export function TeachersListClient({ initialTeachers }: TeachersListClientProps) {
  // États
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState<'recent' | 'top'>('recent');

  const [subjectFilter, setSubjectFilter] = React.useState('');
  const [levelFilter, setLevelFilter] = React.useState('');
  const [locationFilter, setLocationFilter] = React.useState('');

  // Extraction des options uniques (Mémoïsé)
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

  // Logique de filtrage et tri
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
      const matchesLocation = !locationFilter || t.commune === locationFilter;

      return matchesSearch && matchesSubject && matchesLevel && matchesLocation;
    });

    // Tri
    if (sort === 'top') {
      list = [...list].sort((a, b) => {
        const noteA = a.avis_moyenne ?? 0;
        const noteB = b.avis_moyenne ?? 0;
        if (noteA !== noteB) return noteB - noteA; // Meilleure note d'abord
        return (b.avis_nombre ?? 0) - (a.avis_nombre ?? 0); // Plus d'avis ensuite
      });
    }
    // Note: 'recent' est l'ordre par défaut venant du serveur (cree_le desc)

    return list;
  }, [search, sort, subjectFilter, levelFilter, locationFilter, initialTeachers]);

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setSearch('');
    setSubjectFilter('');
    setLevelFilter('');
    setLocationFilter('');
  };

  const hasTeachers = initialTeachers.length > 0;
  const isFiltering = search || subjectFilter || levelFilter || locationFilter;

  // --- RENDU ---
  return (
    <div className="w-full">

      {/* 1. SECTION BARRE D'OUTILS (SEARCH & FILTER) */}
      <div className="-mt-8 mb-12 relative z-10">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100">

          <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
            {/* Barre de recherche */}
            <TeacherSearchBar value={search} onChange={setSearch} />

            {/* Filtres & Tri */}
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <div className="grid grid-cols-2 sm:flex gap-3 w-full">
                {/* Filtre Matière */}
                <div className="w-full sm:w-40">
                  <FilterSelect
                    icon={BookOpen}
                    label="Matière"
                    value={subjectFilter}
                    options={subjectsOptions}
                    onChange={setSubjectFilter}
                  />
                </div>

                {/* Filtre Niveau */}
                <div className="w-full sm:w-40">
                  <FilterSelect
                    icon={GraduationCap}
                    label="Niveau"
                    value={levelFilter}
                    options={levelsOptions}
                    onChange={setLevelFilter}
                  />
                </div>
              </div>

              {/* Filtre Commune (Largeur auto mobile) */}
              <div className="w-full sm:w-44">
                <FilterSelect
                  icon={MapPin}
                  label="Commune"
                  value={locationFilter}
                  options={locationsOptions}
                  onChange={setLocationFilter}
                />
              </div>

              {/* Séparateur visuel Desktop */}
              <div className="hidden lg:block w-px bg-gray-200 h-10 mx-1"></div>

              {/* Tri */}
              <div className="w-full sm:w-auto min-w-[160px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </div>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as 'recent' | 'top')}
                    className="appearance-none block w-full pl-10 pr-8 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <option value="recent">Nouveautés</option>
                    <option value="top">Les mieux notés</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateur de résultats actifs */}
          {isFiltering && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">{filteredTeachers.length}</span> professeur(s) trouvé(s)
              </p>
              <button
                onClick={resetFilters}
                className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Effacer les filtres
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. GRILLE DE RÉSULTATS */}
      {!hasTeachers ? (
        <div className="text-center py-20 px-4">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <SlidersHorizontal className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">La plateforme est en préparation</h3>
          <p className="text-gray-500 mt-2">Aucun professeur n&apos;est encore inscrit. Revenez très vite !</p>
        </div>
      ) : filteredTeachers.length === 0 ? (
        // État vide (Filtres trop stricts)
        <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white rounded-3xl border border-dashed border-gray-200">
          <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <Search className="w-10 h-10 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Aucun résultat pour cette recherche
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Il semble qu&apos;aucun professeur ne corresponde exactement à vos critères.
            Essayez d&apos;élargir votre recherche (par exemple en changeant de commune).
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-medium shadow-lg shadow-gray-200 hover:bg-gray-800 transition-all"
          >
            Voir tous les professeurs
          </button>
        </div>
      ) : (
        // Grille des cartes
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>
      )}
    </div>
  );
}