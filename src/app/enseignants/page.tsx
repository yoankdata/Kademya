import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { TeachersListClient } from './TeachersListClient';
import type { TeacherForClient } from './TeacherCard';
import type { Metadata } from 'next';
import { AlertCircle, CheckCircle2, Star, Users } from 'lucide-react';

// Optimisation SEO
export const metadata: Metadata = {
  title: 'Les Meilleurs Professeurs Particuliers à Abidjan | Kademya',
  description:
    'Accédez à l’élite des professeurs vérifiés à Cocody, Yopougon, Marcory. Soutien scolaire, coaching et langues. Réservez votre cours aujourd\'hui.',
};

// Force le rendu dynamique pour avoir des données fraîches
export const dynamic = 'force-dynamic';

// Type brut DB
type TeacherProfileDB = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  tarif_horaire: number;
  commune: string;
  biographie: string | null;
  photo_url: string | null;
  verifie: boolean;
  avis_moyenne: number | null;
  avis_nombre: number | null;
  abonnement_actif: boolean;
  cree_le: string;
};

export default async function TeachersPage() {
  const supabase = createServerComponentClient({ cookies });

  // Récupération optimisée
  const { data, error } = await supabase
    .from('professeurs')
    .select(
      'id, nom_complet, matiere, niveau, tarif_horaire, commune, biographie, photo_url, verifie, avis_moyenne, avis_nombre, abonnement_actif, cree_le',
    )
    .eq('abonnement_actif', true)
    .eq('verifie', true)
    .order('cree_le', { ascending: false })
    .limit(100);

  // --- UI ERREUR PREMIUM ---
  if (error) {
    console.error('Erreur de chargement des professeurs:', error);
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-gray-50/50">
        <div className="max-w-md text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Oups, petit problème technique
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nous n'arrivons pas à charger la liste des talents pour le moment.
              Cela vient probablement de nos serveurs.
            </p>
          </div>
          <form>
            <button
              formAction={async () => {
                'use server';
              }}
              className="w-full py-3 px-6 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200/50"
            >
              Réactualiser la page
            </button>
          </form>
        </div>
      </div>
    );
  }

  const rows = (data || []) as TeacherProfileDB[];

  // Mapping des données
  const initialTeachers: TeacherForClient[] = rows.map((t) => ({
    id: t.id,
    nom_complet: t.nom_complet,
    matiere: t.matiere,
    niveau: t.niveau,
    tarif_horaire: t.tarif_horaire,
    commune: t.commune,
    biographie: t.biographie,
    photo_url: t.photo_url,
    avis_moyenne: t.avis_moyenne,
    avis_nombre: t.avis_nombre ?? 0,
  }));

  // --- PAGE PRINCIPALE ---
  return (
    <div className="min-h-screen bg-gray-50/30 selection:bg-emerald-100 selection:text-emerald-900">

      {/* 1. HERO SECTION AVEC BACKGROUND SUBTIL */}
      <div className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
        {/* Décoration d'arrière-plan (Blobs) */}
        <div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] opacity-70" />
        <div className="pointer-events-none absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[100px] opacity-70" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-emerald-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Rentrée scolaire & Examens 2025-2026
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Trouvez le mentor <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                qui fera la différence.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Accédez à une sélection exclusive de professeurs vérifiés à Abidjan.
              De la maternelle au supérieur, l'excellence est à portée de clic.
            </p>
          </div>

          {/* BARRE DE CONFIANCE (STATS) */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-gray-100 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100/50 rounded-lg text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">100% Vérifiés</p>
                <p className="text-xs text-gray-500">Identité & Diplômes</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100/50 rounded-lg text-yellow-700">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">4.8/5 Moyenne</p>
                <p className="text-xs text-gray-500">Avis certifiés élèves</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 rounded-lg text-blue-700">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Suivi Personnalisé</p>
                <p className="text-xs text-gray-500">Adapté à chaque élève</p>
              </div>
            </div>

            {/* Hidden on small screens if needed, or keeping styling simple */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right ml-auto">
                <p className="text-sm text-gray-500">Plus de <strong className="text-gray-900">100 heures</strong> <br /> de cours dispensées ce mois-ci.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LISTE CLIENT (La partie interactive) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-20">
        <TeachersListClient initialTeachers={initialTeachers} />
      </div>

    </div>
  );
}