// src/app/admin/page.tsx
'use client';

import { useEffect, useState, useTransition, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// -------------------- TYPES --------------------

type DemandeProf = {
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
  cree_le: string;
  id_document_path: string | null;
  diplome_document_path: string | null;
  photo_profil_path: string | null;
};

type Professeur = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  commune: string;
  tarif_horaire: number;
  numero_whatsapp: string;
  biographie: string | null;
  photo_url: string | null;
  verifie: boolean;
  abonnement_actif: boolean;
  abonnement_expire_le: string | null;
};

// -------------------- COMPOSANT --------------------

export default function AdminPage() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser(); // même source de vérité que le login

  const [authChecked, setAuthChecked] = useState(false);
  const [loadingDemandes, setLoadingDemandes] = useState(false);
  const [loadingProfs, setLoadingProfs] = useState(false);
  const [demandes, setDemandes] = useState<DemandeProf[]>([]);
  const [profs, setProfs] = useState<Professeur[]>([]);
  const [isPending, startTransition] = useTransition();

  // -------------------- AUTH ADMIN --------------------

  useEffect(() => {
    // Tant qu'on ne sait pas, on attend
    if (user === undefined) return;

    if (!user) {
      router.replace('/admin/login');
      return;
    }

    setAuthChecked(true);
  }, [user, router]);

  // -------------------- HELPERS STORAGE --------------------

  const getTeacherDocumentUrl = (path: string | null): string | null => {
    if (!path) return null;
    const { data } = supabase.storage
      .from('teacher-documents')
      .getPublicUrl(path);
    return data?.publicUrl ?? null;
  };

  const getTeacherPhotoUrl = (path: string | null): string | null => {
    if (!path) return null;
    const { data } = supabase.storage
      .from('teacher-photos')
      .getPublicUrl(path);
    return data?.publicUrl ?? null;
  };

  // -------------------- CHARGEMENT DONNÉES --------------------

  useEffect(() => {
    if (!authChecked) return;

    async function fetchDemandes() {
      setLoadingDemandes(true);
      const { data, error } = await supabase
        .from('demandes_professeurs')
        .select('*')
        .order('cree_le', { ascending: false });

      if (!error && data) {
        setDemandes(data as DemandeProf[]);
      } else if (error) {
        console.error('Erreur chargement demandes:', error.message);
      }
      setLoadingDemandes(false);
    }

    async function fetchProfs() {
      setLoadingProfs(true);
      const { data, error } = await supabase
        .from('professeurs')
        .select('*')
        .order('cree_le', { ascending: false });

      if (!error && data) {
        setProfs(data as Professeur[]);
      } else if (error) {
        console.error('Erreur chargement professeurs:', error.message);
      }
      setLoadingProfs(false);
    }

    fetchDemandes();
    fetchProfs();
  }, [authChecked, supabase]);

  // -------------------- ACTIONS DEMANDES --------------------

  async function approveDemande(demande: DemandeProf) {
    const photoUrl = getTeacherPhotoUrl(demande.photo_profil_path);

    const { error: insertError } = await supabase
      .from('professeurs')
      .insert([
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
        },
      ]);

    if (insertError) {
      console.error('Erreur insertion professeur:', insertError.message);
      return;
    }

    const { error: updateError } = await supabase
      .from('demandes_professeurs')
      .update({ statut: 'approuve' })
      .eq('id', demande.id);

    if (!updateError) {
      setDemandes(prev =>
        prev.map(d =>
          d.id === demande.id ? { ...d, statut: 'approuve' } : d,
        ),
      );
    }

    const { data: profsData, error: profsError } = await supabase
      .from('professeurs')
      .select('*')
      .order('cree_le', { ascending: false });

    if (!profsError && profsData) {
      setProfs(profsData as Professeur[]);
    }
  }

  function handleApprove(demande: DemandeProf) {
    startTransition(() => {
      void approveDemande(demande);
    });
  }

  async function handleReject(demande: DemandeProf) {
    const { error } = await supabase
      .from('demandes_professeurs')
      .update({ statut: 'refuse' })
      .eq('id', demande.id);

    if (!error) {
      setDemandes(prev =>
        prev.map(d =>
          d.id === demande.id ? { ...d, statut: 'refuse' } : d,
        ),
      );
    }
  }

  // -------------------- ACTIONS PROFS --------------------

  async function handleToggleVerification(prof: Professeur) {
    const { error } = await supabase
      .from('professeurs')
      .update({ verifie: !prof.verifie })
      .eq('id', prof.id);

    if (!error) {
      setProfs(prev =>
        prev.map(p =>
          p.id === prof.id ? { ...p, verifie: !p.verifie } : p,
        ),
      );
    }
  }

  async function handleActivateSubscription(prof: Professeur) {
    const now = new Date();
    const expire = new Date();
    expire.setDate(now.getDate() + 30);

    const { error } = await supabase
      .from('professeurs')
      .update({
        abonnement_actif: true,
        abonnement_expire_le: expire.toISOString().slice(0, 10),
      })
      .eq('id', prof.id);

    if (!error) {
      setProfs(prev =>
        prev.map(p =>
          p.id === prof.id
            ? {
              ...p,
              abonnement_actif: true,
              abonnement_expire_le: expire.toISOString().slice(0, 10),
            }
            : p,
        ),
      );
    }
  }

  async function handleDeactivateSubscription(prof: Professeur) {
    const { error } = await supabase
      .from('professeurs')
      .update({
        abonnement_actif: false,
        abonnement_expire_le: null,
      })
      .eq('id', prof.id);

    if (!error) {
      setProfs(prev =>
        prev.map(p =>
          p.id === prof.id
            ? {
              ...p,
              abonnement_actif: false,
              abonnement_expire_le: null,
            }
            : p,
        ),
      );
    }
  }

  async function handleRenewSubscription(prof: Professeur) {
    const now = new Date();
    const expire = new Date();
    expire.setDate(now.getDate() + 30);

    const { error } = await supabase
      .from('professeurs')
      .update({
        abonnement_actif: true,
        abonnement_expire_le: expire.toISOString().slice(0, 10),
      })
      .eq('id', prof.id);

    if (!error) {
      setProfs(prev =>
        prev.map(p =>
          p.id === prof.id
            ? {
              ...p,
              abonnement_actif: true,
              abonnement_expire_le: expire.toISOString().slice(0, 10),
            }
            : p,
        ),
      );
    }
  }

  // -------------------- STATS / EXPIRATIONS --------------------

  const getDaysUntil = (dateStr: string | null): number | null => {
    if (!dateStr) return null;
    const today = new Date();
    const target = new Date(dateStr);

    const t0 = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    ).getTime();
    const t1 = new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
    ).getTime();

    const diffMs = t1 - t0;
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  };

  const {
    totalProfs,
    totalDemandes,
    demandesEnAttente,
    demandesApprouvees,
    demandesRefusees,
    abonnesActifs,
    abonnesExpirantBientot,
  } = useMemo(() => {
    const totalProfsLocal = profs.length;
    const totalDemandesLocal = demandes.length;

    const demandesEnAttenteLocal = demandes.filter(
      d => d.statut === 'en_attente',
    ).length;
    const demandesApprouveesLocal = demandes.filter(
      d => d.statut === 'approuve',
    ).length;
    const demandesRefuseesLocal = demandes.filter(
      d => d.statut === 'refuse',
    ).length;

    const abonnesActifsLocal = profs.filter(p => p.abonnement_actif).length;

    const abonnesExpirantBientotLocal = profs.filter(p => {
      if (!p.abonnement_actif || !p.abonnement_expire_le) return false;
      const days = getDaysUntil(p.abonnement_expire_le);
      return days !== null && days >= 0 && days <= 3;
    }).length;

    return {
      totalProfs: totalProfsLocal,
      totalDemandes: totalDemandesLocal,
      demandesEnAttente: demandesEnAttenteLocal,
      demandesApprouvees: demandesApprouveesLocal,
      demandesRefusees: demandesRefuseesLocal,
      abonnesActifs: abonnesActifsLocal,
      abonnesExpirantBientot: abonnesExpirantBientotLocal,
    };
  }, [profs, demandes]);

  // -------------------- RENDU --------------------

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Vérification de l&apos;accès…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 space-y-10">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-headline font-semibold">
            Administration Kademya – Professeurs
          </h1>
          <Button
            variant="outline"
            onClick={async () => {
              await supabase.auth.signOut();
              router.replace('/admin/login');
            }}
          >
            Se déconnecter
          </Button>
        </div>

        {/* STATS */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Vue d&apos;ensemble</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Professeurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalProfs}</div>
                <p className="text-xs text-muted-foreground">
                  Nombre total de professeurs enregistrés
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Abonnés actifs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{abonnesActifs}</div>
                <p className="text-xs text-muted-foreground">
                  Professeurs actuellement visibles sur Kademya
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Demandes en attente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{demandesEnAttente}</div>
                <p className="text-xs text-muted-foreground">
                  En attente de validation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Abonnements (J-3)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {abonnesExpirantBientot}
                </div>
                <p className="text-xs text-muted-foreground">
                  Professeurs dont l&apos;abonnement expire dans ≤ 3 jours
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* DEMANDES */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Demandes de professeurs
          </h2>

          {loadingDemandes ? (
            <p className="text-muted-foreground">Chargement…</p>
          ) : demandes.length === 0 ? (
            <p className="text-muted-foreground">Aucune demande.</p>
          ) : (
            <div className="space-y-4">
              {demandes.map(demande => {
                const idDocUrl = getTeacherDocumentUrl(
                  demande.id_document_path,
                );
                const diplomeUrl = getTeacherDocumentUrl(
                  demande.diplome_document_path,
                );
                const photoUrl = getTeacherPhotoUrl(demande.photo_profil_path);

                return (
                  <Card key={demande.id}>
                    <CardHeader className="flex flex-row justify-between items-center gap-4">
                      <div>
                        <CardTitle>
                          {demande.nom_complet}{' '}
                          <span className="text-sm text-muted-foreground">
                            — {demande.matiere} ({demande.niveau})
                          </span>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {demande.commune} • WhatsApp :{' '}
                          {demande.numero_whatsapp}
                          {demande.email && ` • Email : ${demande.email}`}
                        </p>
                      </div>

                      <Badge
                        variant="outline"
                        className={
                          demande.statut === 'approuve'
                            ? 'border-green-500 text-green-500'
                            : demande.statut === 'refuse'
                              ? 'border-red-500 text-red-500'
                              : 'border-amber-500 text-amber-500'
                        }
                      >
                        {demande.statut === 'en_attente' && 'En attente'}
                        {demande.statut === 'approuve' && 'Approuvé'}
                        {demande.statut === 'refuse' && 'Refusé'}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {demande.biographie && (
                        <p className="text-sm text-muted-foreground">
                          {demande.biographie}
                        </p>
                      )}

                      {/* Documents fournis */}
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p className="font-semibold text-foreground">
                          Documents fournis :
                        </p>
                        <p>
                          Pièce d&apos;identité :{' '}
                          {idDocUrl ? (
                            <a
                              href={idDocUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-700 underline"
                            >
                              Voir le document
                            </a>
                          ) : (
                            <span className="text-red-500">non fournie</span>
                          )}
                        </p>
                        <p>
                          Diplôme / attestation :{' '}
                          {diplomeUrl ? (
                            <a
                              href={diplomeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-700 underline"
                            >
                              Voir le document
                            </a>
                          ) : (
                            <span className="text-red-500">non fourni</span>
                          )}
                        </p>
                        <p>
                          Photo de profil :{' '}
                          {photoUrl ? (
                            <a
                              href={photoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-700 underline"
                            >
                              Voir la photo
                            </a>
                          ) : (
                            <span className="text-muted-foreground">
                              non fournie
                            </span>
                          )}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="sm"
                          disabled={
                            demande.statut !== 'en_attente' || isPending
                          }
                          onClick={() => handleApprove(demande)}
                        >
                          {isPending ? 'Publication…' : 'Valider & publier'}
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          disabled={demande.statut !== 'en_attente'}
                          onClick={() => handleReject(demande)}
                        >
                          Refuser
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>

        {/* PROFESSEURS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Professeurs enregistrés</h2>

          {loadingProfs ? (
            <p className="text-muted-foreground">Chargement…</p>
          ) : profs.length === 0 ? (
            <p className="text-muted-foreground">Aucun professeur.</p>
          ) : (
            <div className="space-y-4">
              {profs.map(prof => {
                const daysUntilExpire = getDaysUntil(
                  prof.abonnement_expire_le,
                );
                const expiringSoon =
                  prof.abonnement_actif &&
                  daysUntilExpire !== null &&
                  daysUntilExpire >= 0 &&
                  daysUntilExpire <= 3;

                return (
                  <Card
                    key={prof.id}
                    className={expiringSoon ? 'border-amber-400' : undefined}
                  >
                    <CardHeader className="flex flex-row justify-between items-center gap-4">
                      <div>
                        <CardTitle>
                          {prof.nom_complet}{' '}
                          <span className="text-sm text-muted-foreground">
                            — {prof.matiere} ({prof.niveau})
                          </span>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Commune : {prof.commune} • WhatsApp :{' '}
                          {prof.numero_whatsapp}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Badge
                            className={
                              prof.verifie
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }
                          >
                            {prof.verifie ? 'Vérifié' : 'Non vérifié'}
                          </Badge>

                          {prof.abonnement_actif &&
                            prof.abonnement_expire_le ? (
                            <Badge
                              className={
                                expiringSoon
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-emerald-600 text-white'
                              }
                            >
                              {expiringSoon
                                ? 'Expire bientôt • '
                                : 'Abonné jusqu’au '}

                              {new Date(
                                prof.abonnement_expire_le,
                              ).toLocaleDateString('fr-FR')}
                            </Badge>
                          ) : (
                            <Badge variant="outline">
                              Pas d&apos;abonnement
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {prof.biographie && (
                        <p className="text-sm text-muted-foreground">
                          {prof.biographie}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="sm"
                          onClick={() => handleToggleVerification(prof)}
                        >
                          {prof.verifie
                            ? 'Retirer vérification'
                            : 'Vérifier'}
                        </Button>

                        {!prof.abonnement_actif ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleActivateSubscription(prof)}
                          >
                            Activer abonnement 30 jours (10 000 FCFA)
                          </Button>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRenewSubscription(prof)}
                            >
                              Renouveler 30 jours
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                handleDeactivateSubscription(prof)
                              }
                            >
                              Désactiver abonnement
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
