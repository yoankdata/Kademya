// src/app/charte-qualite/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import {
  Shield,
  Clock,
  Star,
  MessageCircle,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Charte de Qualité Kademya | Côte d’Ivoire',
  description:
    "Découvrez les engagements d'Kademya et de ses professeurs : professionnalisme, sécurité, pédagogie adaptée au contexte ivoirien et suivi sérieux des élèves.",
};

export default function Page() {
  return (
    <div className="bg-background">
      {/* Bandeau haut */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Charte de Qualité Kademya
            </p>
            <h1 className="text-3xl md:text-4xl font-headline font-semibold text-foreground">
              La promesse Kademya aux parents et aux élèves à Abidjan
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Kademya est une plateforme ivoirienne dédiée à la mise en relation entre parents
              et professeurs sérieux, fiables et vérifiés. Cette charte fixe le niveau
              d’exigence minimum pour tous les enseignants qui apparaissent sur notre
              plateforme.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <Shield className="w-3 h-3" />
                Sécurité & fiabilité
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <Star className="w-3 h-3" />
                Professeurs vérifiés & notés
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corps de la charte */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10 md:space-y-12">
        {/* Bloc résumé */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-headline font-semibold">
              Un cadre clair, adapté au quotidien des familles à Abidjan
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Entre les embouteillages, les contraintes d’horaires, les examens (CEPE, BEPC,
              BAC) et les différences de niveau entre écoles, les parents ont besoin de
              professeurs fiables, structurés et disponibles. La Charte de Qualité Kademya
              existe pour protéger les familles, valoriser les bons enseignants et écarter
              ceux qui ne respectent pas ce niveau d’exigence.
            </p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 md:px-6 md:py-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              En résumé
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Professeurs vérifiés (identité & diplômes)</li>
              <li>• Ponctualité et respect des engagements</li>
              <li>• Pédagogie adaptée au système ivoirien</li>
              <li>• Communication claire, principalement via WhatsApp</li>
              <li>• Avis clients vérifiés avant publication</li>
            </ul>
          </div>
        </div>

        {/* 1. Professionnalisme & Ponctualité */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              1. Professionnalisme & ponctualité
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            À Abidjan, la ponctualité est un vrai sujet (embouteillages, transports,
            contraintes familiales). Chaque professeur Kademya s’engage à respecter les
            horaires convenus et à prévenir à l’avance en cas d’imprévu.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Arriver à l’heure au domicile ou en ligne.</li>
            <li>
              • Prévenir le parent au moins <strong>3 heures avant</strong> en cas de retard
              ou d’annulation.
            </li>
            <li>• Adapter ses disponibilités en période d’examens (CEPE, BEPC, BAC).</li>
            <li>
              • Garder une présentation soignée et un comportement adapté à un cadre
              familial.
            </li>
          </ul>
        </section>

        {/* 2. Transparence avec les parents */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              2. Transparence totale avec les parents
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Les familles doivent savoir à qui elles confient leurs enfants. La transparence
            est une base non négociable.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Un tarif clair, constant et annoncé en FCFA.</li>
            <li>• Un numéro WhatsApp joignable pour l’organisation des cours.</li>
            <li>
              • Des informations exactes sur les diplômes, l’expérience et les matières
              enseignées.
            </li>
            <li>
              • Une biographie honnête, sans exagération des compétences ni promesses
              irréalistes.
            </li>
          </ul>
        </section>

        {/* 3. Pédagogie adaptée au système ivoirien */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              3. Pédagogie adaptée aux élèves ivoiriens
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Les cours doivent suivre le rythme et la réalité des élèves en Côte d’Ivoire, en
            respectant le programme officiel et le niveau réel de l’enfant.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Diagnostic initial des forces et difficultés de l’élève.</li>
            <li>• Petit plan de progression (par semaine / par mois) expliqué aux parents.</li>
            <li>• Explications patientes, sans jugement ni humiliation.</li>
            <li>• Références au programme ivoirien (MENET-FP), niveaux CP1 à Terminale.</li>
          </ul>
        </section>

        {/* 4. Fiabilité & Sécurité */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              4. Fiabilité & sécurité des familles
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Kademya ne laisse pas n’importe qui entrer dans la plateforme. Un minimum de
            vérifications est obligatoire pour protéger les familles.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Pièce d’identité ivoirienne ou étrangère valide.</li>
            <li>• Diplôme ou attestation en lien avec la matière enseignée.</li>
            <li>• Photo de profil correcte et professionnelle.</li>
            <li>• Zéro comportement inapproprié, en ligne ou au domicile.</li>
          </ul>
        </section>

        {/* 5. Communication & suivi */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              5. Communication claire & suivi régulier
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            WhatsApp est l’outil principal de communication. Il doit être utilisé avec
            sérieux et clarté.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Réponse dans un délai raisonnable (max 12 heures).</li>
            <li>• Confirmation des cours à l’avance.</li>
            <li>• Petits retours réguliers sur la progression de l’élève.</li>
            <li>• Ton professionnel, respectueux, sans familiarité excessive.</li>
          </ul>
        </section>

        {/* 6. Conduite & éthique */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              6. Conduite & éthique irréprochables
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            L’enseignant intervient dans un cadre intime : la famille. La ligne de conduite
            doit être claire.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Zéro discrimination (quartier, accent, origine, situation sociale).</li>
            <li>• Interdiction de promettre des notes garanties (“je te garantis 18/20”).</li>
            <li>• Distance professionnelle respectée avec les enfants.</li>
            <li>• Respect total des parents, même en cas de désaccord.</li>
          </ul>
        </section>

        {/* 7. Avis vérifiés */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              7. Avis vérifiés & modération stricte
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Les avis sont un outil puissant. Pour rester utiles, ils doivent être vrais,
            vérifiés et modérés.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Seuls les avis de vrais parents ayant eu un cours sont publiés.</li>
            <li>• Les avis agressifs, insultants ou manifestement faux sont supprimés.</li>
            <li>• Plusieurs mauvaises notes consécutives peuvent entraîner une suspension du profil.</li>
          </ul>
        </section>

        {/* 8. Abonnement & visibilité */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              8. Abonnement actif & visibilité contrôlée
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Pour apparaître dans les résultats Kademya, le professeur doit maintenir son
            profil à jour et son abonnement actif.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Un abonnement actif est nécessaire pour être visible dans le catalogue.</li>
            <li>• Le profil est automatiquement masqué en cas d’abonnement expiré.</li>
            <li>• Les professeurs les mieux notés et les plus réguliers sont mis en avant.</li>
          </ul>
        </section>

        {/* 9. Engagement Kademya */}
        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-lg md:text-xl font-headline font-semibold">
              9. Engagement Kademya envers les familles
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
            Kademya n’est pas seulement un site de mise en relation. C’est un filtre, une
            protection, et un standard pour les cours particuliers à Abidjan.
          </p>
          <ul className="mt-2 space-y-1.5 text-sm md:text-base text-muted-foreground">
            <li>• Vérification des documents fournis par les professeurs.</li>
            <li>• Contrôle régulier des profils et des avis.</li>
            <li>• Suspension des comptes qui ne respectent pas la charte.</li>
            <li>• Amélioration continue de la plateforme pour les familles ivoiriennes.</li>
          </ul>
        </section>

        {/* CTA bas de page */}
        <section className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card px-5 py-5 md:px-6 md:py-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">
              Vous êtes professeur et vous acceptez cette charte ?
            </p>
            <p className="text-xs md:text-sm text-muted-foreground max-w-lg">
              Créez votre profil sur Kademya, soumettez vos documents, et rejoignez les
              enseignants qui construisent un standard plus élevé pour les cours
              particuliers à Abidjan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/devenir-enseignant">Devenir professeur sur Kademya</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/enseignants">Voir les professeurs vérifiés</Link>
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}
