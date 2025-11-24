'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import {
  Loader2,
  Save,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';

interface TeacherProfile {
  id: string;
  nom_complet: string;
  biographie: string | null;
  tarif_horaire: number | null;
  commune: string | null;
  numero_whatsapp: string | null;
  matiere: string | null;
  niveau: string | null;
  verifie: boolean;
  photo_url: string | null;
  statut_validation: string;
}

export default function TeacherProfilePage() {
  const supabase = useSupabaseClient();
  const user = useUser();

  const [profile, setProfile] = useState<TeacherProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('professeurs')
        .select(
          'id, nom_complet, biographie, tarif_horaire, commune, numero_whatsapp, matiere, niveau, verifie, photo_url, statut_validation',
        )
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') throw error;

      setProfile((data ?? null) as TeacherProfile | null);
    } catch (err) {
      console.error('Erreur de récupération du profil:', err);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !profile) return;

    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('professeurs')
        .update({
          nom_complet: profile.nom_complet,
          biographie: profile.biographie,
          tarif_horaire: profile.tarif_horaire,
          commune: profile.commune,
          numero_whatsapp: profile.numero_whatsapp,
          matiere: profile.matiere,
          niveau: profile.niveau,
          photo_url: profile.photo_url,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      alert('Profil mis à jour avec succès.');
      fetchProfile();
    } catch (err) {
      console.error('Erreur de mise à jour du profil:', err);
      alert('Erreur lors de la sauvegarde du profil.');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-2" />
        Chargement de votre profil...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600">
          Vous devez être connecté pour accéder à cette page.
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <DashboardLayout activePath="/teachers/dashboard/profil">
        <div className="p-8">
          <p className="text-gray-700">
            Aucun profil professeur n’est encore associé à ce compte.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activePath="/teachers/dashboard/profil">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Mon profil public
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        <section className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            1. Informations publiques
          </h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium">
                Nom complet (public)
              </span>
              <input
                type="text"
                value={profile.nom_complet || ''}
                onChange={(e) =>
                  setProfile((p) =>
                    p ? { ...p, nom_complet: e.target.value } : p,
                  )
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700 font-medium">Matière</span>
                <input
                  type="text"
                  value={profile.matiere || ''}
                  onChange={(e) =>
                    setProfile((p) =>
                      p ? { ...p, matiere: e.target.value } : p,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">Niveau</span>
                <input
                  type="text"
                  value={profile.niveau || ''}
                  onChange={(e) =>
                    setProfile((p) =>
                      p ? { ...p, niveau: e.target.value } : p,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-700 font-medium">Biographie</span>
              <textarea
                value={profile.biographie || ''}
                onChange={(e) =>
                  setProfile((p) =>
                    p ? { ...p, biographie: e.target.value } : p,
                  )
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <label className="block">
                <span className="text-gray-700 font-medium">
                  Tarif horaire (FCFA)
                </span>
                <input
                  type="number"
                  value={profile.tarif_horaire ?? ''}
                  onChange={(e) =>
                    setProfile((p) =>
                      p
                        ? {
                            ...p,
                            tarif_horaire:
                              e.target.value === ''
                                ? null
                                : parseInt(e.target.value, 10),
                          }
                        : p,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">
                  Commune principale
                </span>
                <input
                  type="text"
                  value={profile.commune || ''}
                  onChange={(e) =>
                    setProfile((p) =>
                      p ? { ...p, commune: e.target.value } : p,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 font-medium">
                  Numéro WhatsApp
                </span>
                <input
                  type="text"
                  value={profile.numero_whatsapp || ''}
                  onChange={(e) =>
                    setProfile((p) =>
                      p ? { ...p, numero_whatsapp: e.target.value } : p,
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              </label>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t flex items-center space-x-3">
            {profile.verifie ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            )}
            <p className="text-sm">
              Statut de vérification :{' '}
              {profile.verifie ? (
                <span className="text-green-600 font-medium">VÉRIFIÉ ✅</span>
              ) : (
                <span className="text-yellow-600 font-medium">
                  EN ATTENTE 🕒
                </span>
              )}
              {' — Dossier : '}
              <span className="font-mono text-xs">
                {profile.statut_validation}
              </span>
            </p>
          </div>

          <div className="mt-6 pt-4 border-t flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className={`flex items-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                isSaving
                  ? 'bg-indigo-400 cursor-not-allowed text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSaving ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <Save className="w-5 h-5 mr-2" />
              )}
              {isSaving ? 'Sauvegarde...' : 'Enregistrer le profil'}
            </button>
          </div>
        </section>
      </form>
    </DashboardLayout>
  );
}
