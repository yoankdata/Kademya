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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import FeaturedTeachersSection from '@/components/teachers/FeaturedTeachersSection';
import { findImage } from '@/lib/placeholder-data';
import FadeIn from '@/components/FadeIn';
import { Reveal } from '@/components/ui/Reveal';

const heroImage = findImage('hero-image');




// GRID PATTERN FIX
function GridPattern() {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full stroke-primary/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={40}
          height={40}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 40V.5H40" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
    </svg>
  );
}

// FIXED FAQ ITEMS
const faqItems = [
  {
    question: "Les professeurs sur Kademya sont-ils vraiment vérifiés ?",
    answer:
      "Oui. Chaque professeur est vérifié avant d’être accepté : identité, expérience, cohérence du profil et avis. Seuls les enseignants sérieux, pédagogues et recommandés apparaissent sur la plateforme.",
  },
  {
    question: "Combien coûtent les cours sur Kademya ?",
    answer:
      "Chaque professeur fixe librement son prix. Ce tarif est affiché sur sa page de profil et vous donne un ordre d'idée du coût horaire. Le prix final est confirmé lors de votre échange direct avec le professeur.",
  },
  {
    question: "Kademya est-il payant ?",
    answer:
      "Pour les parents, Kademya est entièrement gratuit : la recherche et la prise de contact ne sont pas facturées. Pour les professeurs, l’apparition dans le catalogue est soumise à un abonnement à partir de 10 000 FCFA / mois, avec une offre mensuelle et une offre trimestrielle.",
  },
  {
    question: "Comment se passent les paiements des cours ?",
    answer:
      "Les paiements se font directement entre le parent et le professeur, en main propre ou via Mobile Money (Wave, Orange, MTN). Kademya ne touche aucune commission sur les cours.",
  },
  {
    question: "Quels niveaux et quelles matières sont disponibles ?",
    answer:
      "Vous pouvez trouver des professeurs pour le primaire, le collège, le lycée et parfois le supérieur. Les principales matières scolaires sont couvertes : mathématiques, français, anglais, physique-chimie, SVT, mais aussi d’autres disciplines selon les professeurs inscrits.",
  },
  {
    question: "Que faire si la collaboration avec un professeur ne me convient pas ?",
    answer:
      "Vous pouvez simplement arrêter les cours avec ce professeur et en contacter un autre via la plateforme. Vous pouvez également nous signaler tout comportement inapproprié afin que nous puissions revoir son profil et, si nécessaire, le retirer du catalogue.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/10">
      <main className="flex-grow">
        <FadeIn>
          {/* ------------------------------------------ */}
          {/* HERO SECTION */}
          {/* ------------------------------------------ */}
          <Reveal width="100%">
            <section className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />
              <GridPattern />
              <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-primary rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 blur-3xl opacity-20 w-64 h-64 bg-accent rounded-full pointer-events-none" />

              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                  {/* LEFT SIDE */}
                  <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                      <Verified className="mr-2 h-3.5 w-3.5" />
                      <span className="text-xs md:text-sm">Plateforme de confiance n°1 à Abidjan</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-foreground leading-[1.1]">
                      L&apos;excellence scolaire <br />
                      <span className="relative inline-block text-primary">
                        à portée de main
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                      </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                      Trouvez le professeur idéal pour votre enfant parmi une sélection vérifiée.
                      <span className="font-medium text-foreground"> Sans frais d&apos;agence, sans intermédiaire.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg" asChild className="h-14 px-8 rounded-full text-base font-bold">
                        <Link href="/enseignants">
                          Trouver un professeur <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-full text-base font-semibold">
                        <Link href="/devenir-enseignant">Je veux enseigner</Link>
                      </Button>
                    </div>

                    <div className="pt-6 flex justify-center lg:justify-start">
                      <div className="inline-flex items-center gap-4 p-2 pr-6 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-border/50 rounded-full shadow-sm">
                        <div className="flex -space-x-3 pl-2">
                          {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center bg-gray-100">
                              <User className="w-4 h-4 text-gray-400" />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">Approuvé par +50 parents</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative mx-auto lg:ml-auto w-full max-w-[550px] perspective-1000 group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl z-0" />

                    {heroImage && (
                      <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl bg-white transition-transform duration-700 ease-out group-hover:rotate-1">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="bg-accent text-white border-none">Mathématiques</Badge>
                            <Badge variant="outline" className="text-white border-white/40 backdrop-blur-sm">Terminale</Badge>
                          </div>
                          <p className="font-medium text-sm text-white/90">Cours de soutien à Cocody</p>
                        </div>

                        <Image
                          src={heroImage.imageUrl}
                          alt={heroImage.description}
                          width={600}
                          height={700}
                          className="object-cover w-full h-64 md:h-[550px]"
                          priority
                        />
                      </div>
                    )}

                    <div className="absolute -bottom-6 -right-6 z-30 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce-slow hidden sm:block">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <Verified className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Professeurs</p>
                          <p className="text-lg font-bold text-foreground">100% Vérifiés</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </Reveal>

          {/* FEATURED TEACHERS */}
          <Reveal width="100%">
            <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/20">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">
                      Les pépites du moment
                      <Sparkles className="inline-block w-8 h-8 text-yellow-400 ml-2" />
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                      Des professeurs passionnés, évalués par la communauté.
                    </p>
                  </div>
                  <Button variant="ghost" className="text-primary hover:bg-primary/10 group">
                    <Link href="/enseignants" className="flex items-center">
                      Voir tout le catalogue <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <FeaturedTeachersSection />
              </div>
            </section>
          </Reveal>

          {/* HOW IT WORKS */}
          <Reveal width="100%">
            <section className="py-16 md:py-32 bg-background relative overflow-hidden">
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                  <Badge variant="secondary" className="mb-4">Simple & Rapide</Badge>
                  <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">Comment ça marche ?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Search, title: '1. Recherchez', desc: "Filtrez par matière, niveau et commune. Notre algorithme vous propose les meilleurs profils à proximité." },
                    { icon: BookOpen, title: '2. Comparez', desc: "Consultez les expériences détaillées, les diplômes vérifiés et les avis laissés par d&apos;autres parents." },
                    { icon: Phone, title: '3. Contactez', desc: "Échangez directement via WhatsApp ou téléphone. Organisez le premier cours sans intermédiaire." },
                  ].map((step, idx) => (
                    <div key={idx} className="group relative bg-card hover:bg-secondary/20 border border-border/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>

                      <span className="absolute top-4 right-6 text-9xl font-headline font-black text-foreground/5 pointer-events-none select-none">
                        {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* SECURITY - BENTO GRID */}
          <Reveal width="100%">
            <section className="py-12 md:py-24 bg-secondary/30">
              <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">La confiance, c&apos;est la base.</h2>
                  <p className="text-lg text-muted-foreground">
                    Nous avons conçu Kademya pour offrir aux parents d&apos;Abidjan une tranquillité d&apos;esprit totale.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

                  {/* 1. IDENTITÉ VÉRIFIÉE */}
                  <div className="group relative bg-white dark:bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[420px] overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Identité Vérifiée</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Chaque professeur est vérifié manuellement. Nous validons pièces d&apos;identité et diplômes pour garantir une sécurité totale.
                      </p>
                    </div>

                    {/* Visual: ID Card Mockup */}
                    <div className="relative mt-8 w-full h-32 bg-gray-50 rounded-t-xl border-t border-x border-gray-100 p-5 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                      <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0" />
                        <div className="space-y-2 w-full">
                          <div className="h-3 w-2/3 bg-gray-200 rounded-full" />
                          <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> VÉRIFIÉ
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. ZÉRO COMMISSION */}
                  <div className="group relative bg-white dark:bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[420px] overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Banknote className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Zéro Commission</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm">
                        Un modèle transparent et équitable. Vous payez le professeur directement, sans aucun frais caché ni intermédiaire.
                      </p>
                    </div>

                    {/* Visual: Price Block */}
                    <div className="relative mt-8 bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50 group-hover:bg-emerald-50 transition-colors">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-600">Prix du cours</span>
                        <span className="font-bold text-gray-900">10 000 F</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-emerald-200/50">
                        <span className="text-sm font-bold text-emerald-700">Pour le prof</span>
                        <span className="font-bold text-emerald-700">10 000 F</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. AVIS CERTIFIÉS */}
                  <div className="group relative bg-white dark:bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[420px] overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-7 h-7 fill-current" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Avis Certifiés</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm">
                        La confiance se mérite. Seuls les parents ayant réellement effectué des cours peuvent noter nos professeurs.
                      </p>
                    </div>

                    {/* Visual: Review Card */}
                    <div className="relative mt-8 bg-amber-50/30 rounded-xl p-5 border border-amber-100/50">
                      <div className="flex gap-1 text-amber-400 mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 italic">"Excellent pédagogue, ma fille a repris confiance..."</p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-200" />
                        <span className="text-xs font-bold text-gray-900">Mme. Kouassi</span>
                      </div>
                    </div>
                  </div>

                  {/* 4. CHARTE QUALITÉ */}
                  <div className="group relative bg-white dark:bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[420px] overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Charte Qualité</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
                        Nous ne faisons aucun compromis sur la qualité. Ponctualité, pédagogie et bienveillance sont nos piliers.
                      </p>

                      <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors" asChild>
                        <Link href="/charte-qualite">
                          Découvrir nos engagements <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visual: Checklist */}
                    <div className="relative mt-8 bg-primary/5 rounded-xl p-5 border border-primary/10">
                      <div className="space-y-3">
                        {['Pédagogie bienveillante', 'Suivi régulier', 'Ponctualité garantie'].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                            <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                            </div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* CTA */}
          <Reveal width="100%">
            <section className="relative py-16 md:py-32 overflow-hidden">
              <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage:
                    `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />
              </div>

              <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-6xl font-headline font-bold mb-6 tracking-tight text-white">
                  Ne laissez pas les lacunes s&apos;installer.
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                  Donnez à votre enfant les moyens de réussir son année scolaire dès aujourd&apos;hui.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-16 px-10 rounded-full text-primary font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="/enseignants">Voir les professeurs disponibles</Link>
                  </Button>
                </div>
                <p className="mt-8 text-sm text-white/60 font-medium uppercase tracking-widest">
                  Aucun paiement requis pour chercher
                </p>
              </div>
            </section>
          </Reveal>

          {/* FAQ */}
          <Reveal width="100%">
            <section className="py-12 md:py-24 bg-background">
              <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl font-headline font-bold text-center mb-12">Questions fréquentes</h2>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-border/60 rounded-xl px-2 data-[state=open]:bg-secondary/10 transition-colors"
                    >
                      <AccordionTrigger className="text-lg font-medium py-5 px-4 hover:no-underline text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 px-4 text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          </Reveal>

        </FadeIn>
      </main>
    </div >
  );
}
