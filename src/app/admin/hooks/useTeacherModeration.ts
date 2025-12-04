import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useToast } from '@/hooks/use-toast';
import { approveTeacher } from '../actions';
import type { DemandeProf, Professeur } from '../AdminDashboardClient';

export function useTeacherModeration(
    initialDemandes: DemandeProf[],
    initialProfs: Professeur[]
) {
    const supabase = useSupabaseClient();
    const { toast } = useToast();

    const [demandes, setDemandes] = useState<DemandeProf[]>(initialDemandes);
    const [profs, setProfs] = useState<Professeur[]>(initialProfs);

    // --- HELPERS ---

    const refreshProfs = async () => {
        const { data } = await supabase
            .from('professeurs')
            .select('*')
            .order('created_at', { ascending: false });
        if (data) setProfs(data as Professeur[]);
    };

    // --- ACTIONS DEMANDES ---

    const handleApprove = async (demande: DemandeProf) => {
        // Optimistic Update
        const previousDemandes = [...demandes];
        setDemandes((prev) =>
            prev.map((d) => (d.id === demande.id ? { ...d, statut: 'approuve' } : d))
        );

        try {
            const result = await approveTeacher(demande);
            if (!result.success) throw new Error(result.error);

            toast({
                title: 'Professeur approuvé',
                description: `${demande.nom_complet} a été ajouté à la liste.`,
            });

            // Refresh real data to be sure (and get the new prof ID etc)
            await refreshProfs();
        } catch (error: any) {
            // Revert
            setDemandes(previousDemandes);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: error.message || "Impossible d'approuver la demande.",
            });
        }
    };

    const handleReject = async (demande: DemandeProf) => {
        // Optimistic Update
        const previousDemandes = [...demandes];
        setDemandes((prev) =>
            prev.map((d) => (d.id === demande.id ? { ...d, statut: 'refuse' } : d))
        );

        try {
            const { error } = await supabase
                .from('demandes_professeurs')
                .update({ statut: 'refuse' })
                .eq('id', demande.id);

            if (error) throw error;

            toast({
                title: 'Demande refusée',
                description: `La demande de ${demande.nom_complet} a été refusée.`,
            });
        } catch (error: any) {
            setDemandes(previousDemandes);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: error.message || 'Impossible de refuser la demande.',
            });
        }
    };

    // --- ACTIONS PROFS ---

    const handleToggleVerification = async (prof: Professeur) => {
        const previousProfs = [...profs];
        const newValue = !prof.verifie;

        setProfs((prev) =>
            prev.map((p) => (p.id === prof.id ? { ...p, verifie: newValue } : p))
        );

        try {
            const { error } = await supabase
                .from('professeurs')
                .update({ verifie: newValue })
                .eq('id', prof.id);

            if (error) throw error;

            toast({
                title: newValue ? 'Professeur vérifié' : 'Vérification retirée',
                description: `Le statut de ${prof.nom_complet} a été mis à jour.`,
            });
        } catch (error: any) {
            setProfs(previousProfs);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: "Impossible de modifier la vérification.",
            });
        }
    };

    const handleActivateSubscription = async (prof: Professeur) => {
        const previousProfs = [...profs];
        const now = new Date();
        const expire = new Date();
        expire.setDate(now.getDate() + 30);
        const expireStr = expire.toISOString().slice(0, 10);

        setProfs((prev) =>
            prev.map((p) =>
                p.id === prof.id
                    ? { ...p, abonnement_actif: true, abonnement_expire_le: expireStr }
                    : p
            )
        );

        try {
            const { error } = await supabase
                .from('professeurs')
                .update({
                    abonnement_actif: true,
                    abonnement_expire_le: expireStr,
                })
                .eq('id', prof.id);

            if (error) throw error;

            toast({
                title: 'Abonnement activé',
                description: `Abonnement de 30 jours activé pour ${prof.nom_complet}.`,
            });
        } catch (error: any) {
            setProfs(previousProfs);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: "Impossible d'activer l'abonnement.",
            });
        }
    };

    const handleDeactivateSubscription = async (prof: Professeur) => {
        const previousProfs = [...profs];

        setProfs((prev) =>
            prev.map((p) =>
                p.id === prof.id
                    ? { ...p, abonnement_actif: false, abonnement_expire_le: null }
                    : p
            )
        );

        try {
            const { error } = await supabase
                .from('professeurs')
                .update({
                    abonnement_actif: false,
                    abonnement_expire_le: null,
                })
                .eq('id', prof.id);

            if (error) throw error;

            toast({
                title: 'Abonnement désactivé',
                description: `L'abonnement de ${prof.nom_complet} a été arrêté.`,
            });
        } catch (error: any) {
            setProfs(previousProfs);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: "Impossible de désactiver l'abonnement.",
            });
        }
    };

    const handleRenewSubscription = async (prof: Professeur) => {
        const previousProfs = [...profs];
        const now = new Date();
        const expire = new Date();
        expire.setDate(now.getDate() + 30);
        const expireStr = expire.toISOString().slice(0, 10);

        setProfs((prev) =>
            prev.map((p) =>
                p.id === prof.id
                    ? { ...p, abonnement_actif: true, abonnement_expire_le: expireStr }
                    : p
            )
        );

        try {
            const { error } = await supabase
                .from('professeurs')
                .update({
                    abonnement_actif: true,
                    abonnement_expire_le: expireStr,
                })
                .eq('id', prof.id);

            if (error) throw error;

            toast({
                title: 'Abonnement renouvelé',
                description: `L'abonnement de ${prof.nom_complet} a été prolongé de 30 jours.`,
            });
        } catch (error: any) {
            setProfs(previousProfs);
            toast({
                variant: 'destructive',
                title: 'Erreur',
                description: "Impossible de renouveler l'abonnement.",
            });
        }
    };

    return {
        demandes,
        profs,
        handleApprove,
        handleReject,
        handleToggleVerification,
        handleActivateSubscription,
        handleDeactivateSubscription,
        handleRenewSubscription,
    };
}
