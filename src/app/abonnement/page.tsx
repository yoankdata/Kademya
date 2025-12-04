import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Wallet,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Abonnement professeur – Kademya',
  description:
    'Activez votre abonnement Kademya pour apparaître dans le catalogue des professeurs.',
};

export default function abonnementPage() {
  // Numéro WhatsApp support : +33 7 60 16 49 98
  // Message générique compatible avec les deux offres
  const whatsappUrl =
    'https://wa.me/33760164998?text=Bonjour%20Kademya%2C%20je%20viens%20de%20payer%20mon%20abonnement%20professeur%20(offre%20mensuelle%20ou%20trimestrielle)%20et%20je%20vous%20envoie%20la%20preuve%20de%20paiement.';

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Modification ici : pt-24 (mobile) et pt-36 (desktop) pour l'espace sous la navbar */}
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 md:px-6 md:pb-14 md:pt-36">
        {/* Bandeau discret en fond */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-emerald-50/80 to-transparent" />

        {/* HEADER */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm ring-1 ring-emerald-100 mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Espace professeur Kademya
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Choisissez votre formule <br />
            <span className="text-emerald-700">et lancez-vous.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Activez votre visibilité dès maintenant. <br className="hidden md:block" />
            Aucun engagement, arrêtez quand vous voulez.
          </p>
        </header>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 items-start">

          {/* OFFRE MENSUELLE */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mensuel</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">10 000</span>
              <span className="text-lg text-gray-500 font-medium">FCFA / mois</span>
            </div>

            <p className="text-sm text-gray-600 mb-8 min-h-[40px]">
              Idéal pour tester la plateforme ou pour un besoin ponctuel.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Visibilité immédiate",
                "Badge \"Vérifié\"",
                "Accès aux demandes parents",
                "Sans engagement"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-12 font-semibold" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Choisir l'offre mensuelle
              </a>
            </Button>
          </div>

          {/* OFFRE TRIMESTRIELLE (RECOMMANDÉE) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-emerald-500 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md whitespace-nowrap">
              RECOMMANDÉ
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-gray-900">Trimestriel</h3>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-100">
                - 5 000 FCFA
              </Badge>
            </div>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-gray-900">25 000</span>
              <span className="text-lg text-gray-500 font-medium">FCFA / 3 mois</span>
            </div>

            <p className="text-sm text-gray-600 mb-8 min-h-[40px]">
              La meilleure option pour une visibilité continue et une économie immédiate.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Visibilité continue sur 3 mois",
                "Badge \"Vérifié\" prioritaire",
                "Économisez 5 000 FCFA",
                "Tranquillité d'esprit"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-12 font-bold shadow-lg shadow-emerald-200" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Choisir l'offre trimestrielle
              </a>
            </Button>
          </div>

        </div>

        {/* SECTION PAIEMENT & INFO */}
        <div className="grid gap-8 lg:grid-cols-2 items-start max-w-5xl mx-auto">

          {/* INFO & RASSURANCE */}
          <section className="space-y-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Pourquoi l'abonnement ?
                </h2>
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Kademya ne prend <strong>aucune commission</strong> sur vos cours. L'abonnement est notre seul modèle économique, ce qui nous permet de maintenir la plateforme, de vérifier les profils et de faire de la publicité pour vous trouver des élèves.
              </p>
              <div className="rounded-xl bg-amber-50 p-4 border border-amber-100">
                <p className="text-xs md:text-sm text-amber-900 flex gap-2">
                  <span className="font-bold">Important :</span>
                  Votre profil n'est visible qu'une fois l'abonnement activé par notre équipe.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </section>

          {/* MOYENS DE PAIEMENT */}
          <section className="space-y-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-7">
              <div className="mb-4 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-emerald-700" />
                <h2 className="text-base md:text-lg font-semibold text-gray-900">
                  Comment payer ?
                </h2>
              </div>

              <p className="text-sm text-gray-700 mb-6">
                Effectuez le transfert du montant correspondant à votre choix (10 000 ou 25 000 FCFA) sur l'un des numéros ci-dessous :
              </p>

              <div className="space-y-3">
                {/* Wave */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">W</div>
                    <span className="text-sm font-semibold text-gray-900">Wave</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded border">07 XX XX XX XX</span>
                </div>

                {/* Orange */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-orange-50/50 border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">OM</div>
                    <span className="text-sm font-semibold text-gray-900">Orange Money</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded border">07 YY YY YY YY</span>
                </div>

                {/* MTN */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-50/50 border border-yellow-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-[10px]">MoMo</div>
                    <span className="text-sm font-semibold text-gray-900">MTN Money</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded border">05 ZZ ZZ ZZ ZZ</span>
                </div>
              </div>
            </div>

            {/* CONFIRMATION */}
            <div className="rounded-2xl bg-slate-900 text-slate-50 p-6 shadow-lg relative overflow-hidden">
              <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />

              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Une fois le paiement effectué
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Envoyez la capture d'écran de la transaction à notre équipe sur WhatsApp pour activation immédiate.
              </p>

              <Button variant="secondary" size="sm" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-none" asChild>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Envoyer la preuve de paiement
                </a>
              </Button>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}