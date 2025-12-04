'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { isAdminUser } from '@/lib/admin-auth';
import { slugify } from '@/lib/utils';

export type DemandeProf = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  commune: string;
  tarif_horaire: number | null;
  numero_whatsapp: string;
  email: string | null;
  biographie: string | null;
  statut: 'en_attente' | 'approuve' | 'refuse';
  created_at: string;
  id_document_path: string | null;
  diplome_document_path: string | null;
  photo_profil_path: string | null;
};

export async function approveTeacher(demande: DemandeProf) {
  const cookieStore = await cookies();
  const supabase = createServerActionClient({ cookies: () => Promise.resolve(cookieStore) });

  // 1. Vérification Admin
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session || !isAdminUser(session.user)) {
    return { error: 'Non autorisé' };
  }

  // 2. Helpers pour URLs
  const getTeacherPhotoUrl = (path: string | null): string | null => {
    if (!path) return null;
    const { data } = supabase.storage.from('teacher-photos').getPublicUrl(path);
    return data?.publicUrl ?? null;
  };

  const photoUrl = getTeacherPhotoUrl(demande.photo_profil_path);

  // Génération du slug : Nom + Matière + Commune + 4 derniers chars de l'ID
  const baseSlug = `${demande.nom_complet} ${demande.matiere} ${demande.commune}`;
  const slug = `${slugify(baseSlug)}-${demande.id.slice(-4)}`;

  // 3. Insertion dans la table professeurs
  const { error: insertError } = await supabase.from('professeurs').insert([
    {
      nom_complet: demande.nom_complet,
      matiere: demande.matiere,
      niveau: demande.niveau,
      commune: demande.commune,
      tarif_horaire: demande.tarif_horaire,
      biographie: demande.biographie,
      photo_url: photoUrl,
      numero_whatsapp: demande.numero_whatsapp,
      verifie: false,
      abonnement_actif: false,
      abonnement_expire_le: null,
      cree_le: new Date().toISOString(), // Important pour le tri
      slug: slug,
    },
  ]);

  if (insertError) {
    console.error('Erreur insertion professeur:', insertError.message);
    return { error: insertError.message };
  }

  // 4. Mise à jour du statut de la demande
  const { error: updateError } = await supabase
    .from('demandes_professeurs')
    .update({ statut: 'approuve' })
    .eq('id', demande.id);

  if (updateError) {
    console.error('Erreur update demande:', updateError.message);
    return { error: updateError.message };
  }

  // 5. Invalidation du cache pour la liste des enseignants
  revalidateTag('enseignants');

  return { success: true };
}
