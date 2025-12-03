'use server';

import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

export async function trackContactClick(teacherId: string) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  try {
    await supabase.from('stats_contacts').insert({
      teacher_id: teacherId,
      user_agent: userAgent,
    });
  } catch (error) {
    console.error('Erreur tracking contact:', error);
  }
}

export async function ajouterAvisAction(formData: FormData) {
  // 1. Récupération des données du formulaire
  const id_professeur = formData.get('id_professeur')?.toString();
  const nom_parent = formData.get('nom_parent')?.toString();
  // --- NOUVEAU CHAMP : Contact pour la vérification ---
  const parent_contact = formData.get('parent_contact')?.toString();
  const note = Number(formData.get('note'));
  const commentaire = formData.get('commentaire')?.toString() || null;

  // 2. Validation des champs obligatoires (y compris le nouveau contact)
  if (!id_professeur || !nom_parent || !parent_contact || isNaN(note) || note < 1 || note > 5) {
    console.error('Champs manquants ou invalides pour ajouter un avis (Veuillez vérifier nom, contact et note).');
    // Dans un cas réel, vous pourriez utiliser une librairie comme react-toastify pour afficher un message d'erreur
    return;
  }

  // 3. Insertion dans la BDD
  const { error } = await supabase.from('avis_professeurs').insert({
    id_professeur,
    nom_parent,
    parent_contact, // <-- ENREGISTREMENT DU CONTACT
    note,
    commentaire,
    est_modere: false, // <-- DÉFINIT L'AVIS EN STATUT 'EN ATTENTE DE MODÉRATION'
  });

  if (error) {
    console.error('Erreur insertion avis Supabase :', error.message);
    // Gérer l'erreur utilisateur ici
    return;
  }

  // 4. Invalider le cache et Redirection
  // Cela garantit que la page de profil est fraîche, même si l'avis n'est pas encore visible.
  revalidatePath(`/enseignants/${id_professeur}`);

  // Redirection (Optionnel: vous pouvez rediriger vers la même page avec un paramètre de succès)
  redirect(`/enseignants/${id_professeur}?review_submitted=true`);
}