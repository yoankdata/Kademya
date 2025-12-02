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

import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/10">
      <main className="flex-grow">
        <FadeIn>

          {/* ------------------------------------------ */}
          {/* HERO SECTION */}
          {/* ------------------------------------------ */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-foreground leading-[1.1]">
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
                        className="object-cover w-full h-[550px]"
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

          {/* FEATURED TEACHERS */}
          <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
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

          {/* HOW IT WORKS */}
          <section className="py-32 bg-background relative overflow-hidden">
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

          {/* SECURITY */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-16 md:text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">La confiance, c&apos;est la base.</h2>
                <p className="text-lg text-muted-foreground">
                  Nous avons conçu Kademya pour offrir aux parents d&apos;Abidjan une tranquillité d&apos;esprit totale.
                  Voici nos engagements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="md:col-span-2 bg-white dark:bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex-1 space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Identité Vérifiée à 100%</h3>
                    <p className="text-muted-foreground">Nous collectons et vérifions manuellement les pièces d&apos;identité de chaque professeur. Pas de faux profils, pas de mauvaises surprises.</p>
                  </div>

                  <div className="w-full md:w-1/3 bg-gray-50 rounded-2xl p-4 border border-gray-100 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-gray-300" />
                      <div className="h-2 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded mb-2" />
                    <div className="h-2 w-2/3 bg-gray-200 rounded" />
                    <div className="mt-4 flex justify-end">
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Vérifié
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 bg-white dark:bg-card border border-border/50 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">0% Commission</h3>
                  <p className="text-muted-foreground mb-6">
                    Les parents paient le professeur directement (main à main ou Mobile Money).
                    Modèle clair : gratuit pour les parents, 10 000 FCFA / mois pour les professeurs.
                  </p>
                  <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <Banknote className="w-48 h-48" />
                  </div>
                </div>

                <div className="md:col-span-1 bg-white dark:bg-card border border-border/50 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Avis Certifiés</h3>
                  <p className="text-muted-foreground">
                    Seuls les parents ayant réellement contacté un professeur peuvent laisser un avis.
                  </p>
                </div>

                <div className="md:col-span-2 bg-primary text-primary-foreground rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col justify-center group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">Charte de Qualité Kademya</h3>
                      <p className="text-primary-foreground/80 max-w-md">Un engagement mutuel pour l&apos;excellence pédagogique et le respect des familles.</p>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors whitespace-nowrap"
                      asChild
                    >
                      <Link href="/charte-qualite">Lire la charte</Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-primary z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage:
                  `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 tracking-tight text-white">
                Ne laissez pas les lacunes s&apos;installer.
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                Donnez à votre enfant les moyens de réussir son année scolaire dès d&apos;aujourd&apos;hui.
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

          {/* FAQ */}
          <section className="py-24 bg-background">
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

        </FadeIn>
      </main>
    </div>
  );
}
