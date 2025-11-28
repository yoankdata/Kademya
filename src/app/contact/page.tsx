// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, ArrowRight, HelpCircle, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact – Kademya',
  description:
    'Contactez l’équipe Kademya pour toute question, demande d’aide ou partenariat.',
};

export default function ContactPage() {
  const whatsappUrl =
    'https://wa.me/33760164998?text=Bonjour%20Kademya%2C%20j%E2%80%99aimerais%20avoir%20plus%20d%E2%80%99informations%20sur%20la%20plateforme.';

  // Couleurs de la marque (utilisées via style inline ou config tailwind)
  const PRIMARY = '#1A3626';
  // const ACCENT = '#6BBD78'; // Utilisé via les classes emerald de Tailwind pour la variation

  return (
    <main className="relative min-h-screen bg-gray-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* BACKGROUND DECORATION: Dégradé subtil pour un effet premium */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-[100px]" />
        <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-50/40 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">

        {/* HERO HEADER */}
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-1.5 text-xs font-medium text-emerald-800 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Support disponible 7j/7
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-6">
            Entrez en contact <span className="relative whitespace-nowrap" style={{ color: PRIMARY }}>
              avec nous
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Une question sur la plateforme ? Une idée de partenariat ? <br className="hidden md:block" />
            Notre équipe est là pour vous répondre rapidement.
          </p>
        </header>

        {/* LAYOUT GRID */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">

          {/* GAUCHE : INFOS DE CONTACT (5 colonnes) */}
          <section className="lg:col-span-5 space-y-6">

            {/* Carte WhatsApp (Mise en avant Premium) */}
            <div
              className="relative overflow-hidden rounded-3xl p-6 shadow-xl transition-transform hover:scale-[1.01]"
              style={{ backgroundColor: PRIMARY }}
            >
              {/* Texture de fond légère */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <MessageCircle className="h-6 w-6 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discussion instantanée</h3>
                  <p className="text-emerald-100/80 text-sm">
                    La méthode la plus rapide. Obtenez une réponse en quelques minutes via WhatsApp.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50"
                >
                  <span>Démarrer la discussion</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Cartes Emails */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Carte Aide */}
              <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Aide & Support</h3>
                    <p className="mt-1 text-xs text-gray-500 mb-3">Pour les parents, élèves et professeurs.</p>
                    <a href="mailto:assistance.kademya@gmail.com" className="text-sm font-medium text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-500 transition-all">
                      assistance.kademya@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Carte Partenaires */}
              <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Écoles & Partenaires</h3>
                    <p className="mt-1 text-xs text-gray-500 mb-3">Pour les demandes institutionnelles.</p>
                    <a href="mailto:contact.kademya@gmail.com" className="text-sm font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-500 transition-all">
                      contact.kademya@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center lg:text-left">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-700 transition-colors">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Retour à l&apos;accueil
              </Link>
            </div>
          </section>

          {/* DROITE : FORMULAIRE (7 colonnes) */}
          <section className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyer un email</h2>

              <form
                action="mailto:assistance.kademya@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                {/* HONEYPOT FIELD (Anti-spam) */}
                <div className="opacity-0 absolute -z-10 h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                    <input
                      id="name"
                      name="Nom"
                      type="text"
                      required
                      placeholder="Koffi Ahoua"
                      className="w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Adresse email</label>
                    <input
                      id="email"
                      name="Email"
                      type="email"
                      required
                      placeholder="jean@exemple.com"
                      className="w-full rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-700">Je suis un(e)</label>
                  <div className="relative">
                    <select
                      id="type"
                      name="Profil"
                      className="w-full appearance-none rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 transition-all"
                      defaultValue="Parent / Élève"
                    >
                      <option>Parent / Élève</option>
                      <option>Professeur</option>
                      <option>École / Partenaire</option>
                      <option>Autre</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={6}
                    placeholder="Comment pouvons-nous vous aider aujourd'hui ?"
                    className="w-full resize-none rounded-xl border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    Envoyer le message
                    <Mail className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                  </button>
                </div>

                <p className="text-center text-xs text-gray-400 mt-4">
                  En envoyant ce formulaire, vous acceptez notre{' '}
                  <Link href="/politique-confidentialite" className="underline hover:text-gray-600">
                    Politique de confidentialité
                  </Link>.
                </p>
              </form>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}