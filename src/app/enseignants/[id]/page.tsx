import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Verified, Star, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ajouterAvisAction } from './actions';

// ... Tes types restent les mêmes ...
type ProfesseurRow = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  tarif_horaire: number;
  commune: string;
  biographie: string | null;
  photo_url: string | null;
  numero_whatsapp: string;
  verifie: boolean;
  cree_le: string;
  abonnement_actif: boolean;
  avis_moyenne?: number | null;
  avis_nombre?: number | null;
};

type AvisRow = {
  id: string;
  id_professeur: string;
  nom_parent: string;
  note: number;
  commentaire: string | null;
  cree_le: string;
};

type PageProps = {
  params: { id: string };
};

const PLACEHOLDER_PHOTO = '/images/teachers/placeholder-teacher.jpg';

export default async function TeacherProfilePage({ params }: PageProps) {
  const { id } = await params;

  // Récupération des données (identique à ton code)
  const { data: prof, error } = await supabase
    .from('professeurs')
    .select('*')
    .eq('id', id)
    .maybeSingle<ProfesseurRow>();

  if (error || !prof || !prof.abonnement_actif) notFound();

  const { data: avisData } = await supabase
    .from('avis_professeurs')
    .select('*')
    .eq('id_professeur', id)
    .eq('est_modere', true)
    .order('cree_le', { ascending: false })
    .limit(10);

  const avis = (avisData ?? []) as AvisRow[];
  const photoUrl = prof.photo_url || PLACEHOLDER_PHOTO;
  const whatsappLink = `https://wa.me/${prof.numero_whatsapp}`;
  const formattedPrice = prof.tarif_horaire.toLocaleString('fr-FR');
  const reviewsCount = prof.avis_nombre || 0;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 md:pb-10">

      {/* 1. NAVBAR DE RETOUR (Simple et propre) */}
      <div className="bg-white border-b sticky top-0 z-30 md:relative md:z-0">
        <div className="container max-w-6xl py-4">
          <Link
            href="/enseignants"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#1A3626] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux professeurs
          </Link>
        </div>
      </div>

      <div className="container max-w-6xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8 items-start">

          {/* --- COLONNE GAUCHE (SIDEBAR STICKY) --- 
              Contient: Photo, Prix, CTA. Reste visible au scroll sur Desktop.
          */}
          <aside className="md:sticky md:top-24 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Image en format 4/5 ou carré, bien intégrée */}
              <div className="relative w-full aspect-[4/5] bg-gray-100">
                <Image
                  src={photoUrl}
                  alt={prof.nom_complet}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                />
              </div>

              <div className="p-6 space-y-6">
                {/* Prix et CTA */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Tarif horaire</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#1A3626]">{formattedPrice}</span>
                    <span className="text-lg text-gray-600 font-medium">FCFA</span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base shadow-md h-12"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> Contacter sur WhatsApp
                  </a>
                </Button>

                {/* Réassurance */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Verified className="w-4 h-4 mr-3 text-[#1A3626]" />
                    <span>Identité vérifiée</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-[#1A3626]" />
                    <span>Réponse rapide (moins de 2h)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ShieldCheck className="w-4 h-4 mr-3 text-[#1A3626]" />
                    <span>Paiement direct au professeur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Infos rapides Mobile Only (caché sur desktop car déjà en haut) */}
            <div className="md:hidden bg-white p-4 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                Secteur : <span className="font-semibold text-gray-900">{prof.commune}</span>
              </div>
            </div>
          </aside>


          {/* --- COLONNE DROITE (CONTENU PRINCIPAL) --- 
              Contient: Header Nom, Bio, Avis, Formulaire
          */}
          <main className="space-y-8">

            {/* HEADER PROFIL */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className="bg-[#1A3626]/10 text-[#1A3626] hover:bg-[#1A3626]/20 px-3 py-1 text-sm border-0">
                  {prof.matiere}
                </Badge>
                <Badge variant="outline" className="text-gray-600 border-gray-300 px-3 py-1 text-sm">
                  {prof.niveau}
                </Badge>
                {prof.verifie && (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 gap-1 pl-1">
                    <Verified className="w-3.5 h-3.5" /> Certifié
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1A3626] mb-2">
                {prof.nom_complet}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{prof.avis_moyenne ? prof.avis_moyenne.toFixed(1) : "Nouveau"}</span>
                  <span className="text-gray-400 font-normal ml-1">({reviewsCount} avis)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {prof.commune}
                </div>
              </div>

              <div className="prose prose-stone max-w-none text-gray-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">À propos du cours</h3>
                <p className="whitespace-pre-wrap">
                  {prof.biographie || "Le professeur n'a pas encore ajouté de description détaillée."}
                </p>
              </div>
            </div>

            {/* SECTION AVIS (Liste) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A3626] mb-6 flex items-center gap-2">
                Avis des parents
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-normal">{reviewsCount}</span>
              </h2>

              <div className="space-y-6">
                {avis.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Aucun avis pour le moment.</p>
                  </div>
                ) : (
                  avis.map((a) => (
                    <div key={a.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-gray-900">{a.nom_parent}</span>
                        <div className="flex text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < a.note ? 'fill-current' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm italic">"{a.commentaire}"</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(a.cree_le).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* SECTION FORMULAIRE (Design plus léger) */}
            <div className="bg-[#1A3626]/5 p-6 md:p-8 rounded-2xl border border-[#1A3626]/10">
              <h3 className="text-lg font-bold text-[#1A3626] mb-2">Vous avez pris un cours ?</h3>
              <p className="text-sm text-gray-600 mb-6">Partagez votre expérience pour aider les autres parents.</p>

              <form action={ajouterAvisAction} className="grid gap-4">
                <input type="hidden" name="id_professeur" value={prof.id} />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Votre Nom</label>
                    <input name="nom_parent" required className="w-full rounded-lg border-gray-300 text-sm p-2.5 focus:ring-[#1A3626] focus:border-[#1A3626]" placeholder="Ex: M. Kouassi" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Contact (Privé)</label>
                    <input name="parent_contact" required className="w-full rounded-lg border-gray-300 text-sm p-2.5 focus:ring-[#1A3626] focus:border-[#1A3626]" placeholder="Tél pour vérification" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Note</label>
                  <select name="note" className="w-full rounded-lg border-gray-300 text-sm p-2.5 focus:ring-[#1A3626]">
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Très bien</option>
                    <option value="3">⭐⭐⭐ Bien</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Commentaire</label>
                  <textarea name="commentaire" rows={3} className="w-full rounded-lg border-gray-300 text-sm p-2.5 focus:ring-[#1A3626]" placeholder="Comment s'est passé le cours ?" />
                </div>

                <Button type="submit" className="w-full bg-[#1A3626] hover:bg-[#1A3626]/90 text-white">
                  Envoyer mon avis
                </Button>
              </form>
            </div>

          </main>
        </div>
      </div>

      {/* BOUTON MOBILE STICKY (Apparaît seulement sur mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#1A3626]">{formattedPrice} FCFA</span>
          <span className="text-xs text-gray-500">/ heure</span>
        </div>
        <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-6">
          <a href={whatsappLink}>WhatsApp</a>
        </Button>
      </div>

    </div>
  );
}