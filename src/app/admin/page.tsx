import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isAdminUser } from '@/lib/admin-auth';
import AdminDashboardClient, {
  DemandeProf,
  Professeur,
} from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session || !isAdminUser(session.user)) {
    redirect('/admin/login');
  }

  // Fetch data server-side
  const { data: demandesData, error: demandesError } = await supabase
    .from('demandes_professeurs')
    .select('*')
    .order('created_at', { ascending: false });

  if (demandesError) {
    console.error(
      'Erreur chargement demandes (server):',
      demandesError.message,
    );
  }

  const { data: profsData, error: profsError } = await supabase
    .from('professeurs')
    .select('*')
    .order('created_at', { ascending: false });

  if (profsError) {
    console.error('Erreur chargement professeurs (server):', profsError.message);
  }

  const demandes = (demandesData as DemandeProf[]) || [];
  const profs = (profsData as Professeur[]) || [];

  return (
    <AdminDashboardClient initialDemandes={demandes} initialProfs={profs} />
  );
}
