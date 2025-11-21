import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { findImage } from '@/lib/placeholder-data';
import { CheckCircle, Zap, Users, BadgePercent } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const pageImage = findImage('become-teacher');

export default function BecomeATeacherPage() {
  return (
    <div className="bg-background">
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
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Rejoignez notre équipe de profs à Abidjan</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/90">
            Augmentez vos revenus en donnant des cours particuliers quand vous voulez, où vous voulez.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Pourquoi enseigner avec Edalia ?</h2>
            <p className="text-lg text-muted-foreground mb-8">On a créé la plateforme la plus simple pour les profs particuliers à Abidjan.</p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Users className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Plus d'élèves, facilement</h3>
                  <p className="text-muted-foreground">Recevez des demandes de parents d'élèves motivés dans votre zone, sans effort de marketing.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <BadgePercent className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">0% de commission</h3>
                  <p className="text-muted-foreground">Gardez 100% de ce que vous gagnez. Nous ne prenons aucune commission sur vos cours. C'est direct entre vous et la famille.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Simple et direct</h3>
                  <p className="text-muted-foreground">Les parents vous contactent directement sur WhatsApp. Pas d'intermédiaire, pas de complications.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg border text-center">
            <h2 className="font-headline text-2xl font-bold text-primary mb-2">Prêt à commencer ?</h2>
            <p className="text-muted-foreground mb-4">C'est simple et rapide.</p>
            <div className="my-6 py-4 px-6 rounded-lg" style={{ backgroundColor: '#E9F0EB' }}>
                <p className="text-lg font-semibold text-primary">Abonnement Mensuel</p>
                <p className="font-headline text-4xl font-bold text-primary my-2">5 000 FCFA</p>
                <p className="text-sm text-muted-foreground">Aucun engagement, aucune commission.</p>
            </div>
            <Button size="lg" type="submit" className="w-full">
              Créer mon profil enseignant
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Le processus d'inscription et de vérification prend moins de 24h.</p>
          </div>
        </div>

        <section id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Questions fréquentes (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Comment je suis payé ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Le paiement se fait directement entre vous et le parent d'élève, par le moyen que vous préférez (Orange Money, Wave, cash, etc.). Edalia ne s'implique pas dans les transactions, ce qui garantit 0% de commission pour vous.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Comment fonctionne la vérification ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Après votre inscription, nous vous demanderons de nous fournir une pièce d'identité et une copie de vos diplômes. Notre équipe vérifie chaque profil manuellement pour garantir la sécurité et la confiance sur la plateforme. Le processus est généralement bouclé en moins de 24 heures.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Comment l'abonnement de 5 000 FCFA fonctionne ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  L'abonnement vous donne un accès illimité à la plateforme pour être contacté par des parents. C'est un paiement mensuel fixe, que vous ayez 1 ou 20 élèves grâce à Edalia. Il n'y a aucun engagement, vous pouvez arrêter quand vous voulez.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Est-ce que je peux choisir mes horaires et mes zones ?</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  Oui, absolument. Vous êtes 100% indépendant. Sur votre profil, vous indiquez vos disponibilités et les zones d'Abidjan où vous souhaitez enseigner (Cocody, Marcory, Yopougon, etc.). Vous avez le contrôle total.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
