// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Verified,
  Phone,
  ShieldCheck,
  Banknote,
  CheckCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pattern } from '@/components/pattern';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import FeaturedTeachersSection from '@/components/teachers/FeaturedTeachersSection';
import { findImage } from '@/lib/placeholder-data';

const heroImage = findImage('hero-image');

const PRIMARY_COLOR = '#1A3626'; // Vert foncé
const ACCENT_COLOR = '#6BBD78'; // Vert clair

// FAQ – Version finale (Parents)
const faqItems = [
  {
    question: 'Les professeurs sur Edalia sont-ils vraiment vérifiés ?',
    answer:
      'Oui. Chaque professeur est vérifié avant d’être accepté : identité, expérience, cohérence du profil et avis. Seuls les enseignants sérieux, pédagogues et recommandés apparaissent sur la plateforme. Vous choisissez en toute confiance.',
  },
  {
    question: 'Combien coûtent les cours sur Edalia ?',
    answer:
      "Les tarifs varient selon le niveau et la matière, en moyenne entre 2 000 et 20 000 FCFA l’heure. Chaque professeur fixe librement son prix, affiché clairement sur son profil. Aucun frais caché, aucune surprise.",
  },
  {
    question: 'Comment se passe le paiement des cours ?',
    answer:
      'Le paiement se fait directement entre le parent et le professeur, selon ce que vous préférez : cash, Mobile Money (Orange Money, MTN, Moov) ou virement. Edalia ne gère pas les paiements : vous gardez un contact direct et simple avec le professeur.',
  },
  {
    question: "Est-ce que Edalia remplace les cours à l’école ?",
    answer:
      "Non. Edalia complète le travail de l’école. Les professeurs aident les élèves à comprendre leurs leçons, renforcer les bases, préparer les examens et gagner en confiance. C’est un soutien ciblé qui vient renforcer la réussite scolaire.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* ------------------------------------------ */}
        {/*                HERO SECTION                */}
        {/* ------------------------------------------ */}
        <section className="relative bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-28 md:py-40 grid md:grid-cols-2 gap-x-12 gap-y-8 items-center relative">
            {/* LEFT SIDE */}
            <div className="space-y-8 text-center md:text-left">
              <h1
                className="text-4xl md:text-6xl font-headline font-semibold"
                style={{ color: PRIMARY_COLOR }}
              >
                Trouvez un professeur fiable à Abidjan en 2 minutes
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Professeurs vérifiés • Sans commission • Contact direct WhatsApp
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <Button
                  size="lg"
                  asChild
                  style={{ backgroundColor: PRIMARY_COLOR }}
                  className="text-white hover:bg-[#3C644E]"
                >
                  <Link href="/teachers">Découvrir les professeurs</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  style={{ borderColor: ACCENT_COLOR, color: ACCENT_COLOR }}
                  className="font-semibold hover:bg-gray-50"
                >
                  <Link href="/become-a-teacher">Je suis Professeur</Link>
                </Button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="flex justify-center md:justify-end">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={420}
                  className="rounded-2xl object-contain shadow-2xl"
                  priority
                />
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/*          FEATURED TEACHERS SECTION         */}
        {/* ------------------------------------------ */}
        <FeaturedTeachersSection />

        {/* ------------------------------------------ */}
        {/*             HOW IT WORKS SECTION           */}
        {/* ------------------------------------------ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                C’est simple comme bonjour.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: ACCENT_COLOR, opacity: 0.15 }}
                >
                  <Search className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />
                </div>
                <h3 className="text-2xl font-headline font-semibold">1. Cherchez</h3>
                <p className="text-muted-foreground">
                  Parcourez les profils de profs vérifiés par matière et par commune.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: ACCENT_COLOR, opacity: 0.15 }}
                >
                  <BookOpen className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />
                </div>
                <h3 className="text-2xl font-headline font-semibold">2. Choisissez</h3>
                <p className="text-muted-foreground">
                  Consultez les profils détaillés avec les tarifs, les avis et les
                  diplômes.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: ACCENT_COLOR, opacity: 0.15 }}
                >
                  <Phone className="h-10 w-10" style={{ color: PRIMARY_COLOR }} />
                </div>
                <h3 className="text-2xl font-headline font-semibold">3. Contactez</h3>
                <p className="text-muted-foreground">
                  Échangez directement avec le prof sur WhatsApp pour fixer le cours.
                </p>
              </div>
            </div>

            <div className="text-center mt-16 max-w-2xl mx-auto">
              <Badge
                variant="outline"
                className="text-base px-4 py-2"
                style={{
                  borderColor: ACCENT_COLOR,
                  color: ACCENT_COLOR,
                  backgroundColor: `${ACCENT_COLOR}1A`,
                }}
              >
                <Verified className="w-5 h-5 mr-2" />
                Tous les professeurs sont vérifiés par Edalia
              </Badge>
              <p className="text-sm text-muted-foreground mt-4">
                Chaque professeur est vérifié via pièce d’identité et une
                vérification manuelle de son expérience pour garantir la fiabilité.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/*             SECURITY SECTION               */}
        {/* ------------------------------------------ */}
        <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[.06]">
            <Pattern />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Sécurité & Confiance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Votre tranquillité d’esprit est notre priorité.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center shadow-md">
                <CardContent className="p-8 flex flex-col items-center space-y-3">
                  <div className="bg-secondary p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold font-headline text-lg">
                    Vérification Manuelle
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Chaque profil est examiné manuellement pour garantir la qualité.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md">
                <CardContent className="p-8 flex flex-col items-center space-y-3">
                  <div className="bg-secondary p-3 rounded-full">
                    <Banknote className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold font-headline text-lg">
                    Aucun Paiement en Ligne
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Vous payez directement le professeur. Aucun frais sur Edalia.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-md">
                <CardContent className="p-8 flex flex-col items-center space-y-3">
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold font-headline text-lg">
                    Contact Direct
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Discutez directement sur WhatsApp avec l’enseignant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/*           FINAL CTA – SECTION BLANCHE      */}
        {/* ------------------------------------------ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
              {/* Texte gauche */}
              <div className="space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl font-headline font-semibold">
                  Prêt à trouver le bon professeur pour votre enfant ?
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                  Edalia connecte les familles d’Abidjan avec des enseignants vérifiés,
                  sérieux et disponibles rapidement. Comparez les profils, discutez
                  directement sur WhatsApp et organisez vos premiers cours en toute
                  confiance.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start text-gray-700">
                    <CheckCircle
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: ACCENT_COLOR, marginTop: '3px' }}
                    />
                    Professeurs vérifiés manuellement par notre équipe
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: ACCENT_COLOR, marginTop: '3px' }}
                    />
                    Tarifs affichés clairement, sans commission cachée
                  </li>
                  <li className="flex items-start text-gray-700">
                    <CheckCircle
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: ACCENT_COLOR, marginTop: '3px' }}
                    />
                    Contact direct pour organiser les cours à votre rythme
                  </li>
                </ul>
              </div>

              {/* Bloc CTA droite */}
              <div className="bg-background border rounded-2xl p-6 md:p-7 shadow-lg text-center md:text-left space-y-4">
                <p className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
                  Commencer maintenant
                </p>
                <p className="text-lg md:text-xl font-headline font-semibold">
                  Parcourez les professeurs vérifiés à Abidjan.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  En quelques minutes, vous pouvez trouver un professeur adapté au
                  niveau, à la matière et au quartier de votre enfant.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    size="lg"
                    className="flex-1 font-semibold"
                    asChild
                    style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}
                  >
                    <Link href="/teachers">Voir les professeurs</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 font-semibold"
                    asChild
                    style={{ borderColor: ACCENT_COLOR, color: ACCENT_COLOR }}
                  >
                    <Link href="/become-a-teacher">Je suis professeur</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/*                 FAQ SECTION                */}
        {/* ------------------------------------------ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Questions fréquentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tout ce que vous devez savoir sur Edalia en un coup d&apos;œil.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b"
                  >
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline text-gray-800">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 pr-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
