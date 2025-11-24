import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Phone, Verified, Star, MessageSquare } from 'lucide-react'; 
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ajouterAvisAction } from './actions';
// NOTE: Vous aurez besoin d'importer les composants de formulaire (Input, Textarea, Select)
// si vous utilisez un framework de composants UI comme Shadcn/ui.
// Pour cet exemple, je garde les balises HTML standard pour l'accessibilité
// dans un environnement Server Component (Next.js App Router).


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
  parent_contact: string;
  note: number;
  commentaire: string | null;
  est_modere: boolean;
  cree_le: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

// Fonction utilitaire pour le rendu des étoiles
const renderStars = (rating: number) => {
    // Note: Utiliser Math.floor pour les étoiles pleines
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <>
            {/* Étoiles pleines */}
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={`full-${i}`} className="w-4 h-4 inline-block text-yellow-500 fill-yellow-500" />
            ))}
            {/* Étoile moitié (si nécessaire) - NOTE: Lucide n'a pas d'icône demi-étoile simple */}
            {/* Pour la simplicité, on utilise toujours l'arrondi */}
            {/* {hasHalfStar && <StarHalf key="half" className="w-4 h-4 inline-block text-yellow-500 fill-yellow-500" />} */}
            
            {/* Étoiles vides */}
            {Array.from({ length: emptyStars }).map((_, i) => (
                <Star key={`empty-${i}`} className="w-4 h-4 inline-block text-gray-300 fill-gray-100 dark:fill-gray-800" />
            ))}
        </>
    );
};


