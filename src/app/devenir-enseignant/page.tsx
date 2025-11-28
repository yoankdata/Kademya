import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Zap,
  Users,
  GraduationCap,
  ArrowRight,
  Check,
  Coins,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { findImage } from '@/lib/placeholder-data';

const pageImage = findImage('become-teacher');

// --- COMPOSANTS DECORATIFS ---
const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-primary/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="grid-pattern-teacher"
        width={40}
        height={40}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 40V.5H40" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-teacher)" />
  </svg>
);

export default function BecomeATeacherPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden selection:bg-primary/10">

      {/* ======================== HERO SECTION ======================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Ambiance & Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-0" />
        <GridPattern />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />

        <div className="relative z-10 container px-4 mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary/20 shadow-sm text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span>Rejoignez l'élite des professeurs à Abidjan</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground">
            Enseignez librement. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600 relative">
              Gagnez 100% de vos tarifs.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Fini les commissions abusives. Kademya est la plateforme qui vous connecte directement aux parents.
            <span className="font-medium text-foreground"> Vous fixez vos règles, vous gardez tout ce que vous gagnez.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <Link href="/devenir-enseignant/formulaire">
                Créer mon profil maintenant <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <div className="flex flex-col items-start text-left px-4">
              <div className="flex -space-x-2 mb-1">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background" />)}
              </div>
              <span className="text-xs text-muted-foreground font-medium">Rejoignez nos profs</span>
            </div>
          </div>

          {/* Value Props Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              { icon: ShieldCheck, text: "Profil vérifié & sécurisé" },
              { icon: Smartphone, text: "Paiement direct (Mobile Money)" },
              { icon: TrendingUp, text: "0% de commission" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground/80 bg-background/50 backdrop-blur border border-border/50 px-4 py-2 rounded-full shadow-sm">
                <item.icon className="w-4 h-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ======================== VALUE PROPOSITION (REPLACED COMPARISON) ======================== */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* TEXTE : Approche qualitative */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/40 text-primary bg-primary/5">
                  Carrière & Visibilité
                </Badge>
                <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight text-foreground">
                  Votre talent mérite <br />
                  <span className="text-primary relative inline-block">
                    d'être reconnu.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Kademya n'est pas une simple plateforme d'annonces. C'est un environnement professionnel conçu pour valoriser votre parcours académique et pédagogique auprès des familles qui cherchent la qualité.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Une vitrine professionnelle",
                    desc: "Un profil complet qui met en avant vos diplômes, votre méthodologie et votre expérience.",
                    icon: Users
                  },
                  {
                    title: "La confiance avant tout",
                    desc: "Le badge 'Vérifié' rassure immédiatement les parents et déclenche plus de contacts qualifiés.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Gestion simplifiée",
                    desc: "Recevez les demandes directement sur WhatsApp. Discutez, planifiez, enseignez. C'est tout.",
                    icon: Zap
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 w-10 h-10 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VISUEL : Mockup abstrait d'un profil valorisé */}
            <div className="relative mx-auto w-full max-w-md perspective-1000">
              {/* Effet de brillance arrière */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-primary/20 blur-2xl transform -rotate-6 scale-95" />

              <Card className="relative bg-background/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2rem] overflow-hidden p-6">

                {/* Header du faux profil */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-md relative">
                      {/* Pastille de présence */}
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="h-5 w-32 bg-foreground/10 rounded-md mb-2" />
                      <div className="h-3 w-20 bg-foreground/5 rounded-md" />
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className="w-3 h-3 text-yellow-400 fill-current">★</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Vérifié
                  </Badge>
                </div>

                {/* Corps du profil (Abstrait) */}
                <div className="space-y-3 mb-8">
                  <div className="h-3 w-full bg-foreground/5 rounded-full" />
                  <div className="h-3 w-5/6 bg-foreground/5 rounded-full" />
                  <div className="h-3 w-4/6 bg-foreground/5 rounded-full" />
                </div>

                {/* Tags de compétences */}
                <div className="flex gap-2 mb-8 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Mathématiques</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">Physique</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">Lycée</span>
                </div>

                {/* Notification flottante (Social Proof) */}
                <div className="absolute bottom-6 right-6 left-6 bg-white dark:bg-card border border-border/50 shadow-xl rounded-xl p-4 animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Nouvelle demande</p>
                      <p className="text-sm font-bold text-foreground">"Bonjour, êtes-vous disponible pour..."</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* ======================== PRICING & VALUE (PREMIUM CARD) ======================== */}
      <section id="pricing" className="py-24 bg-[#111827] text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div className="space-y-8">
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-white">
                Un investissement minime, <br />
                <span className="text-green-400">rentabilisé immédiatement.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Le modèle Kademya est conçu pour vous avantager. Plutôt que de vous taxer sur chaque heure, nous fonctionnons avec un abonnement fixe, transparent et sans engagement.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Visibilité prioritaire',
                  'Badge "Vérifié"',
                  'Accès aux demandes',
                  '0% de commission',
                  'Support dédié',
                  'Chat avec les parents',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card - GLASSMOPHISM */}
            <div className="relative mx-auto w-full max-w-md perspective-1000">
              {/* Glow Behind */}
              <div className="absolute -inset-2 bg-gradient-to-b from-green-400 to-primary rounded-[2rem] blur-xl opacity-20" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-400 to-primary" />

                <div className="p-8 text-center border-b border-white/5">
                  <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4 border border-green-500/20">
                    Offre Professeur
                  </div>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-6xl font-extrabold text-white tracking-tight">
                      10 000
                    </span>
                    <span className="text-xl font-bold text-gray-400">FCFA</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">/ mois, sans engagement</p>
                </div>

                <div className="p-8">
                  <div className="bg-white/5 rounded-xl p-4 mb-8 text-center border border-white/5">
                    <p className="text-sm font-medium text-white">
                      💡 Remboursé dès votre <span className="text-green-400 font-bold">1ère heure de cours</span>.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full h-14 text-lg font-bold rounded-xl bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-lg"
                  >
                    <Link href="/devenir-enseignant/formulaire">Je crée mon profil</Link>
                  </Button>

                  <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                    {/* Placeholder for Mobile Money Logos using simple text for now */}
                    <span className="text-[10px] font-bold text-white border border-white/30 px-2 py-1 rounded">WAVE</span>
                    <span className="text-[10px] font-bold text-white border border-white/30 px-2 py-1 rounded">ORANGE</span>
                    <span className="text-[10px] font-bold text-white border border-white/30 px-2 py-1 rounded">MTN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== HOW IT WORKS (TIMELINE) ======================== */}
      <section className="py-24 container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Processus Simplifié</Badge>
          <h2 className="font-headline text-3xl font-bold">Lancez votre activité en 3 étapes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />

          {[
            {
              step: '01',
              title: 'Profil',
              text: 'Créez votre fiche enseignant en quelques minutes avec vos informations, matières, niveaux et photo.',
              icon: Users
            },
            {
              step: '02',
              title: 'Activation',
              text: "Après validation de vos documents, réglez l'abonnement mensuel pour activer votre visibilité.",
              icon: ShieldCheck
            },
            {
              step: '03',
              title: 'Enseignement',
              text: 'Recevez vos premières demandes sur WhatsApp, organisez vos cours et encaissez directement.',
              icon: GraduationCap
            },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group bg-background p-6 rounded-2xl hover:bg-secondary/20 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== FAQ SECTION ======================== */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="font-headline text-3xl font-bold text-center mb-12">Questions fréquentes</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Comment suis-je payé par les parents ?", a: "C'est très simple : directement. Le parent vous paie à la fin du cours ou selon votre accord. Kademya n'intervient pas dans la transaction." },
              { q: "Quels documents pour la vérification ?", a: "Une pièce d'identité valide et une preuve de votre niveau d'études (diplôme ou carte étudiante). Cela rassure énormément les parents." },
              { q: "Puis-je arrêter l'abonnement quand je veux ?", a: "Oui. L'abonnement est mensuel et sans engagement. Vous pouvez mettre votre profil en pause à tout moment." },
              { q: "Comment payer l'abonnement ?", a: "Le paiement se fait par Mobile Money (Wave, MTN, Orange) directement depuis votre espace personnel après inscription." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-background rounded-xl border px-2 shadow-sm data-[state=open]:border-primary/30 transition-all">
                <AccordionTrigger className="text-lg font-medium py-5 px-4 hover:no-underline text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 px-4 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}