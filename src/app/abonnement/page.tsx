// src/app/abonnement/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  Wallet,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Abonnement professeur – Kademya',
  description:
    'Activez votre abonnement Kademya pour apparaître dans le catalogue des professeurs.',
};

export default function abonnementPage() {
  // Numéro WhatsApp support : +33 7 60 16 49 98
  const whatsappUrl =
    'https://wa.me/33760164998?text=Bonjour%20Kademya%2C%20je%20viens%20de%20payer%20mon%20abonnement%20professeur%20(10%20000%20FCFA)%20et%20je%20vous%20envoie%20la%20preuve%20de%20paiement.';

  const PRIMARY = '#1A3626';
  const ACCENT = '#6BBD78';

  return (
    <main className="bg-gray-50">
      <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        {/* Bandeau discret en fond */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-emerald-50/80 to-transparent" />

        {/* HEADER */}
        <header className="mb-10 md:mb-12">
          <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm ring-1 ring-emerald-100">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Espace professeur Kademya
          </div>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Activez votre abonnement
              </h1>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-700 leading-relaxed">
                Pour apparaître dans le catalogue des professeurs Kademya et être
                visible auprès des familles d&apos;Abidjan, l’abonnement est fixé à{' '}
                <span className="font-semibold">10&nbsp;000&nbsp;FCFA par mois</span>.
                Votre profil n’est affiché qu’une fois l’abonnement activé.
              </p>
              <p className="mt-2 text-xs md:text-sm text-gray-500">
                L&apos;abonnement est mensuel. Pour rester visible, il suffit de
                renouveler le paiement de 10&nbsp;000&nbsp;FCFA chaque mois.
              </p>
            </div>

            <div className="rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-gray-200">
              <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                Formule actuelle
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  10&nbsp;000&nbsp;FCFA
                </span>
                <span className="text-xs md:text-sm text-gray-600">/ mois</span>
              </div>
              <p className="mt-1 text-[11px] text-gray-500">
                Sans engagement compliqué. Activation par l’équipe Kademya après
                vérification du paiement.
              </p>
            </div>
          </div>
        </header>

        {/* GRID PRINCIPALE */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
          {/* COLONNE GAUCHE : AVANTAGES + FIABILITÉ */}
          <section className="space-y-6">
            {/* Carte offre */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  Votre abonnement Kademya
                </h2>
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>

              <p className="text-sm text-gray-700 mb-4">
                L’abonnement Kademya vous permet d’être visible auprès des parents,
                avec un profil vérifié et mis en avant dans le catalogue.
              </p>

              <ul className="space-y-3 text-sm text-gray-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>Profil affiché dans le catalogue des professeurs Kademya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>
                    Badge <span className="font-semibold">“professeur vérifié”</span>{' '}
                    après contrôle de vos documents.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>
                    Contact direct des parents via WhatsApp et téléphone depuis votre
                    fiche.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>
                    Présence sur une plateforme dédiée aux familles d’Abidjan, avec
                    un positionnement sérieux et encadré.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bloc “Important” */}
            <div className="rounded-2xl bg-amber-50/80 p-5 ring-1 ring-amber-100">
              <p className="mb-2 text-sm font-semibold text-amber-900 flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100">
                  !
                </span>
                Ce qu’il faut retenir
              </p>
              <ul className="space-y-1.5 text-xs md:text-sm text-amber-900">
                <li>
                  Tant que votre abonnement n’est pas activé, votre profil reste{' '}
                  <span className="font-semibold">invisible pour les parents</span>.
                </li>
                <li>
                  Après validation du paiement par l’équipe, votre profil passe en{' '}
                  <span className="font-semibold">“Abonnement actif”</span> et apparaît
                  dans la recherche.
                </li>
              </ul>
            </div>

            {/* Lien retour */}
            <div className="pt-1">
              <Link
                href="/"
                className="inline-flex items-center text-xs md:text-sm text-emerald-700 underline hover:text-emerald-800"
              >
                ← Retour à l&apos;accueil
              </Link>
            </div>
          </section>

          {/* COLONNE DROITE : MOYENS DE PAIEMENT + WHATSAPP */}
          <section className="space-y-6">
            {/* MOYENS DE PAIEMENT */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 md:p-7">
              <div className="mb-4 flex items-center gap-2">
                <Wallet className="h-5 w-5 text-emerald-700" />
                <h2 className="text-base md:text-lg font-semibold text-gray-900">
                  Moyens de paiement acceptés
                </h2>
              </div>

              <p className="text-xs md:text-sm text-gray-700 mb-4">
                Choisissez le moyen de paiement que vous utilisez déjà au quotidien.
                Le montant à régler est toujours de{' '}
                <span className="font-semibold">10&nbsp;000&nbsp;FCFA</span> pour un
                mois d’abonnement.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Wave */}
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-emerald-700" />
                    <p className="text-xs font-semibold text-gray-900">Wave</p>
                  </div>
                  <p className="text-[11px] text-gray-700">
                    Payer 10&nbsp;000&nbsp;FCFA via l&apos;application Wave au numéro :
                  </p>
                  <p className="mt-1 inline-flex items-center rounded-md bg-white px-2 py-1 font-mono text-[11px] font-semibold text-gray-900">
                    07&nbsp;XX&nbsp;XX&nbsp;XX&nbsp;XX
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Remplace par ton numéro Wave de réception Kademya.
                  </p>
                </div>

                {/* MTN MoMo */}
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-yellow-600" />
                    <p className="text-xs font-semibold text-gray-900">
                      MTN Mobile Money
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-700">
                    Payer 10&nbsp;000&nbsp;FCFA par MTN MoMo au numéro :
                  </p>
                  <p className="mt-1 inline-flex items-center rounded-md bg-white px-2 py-1 font-mono text-[11px] font-semibold text-gray-900">
                    05&nbsp;XX&nbsp;XX&nbsp;XX&nbsp;XX
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Remplace par ton numéro MTN Mobile Money officiel.
                  </p>
                </div>

                {/* Orange Money */}
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-orange-500" />
                    <p className="text-xs font-semibold text-gray-900">
                      Orange Money
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-700">
                    Payer 10&nbsp;000&nbsp;FCFA par Orange Money au numéro :
                  </p>
                  <p className="mt-1 inline-flex items-center rounded-md bg-white px-2 py-1 font-mono text-[11px] font-semibold text-gray-900">
                    07&nbsp;YY&nbsp;YY&nbsp;YY&nbsp;YY
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Remplace par ton numéro Orange Money de réception.
                  </p>
                </div>
              </div>
            </div>

            {/* ÉTAPES + WHATSAPP */}
            <div className="rounded-2xl bg-slate-900 text-slate-50 p-5 md:p-6 shadow-md relative overflow-hidden">
              <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-emerald-500/20" />
              <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] h-44 w-44 rounded-full bg-emerald-700/10" />

              <div className="relative space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20">
                    <MessageCircle className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Confirmer votre paiement à l’équipe Kademya
                    </h3>
                    <p className="text-xs md:text-sm text-slate-200 mb-2">
                      Après le paiement (Wave / MTN MoMo / Orange Money), envoyez la
                      capture d’écran ou la référence de transaction sur WhatsApp.
                      L’équipe active ensuite votre abonnement.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:bg-[#21be59] transition-colors"
                    >
                      <span>💬</span>
                      <span>Écrire à l’équipe Kademya</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <ul className="space-y-1 text-[11px] md:text-xs text-slate-200 pt-2">
                  <li className="flex items-start gap-1.5">
                    <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Dès activation, votre profil passe en “abonnement actif” et apparaît
                    dans la recherche.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Chaque mois, vous renouvelez simplement le paiement pour rester
                    visible.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
