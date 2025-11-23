// src/app/teachers/page.tsx
import { supabase } from '@/lib/supabase';
import { TeachersListClient } from './TeachersListClient';

type ProfesseurRow = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  tarif_horaire: number;
  commune: string;
  biographie: string | null;
  photo_url: string | null;
  numero_whatsapp: string;
  verifie: boolean;
  cree_le: string;
  abonnement_actif: boolean;
  abonnement_expire_le: string | null;
  avis_moyenne: number | null;
  avis_nombre: number | null;
};

export default async function TeachersPage() {
  const { data, error } = await supabase
    .from('professeurs')
    .select('*')
    .eq('verifie', true)
    .eq('abonnement_actif', true)
    .order('cree_le', { ascending: false });

  if (error) {
    console.error('Erreur Supabase:', error.message);
    return (
      <div className="container py-16">
        <h1 className="text-3xl md:text-4xl font-headline font-semibold mb-4">
          Nos professeurs
        </h1>
        <p className="text-muted-foreground">
          Impossible de charger les professeurs pour le moment.
        </p>
      </div>
    );
  }

  const rows = (data ?? []) as ProfesseurRow[];

  const teachersForCard = rows.map((p) => ({
    id: p.id,
    name: p.nom_complet,
    location: p.commune,
    subject: p.matiere,
    level: p.niveau,
    subjects: [p.matiere, p.niveau],
    rate: p.tarif_horaire,
    whatsappNumber: p.numero_whatsapp,
    rating: p.avis_moyenne ?? null,
    reviews: p.avis_nombre ?? 0,
    photoUrl: p.photo_url,
    verified: p.verifie,
  }));

  return (
    <div className="container py-16">
      <TeachersListClient initialTeachers={teachersForCard} />
    </div>
  );
}
