// src/components/teachers/FeaturedTeachersSection.tsx
import { supabase } from '@/lib/supabase';
import { TeacherCard } from '@/components/teacher-card';
import Link from 'next/link';

type ProfesseurRow = {
  id: string;
  nom_complet: string;
  commune: string;
  matiere: string;
  niveau: string;
  tarif_horaire: number;
  photo_url: string | null;
  numero_whatsapp: string;
  verifie: boolean;
  abonnement_actif: boolean;
  avis_moyenne: number | null;
  avis_nombre: number | null;
};

export default async function FeaturedTeachersSection() {
  const { data, error } = await supabase
    .from('professeurs')
    .select('*')
    .eq('verifie', true)
    .eq('abonnement_actif', true)
    .gt('avis_nombre', 0)
    .order('avis_moyenne', { ascending: false })
    .order('avis_nombre', { ascending: false })
    .limit(3);

  if (error) {
    console.error('[Edalia] Erreur récupération profs à la une :', error.message);
    return null;
  }

  const teachers = (data ?? []) as ProfesseurRow[];

  if (teachers.length === 0) {
    return (
      <section className="py-20 md:py-28 bg-background">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:4xl font-headline font-semibold">
            Nos professeurs à la une
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Les premiers enseignants vérifiés et notés apparaîtront ici.
          </p>
          <Link href="/become-a-teacher" className="inline-block px-4 py-2 border rounded-lg">
            Devenir professeur
          </Link>
        </div>
      </section>
    );
  }

  // CORRECTION : Mapper comme TeacherForClient
  const teachersForCard = teachers.map((p) => ({
    id: p.id,
    nom_complet: p.nom_complet,
    matiere: p.matiere,
    niveau: p.niveau,
    tarif_horaire: p.tarif_horaire,
    commune: p.commune,
    biographie: null,
    photo_url: p.photo_url,
    avis_moyenne: p.avis_moyenne,
    avis_nombre: p.avis_nombre,
  }));

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold">
            Nos professeurs à la une
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Les professeurs les mieux notés par les parents sur Edalia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersForCard.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/teachers"
            className="inline-block px-6 py-3 border rounded-lg text-primary font-semibold"
          >
            Voir tous les professeurs
          </Link>
        </div>
      </div>
    </section>
  );
}
