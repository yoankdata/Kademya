import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Verified,
  Phone,
  ShieldCheck,
  Banknote,
  CheckCircle2,
  ArrowRight,
  Star,
  User,
  Sparkles,
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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        {/* ------------------------------------------ */}
        {/* HERO SECTION                              */}
        {/* ------------------------------------------ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-8 text-center lg:text-left">
              <Badge
                variant="outline"
                className="py-1.5 px-4 bg-background/50 backdrop-blur border-accent/40 text-primary animate-fade-in inline-flex items-center"
              >
                <Verified className="w-3.5 h-3.5 mr-2 text-accent" />
                Plateforme de confiance à Abidjan
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight leading-[1.15] text-foreground">
                La réussite scolaire commence par le{' '}
                <span className="text-primary relative inline-block">
                  bon professeur
                  {/* Underline decoration */}
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-accent/40 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Connectez-vous avec des professeurs vérifiés pour un accompagnement
                sur-mesure. Sans commission, contact direct.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-base font-bold rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 transform"
                >
                  <Link
                    href="/teachers"
                    className="no-underline hover:no-underline flex items-center"
                  >
                    Trouver un professeur <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 px-8 text-base font-bold rounded-full border-2 border-input bg-background hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Link
                    href="/become-a-teacher"
                    className="no-underline hover:no-underline"
                  >
                    Je veux enseigner
                  </Link>
                </Button>
              </div>

              {/* SOCIAL PROOF */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[
                    { color: 'bg-blue-100 text-blue-600' },
                    { color: 'bg-green-100 text-green-600' },
                    { color: 'bg-yellow-100 text-yellow-600' },
                    { color: 'bg-purple-100 text-purple-600' },
                  ].map((style, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center overflow-hidden shadow-sm ${style.color}`}
                    >
                      <User className="w-5 h-5 opacity-80" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-400 drop-shadow-sm items-center gap-1">
                    <span className="font-bold text-foreground text-base">4.9/5</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="font-medium text-foreground/80">
                    Déjà 15+ familles inscrites
                  </span>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative mx-auto lg:ml-auto max-w-[600px] w-full perspective-1000">
              {/* Abstract decorative shapes behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-10" />

              {heroImage && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white transform rotate-1 hover:rotate-0 transition-all duration-700 ease-out bg-white group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={450}
                    className="object-cover w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-700"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* FEATURED TEACHERS SECTION                  */}
        {/* ------------------------------------------ */}
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
          {/* Décoration d'arrière-plan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* En-tête de section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-medium mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wide">
                    La sélection du moment
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                  Nos professeurs à la une
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Découvrez les profils les plus plébiscités par les parents.
                </p>
              </div>

              <Button
                variant="ghost"
                className="hidden md:flex text-primary hover:bg-primary/10 hover:text-primary font-semibold group"
                asChild
              >
                <Link href="/teachers">
                  Voir tous les professeurs{' '}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Composant liste */}
            <FeaturedTeachersSection />

            {/* Bouton mobile uniquement */}
            <div className="mt-8 text-center md:hidden">
              <Button
                variant="outline"
                className="w-full border-primary/20 text-primary"
                asChild
              >
                <Link href="/teachers">Voir tous les professeurs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* HOW IT WORKS SECTION                      */}
        {/* ------------------------------------------ */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                Processus Simple
              </Badge>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trouver le professeur idéal n&apos;a jamais été aussi simple et rapide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10 border-t border-dashed border-primary/30" />

              {[
                {
                  icon: Search,
                  title: '1. Recherchez',
                  desc: "Filtrez par matière, niveau et commune pour trouver les profils adaptés à votre enfant.",
                },
                {
                  icon: BookOpen,
                  title: '2. Choisissez',
                  desc: 'Comparez les profils détaillés, les avis vérifiés et les tarifs en toute transparence.',
                },
                {
                  icon: Phone,
                  title: '3. Contactez',
                  desc: 'Discutez directement sur WhatsApp avec le professeur pour organiser le premier cours.',
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative z-10">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
                      {idx + 1}
                    </div>
                    <step.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-primary/5 text-sm text-muted-foreground hover:shadow-lg transition-shadow duration-300">
                <Verified className="w-5 h-5 text-accent" />
                <span>
                  Tous nos professeurs passent par un processus de vérification rigoureux.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* SECURITY / CHARTE SECTION                 */}
        {/* ------------------------------------------ */}
        <section className="py-24 relative overflow-hidden bg-secondary/10">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <Pattern />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                  La sécurité et la confiance avant tout.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous savons que confier l&apos;éducation de votre enfant est une
                  décision importante. C&apos;est pourquoi nous avons mis en place des
                  standards élevés, pensés pour les familles à Abidjan.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: ShieldCheck,
                      title: 'Identité Vérifiée',
                      desc: 'Nous vérifions systématiquement les pièces d’identité de chaque enseignant.',
                    },
                    {
                      icon: Banknote,
                      title: 'Paiement Direct',
                      desc: 'Aucun intermédiaire. Vous payez le professeur directement, sans frais cachés.',
                    },
                    {
                      icon: CheckCircle2,
                      title: 'Avis Authentiques',
                      desc: 'Seuls les parents ayant effectué des cours peuvent laisser un avis.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-primary/10 group-hover:border-primary/30 transition-colors flex items-center justify-center text-primary shadow-sm">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl transform rotate-3" />
                <Card className="relative bg-background border-border shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
                  <CardContent className="p-8 md:p-10 text-center space-y-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-green-50/50">
                      <ShieldCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Charte de Qualité Edalia</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      En rejoignant Edalia, chaque professeur s&apos;engage à respecter
                      notre Charte de Qualité pensée pour le contexte ivoirien :
                      professionnalisme, sécurité, pédagogie adaptée et transparence avec
                      les familles.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary font-semibold hover:border-primary/50 transition-all duration-300 no-underline hover:no-underline"
                      asChild
                    >
                      <Link href="/charte-qualite">
                        Découvrir la Charte de Qualité
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* FINAL CTA – PREMIUM GRADIENT SECTION      */}
        {/* ------------------------------------------ */}
        <section className="py-24 relative overflow-hidden">
          {/* Dark Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A3626] to-[#2C5E40] z-0" />

          {/* Textures */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6BBD78]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-white tracking-tight leading-tight">
              Prêt à transformer la scolarité de votre enfant ?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Rejoignez les familles d&apos;Abidjan qui ont choisi la sérénité. <br className="hidden md:block" />
              Des résultats concrets, sans stress, dès le premier cours.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="h-16 px-10 text-lg font-bold rounded-full bg-white text-[#1A3626] hover:bg-white/90 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Link
                  href="/teachers"
                  className="no-underline hover:no-underline flex items-center"
                >
                  Voir les professeurs disponibles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60 font-medium tracking-wide uppercase">
              Sans engagement • 100% Gratuit pour les parents
            </p>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* FAQ SECTION                               */}
        {/* ------------------------------------------ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">
                Questions fréquentes
              </h2>
              <p className="text-muted-foreground">
                Tout ce que vous devez savoir pour commencer.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl px-4 bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-lg font-semibold py-5 hover:no-underline text-left text-foreground/90">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
