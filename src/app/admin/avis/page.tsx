// app/admin/avis/page.tsx

'use client'; 

import React, { useState, useEffect, useCallback } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; 
import { Loader2, Check, X, AlertTriangle, Users } from 'lucide-react';

// --- Types de données pour les Avis en attente ---
interface PendingReview {
  id: string;
  // Correction de la clé étrangère
  id_professeur: string;
  // Correction du nom de la colonne du parent
  nom_parent: string;
  // Colonne à ajouter en DB
  parent_contact: string; 
  note: number;
  commentaire: string;
  // Correction du nom de la colonne de la date
  cree_le: string; 
  professeurs: {
    nom_complet: string;
    avis_moyenne: number; 
    avis_nombre: number; 
  };
}

const REVIEW_TABLE = 'avis_professeurs';


// --- Composant Principal de la Page d'Admin ---
export default function AdminReviewsPage() {
  const supabase = createClientComponentClient();
  
  const [pendingReviews, setPendingReviews] = useState<PendingReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  // 1. Récupération des Avis en Attente
  const fetchPendingReviews = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from(REVIEW_TABLE) 
        // REQUÊTE NETTOYÉE et ALIGNÉE sur le schéma de la DB
        .select(`
          id, 
          id_professeur, 
          nom_parent, 
          parent_contact, 
          note, 
          commentaire, 
          cree_le,
          professeurs (nom_complet, avis_moyenne, avis_nombre) 
        `)
        .eq('est_modere', false) 
        .order('cree_le', { ascending: true }); 

      if (error) throw error;
      
      setPendingReviews(data as PendingReview[]);
    } catch (error: any) {
      console.error("Erreur de récupération des avis en attente:", error.message); 
      alert(`Erreur: Impossible de charger les avis en attente. Détails: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchPendingReviews();
  }, [fetchPendingReviews]);


  // 2. Fonction de Traitement (Approuver / Rejeter)
  const handleReviewAction = async (reviewId: string, action: 'approve' | 'reject') => {
    setIsProcessing(reviewId);

    try {
      if (action === 'approve') {
        const { error } = await supabase
          .from(REVIEW_TABLE)
          .update({ est_modere: true })
          .eq('id', reviewId);
          
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from(REVIEW_TABLE)
          .delete()
          .eq('id', reviewId);
          
        if (error) throw error;
      }

      fetchPendingReviews();
      alert(`Avis ${action === 'approve' ? 'approuvé' : 'rejeté'} avec succès!`);

    } catch (error: any) {
      console.error(`Erreur lors du traitement de l'avis:`, error.message);
      alert(`Erreur: Le traitement de l'avis a échoué. Détails: ${error.message}`);
    } finally {
      setIsProcessing(null);
    }
  };


  // --- Rendu ---
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-red-600 mr-2" />
        Chargement du Tableau de Bord Admin...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Panneau de Modération des Avis
      </h1>
      <p className="text-xl text-red-600 font-semibold mb-8 flex items-center">
        <AlertTriangle className="w-6 h-6 mr-2" /> 
        {pendingReviews.length} Avis En Attente de Vérification Manuelle
      </p>

      {pendingReviews.length === 0 ? (
        <div className="p-10 bg-white rounded-lg shadow-md text-center text-gray-500">
          <Check className="w-10 h-10 mx-auto text-green-500 mb-3" />
          <p className="text-lg font-medium">Aucun avis en attente. Tout est sous contrôle !</p>
        </div>
      ) : (
        <div className="space-y-6">
          {pendingReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              
              <div className="flex justify-between items-start mb-4 border-b pb-3">
                {/* Info Professeur */}
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <Users className="w-4 h-4 mr-1" /> Professeur
                  </p>
                  <h2 className="text-xl font-bold text-gray-800">
                    {review.professeurs.nom_complet} 
                    <span className="text-sm font-normal ml-2 text-gray-500">(Note actuelle: {review.professeurs.avis_moyenne?.toFixed(1) || 'N/A'})</span>
                  </h2>
                </div>
                
                {/* Note et Date */}
                <div className="text-right">
                  <p className="text-4xl font-extrabold text-yellow-500">{review.note} <span className="text-xl">/ 5</span></p>
                  <p className="text-xs text-gray-400">Soumis le: {new Date(review.cree_le).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Détails de l'Avis */}
              <div className="mb-4">
                <p className="font-semibold text-gray-700">Commentaire :</p>
                <p className="italic text-gray-600 p-3 bg-gray-50 rounded-md mt-1">
                  "{review.commentaire}"
                </p>
              </div>

              {/* Coordonnées de Vérification */}
              <div className="bg-red-50 p-4 rounded-md mb-6 border border-red-200">
                <p className="font-semibold text-red-800 mb-2">À VÉRIFIER (NON PUBLIC) :</p>
                <p className="text-sm text-red-700">Nom Parent : <span className="font-bold">{review.nom_parent}</span></p>
                <p className="text-sm text-red-700">Contact : <span className="font-bold">{review.parent_contact}</span></p>
                <p className="text-xs mt-2 italic text-red-600">Action: Contactez ce parent/professeur pour confirmer la session de cours.</p>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleReviewAction(review.id, 'approve')}
                  disabled={isProcessing === review.id}
                  className={`flex-1 flex items-center justify-center py-3 rounded-lg font-semibold transition-colors ${
                    isProcessing === review.id
                      ? 'bg-green-300 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isProcessing === review.id ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Check className="w-5 h-5 mr-2" />}
                  Approuver & Publier
                </button>
                <button
                  onClick={() => handleReviewAction(review.id, 'reject')}
                  disabled={isProcessing === review.id}
                  className={`flex-1 flex items-center justify-center py-3 rounded-lg font-semibold transition-colors ${
                    isProcessing === review.id
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isProcessing === review.id ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <X className="w-5 h-5 mr-2" />}
                  Rejeter & Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}