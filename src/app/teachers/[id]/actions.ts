'use server';

import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export async function ajouterAvisAction(formData: FormData) {
  const id_professeur = formData.get('id_professeur')?.toString();
  const nom_parent = formData.get('nom_parent')?.toString();
  const note = Number(formData.get('note'));
  const commentaire = formData.get('commentaire')?.toString() || null;

  if (!id_professeur || !nom_parent || !note) {
    console.error('Champs manquants pour ajouter un avis');
    return;
  }

  const { error } = await supabase.from('avis_professeurs').insert({
    id_professeur,
    nom_parent,
    note,
    commentaire,
  });

  if (error) {
    console.error('Erreur insertion avis :', error.message);
    return;
  }

  redirect(`/teachers/${id_professeur}`);
}
