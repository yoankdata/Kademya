import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Phone, Verified } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ajouterAvisAction } from './actions';

// CORRECTION : On utilise 'avis_moyenne' et 'avis_nombre' pour correspondre au teacher/page.tsx
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
  // Champs corrigés pour la cohérence avec la BDD
  avis_moyenne?: number | null; // <--- MODIFIÉ
  avis_nombre?: number | null;   // <--- MODIFIÉ
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
  params: {
    id: string;
  };
};

export default async function TeacherProfilePage({ params }: PageProps) {
  const { id } = params;

  // Récupération du professeur
  const { data, error } = await supabase
    .from('professeurs')
    .select('*')
    .eq('id', id)
    .maybeSingle<ProfesseurRow>();

  if (error) {
    console.error('Erreur Supabase (professeur) :', error.message);
    notFound();
  }

  if (!data) {
    notFound();
  }

  const prof = data;

  // Récupération des avis récents (la table s'appelle 'avis_professeurs')
  const { data: avisData, error: avisError } = await supabase
    .from('avis_professeurs')
    .select('*')
    .eq('id_professeur', id)
    .order('cree_le', { ascending: false })
    .limit(3);

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

  // CORRECTION : Utilisation de 'avis_nombre' et 'avis_moyenne'
  const hasRatings = (prof.avis_nombre ?? 0) > 0 && (prof.avis_moyenne ?? 0) > 0;

  return (
    <div className="relative">
      {/* Barre CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-background/95 backdrop-blur border-t px-4 py-3 flex items-center justify-between md:hidden">
        <div className="text-sm">
          <p className="font-semibold">{prof.nom_complet}</p>
          <p className="text-xs text-muted-foreground">
            {prof.matiere} • {prof.niveau}
          </p>
        </div>
        <Button asChild size="sm">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>

      <div className="container py-10 md:py-14 space-y-6 md:space-y-10">
        <a
          href="/teachers"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          ← Retour à la liste des professeurs
        </a>

        {/* Bandeau principal */}
        <section className="rounded-2xl border bg-card px-5 py-6 md:px-8 md:py-7 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-headline font-semibold">
                  {prof.nom_complet}
                </h1>

                {prof.verifie && (
                  <Badge className="bg-accent text-accent-foreground border-accent">
                    <Verified className="w-4 h-4 mr-1.5" />
                    Professeur vérifié
                  </Badge>
                )}

                {hasRatings && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            // CORRECTION : Utilisation de 'avis_moyenne'
                            i < Math.round(prof.avis_moyenne ?? 0)
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">
                        {/* CORRECTION : Utilisation de 'avis_moyenne' */}
                        {prof.avis_moyenne?.toFixed(1)} / 5
                      </span>
                      <span className="text-muted-foreground">
                        {' '}
                        {/* CORRECTION : Utilisation de 'avis_nombre' */}
                        ({prof.avis_nombre} avis)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground">
                {prof.matiere} • {prof.niveau}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{prof.commune}, Abidjan</span>
              </div>
            </div>

            <div className="flex md:justify-end md:text-right items-center gap-4 md:gap-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Tarif horaire
                </p>
                <p className="text-xl md:text-2xl font-headline font-semibold">
                  {prof.tarif_horaire.toLocaleString('fr-FR')} FCFA
                  <span className="text-sm text-muted-foreground ml-1">
                    / heure
                  </span>
                </p>
              </div>

              <div className="hidden md:block">
                <Button asChild size="lg">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Corps */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* Photo + Bio */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-sm">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[4/5] bg-muted">
                  <Image
                    src={photoUrl}
                    alt={`Portrait de ${prof.nom_complet}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6 md:p-7 space-y-3 md:space-y-4">
                <h2 className="text-lg md:text-xl font-headline font-semibold">
                  À propos du professeur
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {prof.biographie ||
                    "Ce professeur n'a pas encore complété sa biographie."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Infos pratiques */}
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-5 md:p-6 space-y-4">
                <h3 className="font-headline font-semibold text-base md:text-lg">
                  Informations pratiques
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">
                      Matière :
                    </span>{' '}
                    {prof.matiere}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Niveau :
                    </span>{' '}
                    {prof.niveau}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Commune :
                    </span>{' '}
                    {prof.commune}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Tarif :
                    </span>{' '}
                    {prof.tarif_horaire.toLocaleString('fr-FR')} FCFA / heure
                  </p>
                </div>

                <div className="pt-2 hidden md:block">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4" /> Envoyer un message
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed shadow-none">
              <CardContent className="p-4 md:p-5 text-xs md:text-sm text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">
                  Conseil pour le premier contact :
                </p>
                <p>
                  Présentez brièvement le niveau de votre enfant, ses difficultés
                  et vos attentes. Vous pouvez demander :
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>comment le professeur organise un premier cours ;</li>
                  <li>combien de séances il recommande par semaine ;</li>
                  <li>comment il suit la progression de l&apos;élève.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Avis récents */}
        <section className="mt-4">
          <h2 className="font-headline text-2xl font-semibold mb-4">
            Avis récents
          </h2>

          {avis.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aucun avis pour le moment. Après votre premier cours, vous pourrez
              revenir ici pour partager votre expérience avec ce professeur.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {avis.map((a) => (
                <Card
                  key={a.id}
                  className="shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-sm">{a.nom_parent}</p>
                      <span className="font-bold text-yellow-500 text-sm">
                        {a.note} ★
                      </span>
                    </div>
                    {a.commentaire && (
                      <p className="text-sm text-muted-foreground">
                        {a.commentaire}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(a.cree_le).toLocaleDateString('fr-FR')}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Formulaire avis */}
        <section className="mt-8 bg-muted/40 rounded-xl p-5 md:p-6">
          <h2 className="font-headline text-xl font-semibold mb-3">
            Laisser un avis
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Vous avez déjà eu un cours avec ce professeur ? Partagez votre avis
            pour aider d&apos;autres parents à faire leur choix.
          </p>

          <form action={ajouterAvisAction} className="space-y-4 max-w-xl">
            <input type="hidden" name="id_professeur" value={prof.id} />

            <div className="space-y-1">
              <label className="text-sm font-medium">Votre nom</label>
              <input
                name="nom_parent"
                required
                placeholder="Ex : Parent de Daniel"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Note</label>
              <select
                name="note"
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
              >
                <option value="">Sélectionner une note</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Très bon</option>
                <option value="3">3 - Correct</option>
                <option value="2">2 - Moyen</option>
                <option value="1">1 - Mauvais</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Commentaire</label>
              <textarea
                name="commentaire"
                rows={4}
                placeholder="Comment s'est passé le cours ?"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Envoyer mon avis
            </Button>

            <p className="text-xs text-muted-foreground mt-2">
              Les avis doivent rester respectueux et basés sur une expérience
              réelle avec ce professeur.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}