export default async function TeacherProfilePage({ params }: PageProps) {
  const { id } = params;

  // 1. Récupération du professeur
  const { data, error } = await supabase
    .from('professeurs')
    .select('*')
    .eq('id', id)
    .maybeSingle<ProfesseurRow>();

  if (error) {
    console.error('Erreur Supabase (professeur) :', error.message);
    notFound();
  }

  if (!data || !data.abonnement_actif) {
    notFound(); 
  }

  const prof = data;

  // 2. Récupération des avis MODÉRÉS et PUBLIÉS
  const { data: avisData, error: avisError } = await supabase
    .from('avis_professeurs') 
    .select('*')
    .eq('id_professeur', id)
    .eq('est_modere', true)
    .order('cree_le', { ascending: false })
    .limit(5);

  if (avisError) {
    console.error('Erreur Supabase (avis) :', avisError.message);
  }

  const avis = (avisData ?? []) as AvisRow[];

  const placeholderPhoto = '/images/teachers/placeholder-teacher.jpg';
  const photoUrl =
    prof.photo_url && prof.photo_url.trim() !== ''
      ? prof.photo_url
      : placeholderPhoto;

  const whatsappLink = `https://wa.me/${prof.numero_whatsapp}`;

  const hasRatings = (prof.avis_nombre ?? 0) > 0 && (prof.avis_moyenne ?? 0) > 0;
  
  // Formatage du prix
  const formattedPrice = prof.tarif_horaire.toLocaleString('fr-FR');
  const avgRating = prof.avis_moyenne?.toFixed(1) || 'N/A';
  const reviewsCount = prof.avis_nombre || 0;

  return (
    <div className="relative pb-20 md:pb-0">
      {/* Barre CTA sticky mobile (Améliorée) */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-card border-t border-border px-4 py-3 flex items-center justify-between md:hidden shadow-2xl">
        <div className="text-sm">
          <p className="font-semibold text-primary">{formattedPrice} FCFA/h</p>
          <p className="text-xs text-muted-foreground">
            {prof.matiere} • {prof.niveau}
          </p>
        </div>
        <Button asChild size="sm" className="shadow-lg">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" /> Contacter
          </a>
        </Button>
      </div>

      <div className="container py-8 md:py-12 space-y-8 md:space-y-12 max-w-7xl">
        <a
          href="/teachers"
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
          Retour à la liste des professeurs
        </a>

        {/* Bandeau principal (Section 1) - Plus d'impact visuel */}
        <section className="bg-gradient-to-r from-primary/10 to-background rounded-3xl border border-primary/20 p-6 md:p-10 shadow-xl">
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
            
            {/* Info principale */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                  {prof.nom_complet}
                </h1>

                {prof.verifie && (
                  <Badge 
                    // Ajout de pointer-events-none pour s'assurer qu'il est statique (pas de hover)
                    className="bg-green-600/10 text-green-700 dark:bg-green-300/20 dark:text-green-300 border border-green-700/30 pointer-events-none"
                  >
                    <Verified className="w-4 h-4 mr-1.5 fill-green-600 text-green-600 dark:fill-green-300 dark:text-green-300" />
                    Profil certifié
                  </Badge>
                )}
              </div>

              {/* Matière / Niveau */}
              <div className="flex flex-wrap gap-2 text-base">
                <Badge variant="secondary" className='bg-primary/10 text-primary hover:bg-primary/20'>
                    {prof.matiere}
                </Badge>
                <Badge variant="outline" className='border-muted-foreground/30 text-muted-foreground'>
                    {prof.niveau}
                </Badge>
              </div>

              {/* Note et Localisation */}
              <div className="space-y-1 pt-2">
                {hasRatings && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {renderStars(prof.avis_moyenne ?? 0)}
                    </div>
                    <div className="text-base font-semibold">
                      <span className="text-primary mr-1">{avgRating} / 5</span>
                      <span className="text-muted-foreground font-normal">
                        ({reviewsCount} avis vérifiés)
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Secteur : <span className='text-foreground font-medium'>{prof.commune}</span></span>
                </div>
              </div>
            </div>

            {/* Tarif et CTA (Desktop) */}
            <div className="flex flex-col items-stretch md:items-end justify-center gap-4">
              <div className="text-center md:text-right space-y-1">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  Tarif horaire
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
                  {formattedPrice} FCFA
                  <span className="text-base text-muted-foreground ml-1 font-semibold">
                    / heure
                  </span>
                </p>
              </div>

              <div className="hidden md:block w-full max-w-sm">
                <Button asChild size="lg" className='w-full shadow-lg hover:shadow-xl transition-shadow'>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Corps (Section 2) - Photo, Bio et Infos pratiques */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] items-start">
            
            {/* Colonne gauche (Photo & Infos pratiques) */}
            <div className="space-y-6">
                
                {/* Photo de profil */}
                <Card className="shadow-lg rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative w-full aspect-[4/5] bg-muted">
                            <Image
                                src={photoUrl}
                                alt={`Portrait de ${prof.nom_complet}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="hover:scale-[1.05] transition-transform duration-500"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Infos pratiques (Style amélioré) */}
                <Card className="shadow-md rounded-2xl">
                    <CardContent className="p-6 md:p-7 space-y-4">
                        <h3 className="font-extrabold text-xl border-b pb-2 mb-3 text-primary">
                            Détails de l'offre
                        </h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-foreground flex items-center gap-2"><Star className='w-4 h-4 text-yellow-500'/> Matière enseignée :</span>
                                <span className='text-muted-foreground'>{prof.matiere}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-foreground flex items-center gap-2"><Star className='w-4 h-4 text-yellow-500'/> Niveau scolaire :</span>
                                <span className='text-muted-foreground'>{prof.niveau}</span>
                            </div>
                            {/* Suppression de "Zone de service" et "Contact principal" comme demandé */}
                        </div>
                    </CardContent>
                </Card>

                {/* Conseil de contact */}
                <Card className="border-l-4 border-primary rounded-xl shadow-inner bg-primary/5">
                    <CardContent className="p-4 text-sm text-muted-foreground space-y-2">
                        <p className="font-bold text-primary flex items-center gap-2">
                            <MessageSquare className='w-4 h-4'/> Conseils pour le premier message :
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Précisez le niveau de l'élève et ses difficultés.</li>
                            <li>Demandez la méthode de travail du professeur.</li>
                            <li>Confirmez les disponibilités et le mode de paiement.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Colonne droite (Biographie et Avis) */}
            <div className="space-y-8">
                
                {/* Biographie détaillée */}
                <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-6 md:p-8 space-y-4">
                        <h2 className="text-2xl font-extrabold text-foreground border-b pb-3">
                            Ma biographie et approche pédagogique
                        </h2>
                        <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                            {prof.biographie ||
                                "Ce professeur n'a pas encore complété sa biographie. Contactez-le directement pour en savoir plus sur son expérience et sa méthode."}
                        </div>
                    </CardContent>
                </Card>

                {/* Avis récents */}
                <section>
                    <h2 className="font-extrabold text-2xl mb-4 text-foreground">
                        Avis vérifiés des parents ({reviewsCount})
                    </h2>

                    {avis.length === 0 ? (
                        <Card className="border-dashed bg-muted/20 p-6 text-center">
                            <p className="text-base text-muted-foreground">
                                Soyez le premier à laisser un avis ! Votre feedback sera validé après un cours.
                            </p>
                        </Card>
                    ) : (
                        <div className="grid gap-6">
                            {avis.map((a) => (
                                <Card
                                    key={a.id}
                                    className="border-l-4 border-yellow-500/80 shadow-sm"
                                >
                                    <CardContent className="p-5 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-base text-foreground">{a.nom_parent}</p>
                                            <span className="font-extrabold text-yellow-500 text-lg flex items-center gap-1">
                                                {a.note.toFixed(1)}
                                                <Star className='w-5 h-5 fill-yellow-500 text-yellow-500'/>
                                            </span>
                                        </div>
                                        {a.commentaire && (
                                            <p className="text-sm text-muted-foreground italic">
                                                &quot;{a.commentaire}&quot;
                                            </p>
                                        )}
                                        <p className="text-xs text-muted-foreground pt-1 border-t border-border mt-2">
                                            Publié le {new Date(a.cree_le).toLocaleDateString('fr-FR')}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </section>
                
                {/* Formulaire avis (Style amélioré) */}
                <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20 shadow-inner">
                    <h2 className="font-extrabold text-2xl mb-3 text-primary">
                        Partagez votre expérience
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Votre avis est important ! Il sera publié **après vérification** par notre équipe pour assurer l&apos;authenticité de l&apos;expérience.
                    </p>

                    <form action={ajouterAvisAction} className="space-y-5">
                        <input type="hidden" name="id_professeur" value={prof.id} />

                        {/* Champ: Nom du parent */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-foreground">Votre nom (Affiché publiquement)</label>
                            <input
                                name="nom_parent"
                                required
                                placeholder="Ex : Parent de Daniel (Initiales ou prénom)"
                                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            />
                        </div>
                        
                        {/* Champ: Contact du parent (Non Public) */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-foreground">Votre contact pour vérification (Non Public)</label>
                            <input
                                name="parent_contact"
                                required
                                type="text"
                                placeholder="Ex : 07 00 00 00 00 ou email"
                                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Nous l'utiliserons pour valider votre cours avec le professeur.
                            </p>
                        </div>

                        {/* Champ: Note */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-foreground">Note (de 1 à 5)</label>
                            <div className="relative">
                                <select
                                    name="note"
                                    required
                                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
                                >
                                    <option value="">Choisir une note...</option>
                                    <option value="5">5/5 - Excellent, je recommande vivement</option>
                                    <option value="4">4/5 - Très bon, satisfait de l'enseignement</option>
                                    <option value="3">3/5 - Correct, service attendu</option>
                                    <option value="2">2/5 - Moyen, quelques réserves</option>
                                    <option value="1">1/5 - Mauvais, très insatisfait</option>
                                </select>
                                <div className='pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-muted-foreground"><path d="m6 9 6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>

                        {/* Champ: Commentaire */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-foreground">Commentaire (Facultatif)</label>
                            <textarea
                                name="commentaire"
                                rows={5}
                                placeholder="Décrivez votre expérience avec le professeur..."
                                className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        <Button type="submit" className="w-full md:w-auto shadow-md">
                            <Star className="mr-2 h-4 w-4" /> Soumettre mon avis
                        </Button>
                    </form>
                </section>
            </div>
        </section>
      </div>
    </div>
  );
}