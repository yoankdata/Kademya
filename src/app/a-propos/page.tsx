import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  GraduationCap
} from 'lucide-react';
import { findImage } from '@/lib/placeholder-data';
import { Pattern } from '@/components/pattern';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const aboutImage = findImage('about-us');

export default function AboutPage() {
  return (
    <div className="bg-background overflow-hidden">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-b from-primary/5 to-background border-b border-border/40">
        {/*
          Bloc Pattern retiré ici pour un look plus épuré
          <div className="absolute inset-0 opacity-[0.15]">
            <Pattern />
          </div>
        */}

        <div className="container px-4 mx-auto relative z-10 text-center">
          <Badge
            variant="outline"
            className="mb-6 py-1.5 px-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full"
          >
            🚀 Une nouvelle ère pour le soutien scolaire
          </Badge>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto leading-[1.1]">
            Réinventer l&apos;éducation à{' '}
            <span className="text-primary relative inline-block">
              Abidjan
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10"
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

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Plus qu&apos;une plateforme, Kademya est le pont de confiance entre
            des professeurs talentueux et des élèves ambitieux.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-primary/25 transition-all"
              asChild
            >
              <a href="/enseignants">
                Trouver un professeur
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base rounded-full bg-background/50 backdrop-blur-sm"
              asChild
            >
              <a href="#story">Découvrir notre histoire</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ======================== STATS / PROOF ======================== */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Profils Vérifiés', value: '100%', icon: ShieldCheck },
              { label: 'Commission', value: '0%', icon: Zap },
              { label: 'Satisfaction', value: '4.9/5', icon: CheckCircle2 },
              { label: 'Local', value: 'Abidjan', icon: MapPin }
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-3xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== NOTRE HISTOIRE (Split Layout) ======================== */}
      <section id="story" className="py-24 container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] rotate-1 hover:rotate-0 transition-transform duration-500">
              {aboutImage ? (
                <Image
                  src={aboutImage.imageUrl}
                  alt="Fondateurs de Kademya travaillant ensemble"
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  Image placeholder
                </div>
              )}
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-xl border border-border max-w-[200px] hidden md:block">
              <p className="text-sm font-semibold text-primary mb-1">
                Notre engagement
              </p>
              <p className="text-xs text-muted-foreground">
                Rendre l&apos;éducation accessible à tous, sans barrières.
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Né d&apos;un constat simple à{' '}
                <span className="text-primary">Abidjan</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tout a commencé par une observation : trouver un bon
                  professeur particulier à Abidjan relevait du parcours du
                  combattant. Entre le bouche-à-oreille incertain et les
                  petites annonces non vérifiées, les parents manquaient de
                  visibilité et de confiance.
                </p>
                <p>
                  D&apos;un autre côté, des centaines d&apos;étudiants brillants
                  et de pédagogues passionnés cherchaient à transmettre leur
                  savoir, mais n&apos;avaient aucun espace professionnel pour
                  valoriser leurs compétences.
                </p>
                <p className="font-medium text-foreground border-l-4 border-primary pl-4">
                  Nous avons créé Kademya pour combler ce vide : une plateforme
                  transparente, humaine et sécurisée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== NOTRE MODÈLE ======================== */}
      <section className="py-20 border-y border-border/40 bg-background/60">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="space-y-6 text-center mb-10">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 text-xs tracking-wide uppercase">
              Modèle simple et transparent
            </Badge>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground">
              Comment Kademya se finance ?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous avons choisi un modèle clair, qui protège à la fois les
              familles et les professeurs&nbsp;:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card/70 backdrop-blur-sm border border-border/60">
              <CardContent className="p-6 space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Pour les professeurs
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  L&apos;inscription est{' '}
                  <span className="font-semibold text-foreground">
                    100% gratuite
                  </span>
                  . Pour être visible dans le catalogue Kademya, le professeur
                  souscrit à un abonnement simple de{' '}
                  <span className="font-semibold text-foreground">
                    10 000 FCFA / mois
                  </span>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-sm border border-border/60">
              <CardContent className="p-6 space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Pour les familles
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kademya ne prend{' '}
                  <span className="font-semibold text-foreground">
                    aucune commission
                  </span>{' '}
                  sur les cours. Les parents paient directement le professeur
                  (Mobile Money, espèces, virement…). La plateforme sert de
                  vitrine et de filtre de confiance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-sm border border-border/60">
              <CardContent className="p-6 space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Notre position
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Notre rôle est de rendre les professeurs visibles, rassurer
                  les parents et structurer le marché. Pas de frais cachés, pas
                  de pourcentage sur le travail des enseignants : seulement un
                  abonnement mensuel pour la visibilité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ======================== NOS VALEURS (Grid Cards) ======================== */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
              Les piliers de Kademya
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous ne sommes pas juste un annuaire. Nous sommes une communauté
              bâtie sur des principes forts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Confiance Absolue',
                desc: "Nous vérifions manuellement chaque profil (identité, diplômes). La sécurité de vos enfants est notre priorité non négociable.",
                color: 'text-green-600',
                bg: 'bg-green-600/10'
              },
              {
                icon: HeartHandshake,
                title: 'Proximité Humaine',
                desc: "Le digital est un catalyseur de rencontre, l'humain en reste le cœur vibrant. Nous privilégions et encourageons les échanges directs, locaux et authentiques.",
                color: 'text-blue-600',
                bg: 'bg-blue-600/10'
              },
              {
                icon: GraduationCap,
                title: 'Excellence Accessible',
                desc: "La qualité est un droit, pas un luxe. Nous œuvrons pour une tarification standardisée et équitable, rendant l'excellence accessible à tous, en toute transparence.",
                color: 'text-purple-600',
                bg: 'bg-purple-600/10'
              }
            ].map((item, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CONTACT SECTION ======================== */}
      <section id="contact" className="py-24 container px-4 mx-auto">
        <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="font-headline text-3xl md:text-5xl font-bold">
                Une question ?
                <br />
                L&apos;équipe est là pour vous.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Que vous soyez parent cherchant le meilleur pour son enfant, ou
                professeur souhaitant rejoindre l&apos;aventure, nos lignes sont
                ouvertes.
              </p>

              <div className="space-y-4 pt-8">
                <a
                  href="mailto:contact.kademya@gmail.com"
                  className="flex items-center p-4 bg-background rounded-xl border hover:border-primary transition-colors group max-w-sm mx-auto"
                >
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">
                      contact.kademya@gmail.com
                    </p>
                  </div>
                </a>

                {/* Simple Map Visualization or Illustration Area */}
                <div className="relative h-full bg-background rounded-2xl border p-2 shadow-sm max-w-sm mx-auto">
                  <div className="w-full h-full bg-muted/30 rounded-xl flex flex-col items-center justify-center p-8 text-center pattern-grid-lg">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 animate-bounce">
                      <MapPin className="w-8 h-8 text-primary fill-primary/20" />
                    </div>
                    <h3 className="font-bold text-lg">Basés à Bingerville</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== FINAL CTA (COHÉRENT) ======================== */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background px-4 relative overflow-hidden border-t border-border/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 text-xs tracking-wide uppercase">
            Rejoignez la communauté Kademya
          </Badge>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-snug">
            Prêt à faire évoluer l&apos;éducation à Abidjan&nbsp;?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Trouvez un enseignant vérifié ou créez votre profil en quelques
            minutes. Avec Kademya, parents et professeurs gagnent en confiance
            et en simplicité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all bg-primary text-white hover:bg-primary/90"
              asChild
            >
              <a href="/enseignants">
                Explorer les professeurs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/devenir-enseignant">Devenir professeur</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
