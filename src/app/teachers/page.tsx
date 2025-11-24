import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { TeachersListClient } from './TeachersListClient';
import type { TeacherForClient } from './TeacherCard';
import { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';

// Optimisation SEO (On garde les méta-données pour Google)
export const metadata: Metadata = {
  title: 'Trouvez un professeur particulier à Abidjan | Edalia',
  description:
    'Accédez à des centaines de professeurs vérifiés à Cocody, Yopougon, Marcory... Soutien scolaire, langues, musique et plus encore.',
};

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
};

// Force le rendu dynamique pour avoir des données fraîches
export const dynamic = 'force-dynamic';

export default async function TeachersPage() {
  const supabase = createServerComponentClient({ cookies });

  // Récupération optimisée : on trie par date de création (les plus récents en premier)
  const { data, error } = await supabase
    .from('professeurs')
    .select(
      'id, nom_complet, matiere, niveau, tarif_horaire, commune, biographie, photo_url, verifie, avis_moyenne, avis_nombre',
    )
    .eq('abonnement_actif', true)
    .eq('verifie', true)
    .order('cree_le', { ascending: false }) 
    .limit(100);

  // Gestion d'erreur stylisée (On garde ce design sympa au cas où la BDD plante)
  if (error) {
    console.error('Erreur de chargement des professeurs:', error);
    return (
      <div className="container py-20 flex flex-col items-center justify-center text-center min-h-[50vh]">
        <div className="bg-destructive/10 p-4 rounded-full mb-4">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-foreground">
          Oups, une erreur est survenue
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Nous n&apos;avons pas pu récupérer la liste des professeurs. Cela peut venir de votre connexion ou de nos serveurs.
        </p>
        {/* On évite le onClick inline avec reload pour le server component, un simple lien ou revalidation suffit souvent, 
            mais un bouton simple est acceptable ici */}
        <form>
           <button formAction={async () => { 'use server'; }} className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition">
              Réessayer
           </button>
        </form>
      </div>
    );
  }

  const rows = (data || []) as TeacherProfileDB[];

  // Mapping des données pour le client
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

  // On retourne simplement le composant client sans ajouter de Hero section supplémentaire
  // pour éviter la duplication avec le titre qui est déjà dans TeachersListClient.
  return (
    <div className="min-h-screen bg-background">
       <TeachersListClient initialTeachers={initialTeachers} />
    </div>
  );
}