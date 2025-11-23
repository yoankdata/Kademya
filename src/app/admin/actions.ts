// src/app/admin/actions.ts
'use server';

import { supabase } from '@/lib/supabase';

export async function activateSubscription(teacherId: string) {
  const now = new Date();
  const expire = new Date();
  expire.setDate(now.getDate() + 30); // abonnement de 30 jours

  const { error } = await supabase
    .from('professeurs')
    .update({
      abonnement_actif: true,
      abonnement_expire_le: expire.toISOString().slice(0, 10), // YYYY-MM-DD
    })
    .eq('id', teacherId);

  if (error) {
    console.error('Erreur activation abonnement:', error.message);
  }
}
