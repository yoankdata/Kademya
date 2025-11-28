'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';

export async function updateTeacherProfile(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerActionClient({ cookies: () => cookieStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message:
        'Non authentifié. Veuillez vous reconnecter pour mettre à jour votre profil.',
    };
  }

  const nom_complet = formData.get('nom_complet')?.toString();
  const matiere = formData.get('matiere')?.toString();
  const niveau = formData.get('niveau')?.toString();
  const tarif_horaire_str = formData.get('tarif_horaire')?.toString();
  const commune = formData.get('commune')?.toString();
  const biographie = formData.get('biographie')?.toString() || null;
  const numero_whatsapp = formData.get('numero_whatsapp')?.toString();
  const photo_url = formData.get('photo_url')?.toString() || null;

  if (
    !nom_complet ||
    !matiere ||
    !niveau ||
    !tarif_horaire_str ||
    !commune ||
    !numero_whatsapp
  ) {
    return {
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires.',
    };
  }

  const tarif_horaire = parseInt(tarif_horaire_str, 10);
  if (Number.isNaN(tarif_horaire) || tarif_horaire <= 0) {
    return {
      success: false,
      message:
        'Le tarif horaire doit être un nombre positif (en FCFA).',
    };
  }

  const updateData = {
    nom_complet,
    matiere,
    niveau,
    tarif_horaire,
    commune,
    biographie,
    numero_whatsapp,
    photo_url,
  };

  const { error } = await supabase
    .from('professeurs')
    .update(updateData)
    .eq('user_id', user.id); // ✅ lien via user_id

  if (error) {
    console.error(
      'Erreur Supabase lors de la mise à jour du profil:',
      error,
    );
    return {
      success: false,
      message: `Erreur de la base de données: ${error.message}.`,
    };
  }

  // Purge cache
  revalidatePath('/enseignants');
  return { success: true, message: 'Profil mis à jour avec succès.' };
}
