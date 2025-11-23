import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { findImage } from '@/lib/placeholder-data';
import { CheckCircle, Zap, Users, BadgePercent } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const pageImage = findImage('become-teacher');

export default function BecomeATeacherPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <header className="relative h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        {pageImage && (
          <Image
            src={pageImage.imageUrl}
            alt={pageImage.description}
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            data-ai-hint={pageImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground">
            Rejoignez la communauté de profs Edalia à Abidjan
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/90">
            Donnez des cours particuliers, choisissez vos élèves, gardez 100% de vos revenus.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        {/* SECTION 1 : Pourquoi Edalia + Carte abonnement */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">
              Pourquoi enseigner avec Edalia ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Edalia est pensée pour les professeurs à Abidjan : simple, directe, et rentable pour vous.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Users className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Plus d&apos;élèves, facilement</h3>
                  <p className="text-muted-foreground">
                    Recevez des demandes de parents motivés dans votre zone, sans faire de prospection ni de marketing.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BadgePercent className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">0% de commission</h3>
                  <p className="text-muted-foreground">
                    Vous gardez 100% de ce que vous gagnez. Le paiement des cours se fait directement entre vous et la famille
                    (Orange Money, Wave, cash…).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Simple et direct</h3>
                  <p className="text-muted-foreground">
                    Les parents vous contactent directement sur WhatsApp. Vous gérez vos horaires, vos tarifs et vos élèves en toute autonomie.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg border text-center">
            <h2 className="font-headline text-2xl font-bold text-primary mb-2">
              Abonnement Edalia – Professeurs
            </h2>
            <p className="text-muted-foreground mb-4">
              Pour apparaître dans le catalogue et être visible des parents.
            </p>

            <div className="my-6 py-4 px-6 rounded-lg" style={{ backgroundColor: '#E9F0EB' }}>
              <p className="text-lg font-semibold text-primary">Abonnement mensuel</p>
              <p className="font-headline text-4xl font-bold text-primary my-2">
                5 000 FCFA
              </p>
              <p className="text-sm text-muted-foreground">
                Visibilité 30 jours • 0% de commission • Sans engagement.
              </p>
            </div>

            <div className="space-y-2 text-left text-sm mb-6">
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Votre profil apparaît dans le catalogue Edalia pendant 30 jours.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Badge &quot;Abonné&quot; et statut &quot;Vérifié&quot; après validation de vos informations.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Aucun pourcentage sur vos cours : vous gardez tout.</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Vous pouvez renouveler ou arrêter l&apos;abonnement à tout moment.</span>
              </p>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link href="/become-a-teacher/form">
                Créer mon profil enseignant
              </Link>
            </Button>

            <p className="text-xs text-muted-foreground mt-3">
              Après paiement de l&apos;abonnement, votre profil est vérifié puis activé dans un délai maximum de 24h.
            </p>
          </div>
        </div>

        {/* SECTION 2 : Comment fonctionne l'abonnement ? */}
        <section className="bg-muted/40 rounded-xl px-6 py-10 md:px-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary text-center">
              Comment fonctionne l&apos;abonnement Edalia ?
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              L&apos;abonnement est simple : vous payez 5 000 FCFA pour 30 jours de visibilité sur Edalia.
              Pendant cette période, votre profil est visible dans les recherches des parents.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-card border rounded-lg p-5 text-center">
                <p className="text-sm font-semibold text-primary mb-2">Étape 1</p>
                <h3 className="font-semibold mb-2">Je crée mon profil</h3>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire avec vos matières, niveaux, commune, tarif et biographie.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-5 text-center">
                <p className="text-sm font-semibold text-primary mb-2">Étape 2</p>
                <h3 className="font-semibold mb-2">Je paie 5 000 FCFA</h3>
                <p className="text-sm text-muted-foreground">
                  Paiement par Mobile Money (Orange Money, Wave, MTN…) ou autre moyen convenu avec l&apos;équipe Edalia.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-5 text-center">
                <p className="text-sm font-semibold text-primary mb-2">Étape 3</p>
                <h3 className="font-semibold mb-2">Mon profil est visible 30 jours</h3>
                <p className="text-sm text-muted-foreground">
                  Votre abonnement est activé pour 30 jours. Vous pouvez renouveler chaque mois si vous le souhaitez.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Si votre abonnement expire, votre profil reste créé mais n&apos;apparaît plus dans le catalogue tant que vous ne renouvelez pas.
            </p>
          </div>
        </section>

        {/* SECTION 3 : FAQ */}
        <section id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">
              Questions fréquentes (FAQ)
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Comment suis-je payé ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Le paiement des cours se fait directement entre vous et le parent d&apos;élève, par le moyen que vous préférez :
                  Orange Money, Wave, MTN, virement, cash, etc. Edalia ne prend aucune commission sur vos revenus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Comment fonctionne la vérification ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Après votre inscription, nous pouvons vous demander une pièce d&apos;identité et/ou un justificatif de diplôme.
                  Notre équipe vérifie chaque profil manuellement pour garantir la sécurité et la confiance sur la plateforme.
                  Une fois vérifié, vous obtenez un badge &quot;Professeur vérifié&quot;.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Comment fonctionne l&apos;abonnement de 5 000 FCFA ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  L&apos;abonnement est un forfait mensuel fixe : 5 000 FCFA pour 30 jours de visibilité sur la plateforme.
                  Pendant cette période, votre profil est visible dans les résultats de recherche des parents.
                  Si l&apos;abonnement expire, votre profil reste enregistré mais n&apos;apparaît plus dans le catalogue
                  jusqu&apos;à ce que vous le renouveliez. Il n&apos;y a aucun engagement : vous êtes libre d&apos;arrêter ou de reprendre.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">
                  Puis-je choisir mes horaires et mes zones ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Oui, absolument. Vous êtes 100% indépendant. Sur votre profil, vous indiquez vos disponibilités et les zones
                  d&apos;Abidjan où vous souhaitez enseigner (Cocody, Marcory, Yopougon, etc.). Vous choisissez vos élèves et votre organisation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">
                  Comment renouveler ou arrêter mon abonnement ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Pour renouveler, il suffit de repayer 5 000 FCFA pour 30 jours supplémentaires. Si vous ne renouvelez pas, l&apos;abonnement
                  s&apos;arrête automatiquement à la date d&apos;expiration : vous ne payez jamais sans décider. Vous pouvez revenir plus tard et
                  réactiver votre visibilité quand vous le souhaitez.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
