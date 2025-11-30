// components/ReviewSubmissionForm.tsx

'use client';

import React, { useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { Star, Loader2, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewSubmissionFormProps {
  teacherId: string; // L'ID du professeur que l'on est en train d'évaluer
}

// Composant pour la notation par étoiles
const StarRating: React.FC<{ rating: number, setRating: (r: number) => void }> = ({ rating, setRating }) => (
  <div className="flex space-x-1 mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        onClick={() => setRating(star)}
        className={`w-8 h-8 cursor-pointer transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
      />
    ))}
  </div>
);

// Composant principal du formulaire
export default function ReviewSubmissionForm({ teacherId }: ReviewSubmissionFormProps) {
  const supabase = useSupabaseClient();

  const [parentName, setParentName] = useState('');
  const [contact, setContact] = useState(''); // Utilisé pour le numéro WhatsApp ou Email
  const [note, setNote] = useState(0);
  const [commentaire, setCommentaire] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('idle');
    if (note === 0 || !parentName || !contact || !commentaire) {
      alert("Veuillez remplir la note, votre nom, votre contact et laisser un commentaire.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('avis') // NOM DE VOTRE NOUVELLE TABLE D'AVIS
        .insert({
          professeur_id: teacherId,
          parent_nom: parentName,
          parent_contact: contact, // Le contact pour la vérification
          note: note,
          commentaire: commentaire,
          est_modere: false, // CLÉ DE LA MODÉRATION MANUELLE
        });

      if (error) throw error;

      setSubmissionStatus('success');
      // Réinitialiser le formulaire
      setParentName('');
      setContact('');
      setNote(0);
      setCommentaire('');

    } catch (error) {
      console.error("Erreur de soumission d'avis:", error);
      // components/ReviewSubmissionForm.tsx

      'use client';

      import React, { useState } from 'react';
      import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
      import { Star, Loader2, CheckCircle, Send } from 'lucide-react';
      import { Button } from '@/components/ui/button';

      interface ReviewSubmissionFormProps {
        teacherId: string; // L'ID du professeur que l'on est en train d'évaluer
      }

      // Composant pour la notation par étoiles
      const StarRating: React.FC<{ rating: number, setRating: (r: number) => void }> = ({ rating, setRating }) => (
        <div className="flex space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              onClick={() => setRating(star)}
              className={`w-8 h-8 cursor-pointer transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
            />
          ))}
        </div>
      );

      // Composant principal du formulaire
      export default function ReviewSubmissionForm({ teacherId }: ReviewSubmissionFormProps) {
        const supabase = useSupabaseClient();

        const [parentName, setParentName] = useState('');
        const [contact, setContact] = useState(''); // Utilisé pour le numéro WhatsApp ou Email
        const [note, setNote] = useState(0);
        const [commentaire, setCommentaire] = useState('');

        const [isSubmitting, setIsSubmitting] = useState(false);
        const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');


        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setSubmissionStatus('idle');
          if (note === 0 || !parentName || !contact || !commentaire) {
            alert("Veuillez remplir la note, votre nom, votre contact et laisser un commentaire.");
            return;
          }

          setIsSubmitting(true);

          try {
            const { data, error } = await supabase
              .from('avis') // NOM DE VOTRE NOUVELLE TABLE D'AVIS
              .insert({
                professeur_id: teacherId,
                parent_nom: parentName,
                parent_contact: contact, // Le contact pour la vérification
                note: note,
                commentaire: commentaire,
                est_modere: false, // CLÉ DE LA MODÉRATION MANUELLE
              });

            if (error) throw error;

            setSubmissionStatus('success');
            // Réinitialiser le formulaire
            setParentName('');
            setContact('');
            setNote(0);
            setCommentaire('');

          } catch (error) {
            console.error("Erreur de soumission d'avis:", error);
            setSubmissionStatus('error');
          } finally {
            setIsSubmitting(false);
          }
        };

        if (submissionStatus === 'success') {
          return (
            <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-lg shadow-md mt-6">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Avis Reçu !</h3>
              </div>
              <p className="mt-2">
                Merci pour votre retour. Votre avis a été soumis et sera visible sur le profil après une brève vérification manuelle par l'équipe Kademya.
              </p>
              <button
                onClick={() => setSubmissionStatus('idle')}
                className="mt-4 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
              >
                Soumettre un autre avis
              </button>
            </div>
          );
        }

        return (
          <div className="p-6 bg-white rounded-lg shadow-xl mt-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Laisser un Avis Vérifié</h3>
            <p className="text-sm text-gray-600 mb-6">
              Votre avis sera publié après une vérification rapide de votre identité par notre équipe, afin de garantir l'authenticité des retours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Notation par Étoiles */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Votre note (Obligatoire)</label>
                <StarRating rating={note} setRating={setNote} />
              </div>

              {/* Nom du Parent */}
              <div>
                <label htmlFor="parentName" className="block text-gray-700 font-medium">Votre Nom (Public)</label>
                <input
                  id="parentName"
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                  placeholder="Ex: M. KOUASSI"
                  required
                />
              </div>

              {/* Contact (pour la vérification) */}
              <div>
                <label htmlFor="contact" className="block text-gray-700 font-medium">Votre contact (WhatsApp/Email) - NON PUBLIC</label>
                <input
                  id="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                  placeholder="Ex: 07 00 00 00 00"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Utilisé uniquement par Kademya pour vérifier que vous avez bien eu cours.</p>
              </div>

              {/* Commentaire */}
              <div>
                <label htmlFor="commentaire" className="block text-gray-700 font-medium">Votre Commentaire</label>
                <textarea
                  id="commentaire"
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"
                  placeholder="Décrivez votre expérience avec le professeur..."
                  required
                />
              </div>

              {/* Bouton de Soumission */}
              <Button
                type="submit"
                disabled={isSubmitting || note === 0}
                className={`w-full h-12 text-base font-semibold ${isSubmitting || note === 0
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Soumettre l'Avis
                  </>
                )}
              </Button>

              {submissionStatus === 'error' && (
                <p className="text-red-500 mt-2 text-center">Une erreur s'est produite lors de l'envoi. Veuillez réessayer.</p>
              )}
            </form>
          </div>
        );
      }