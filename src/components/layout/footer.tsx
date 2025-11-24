'use client'; // Maintenu pour la compatibilité Server/Client Component

import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail, // Ajout de Mail car utilisé dans le bouton d'aide
  // Suppression de HelpCircle car non utilisé
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // NOUVELLE PALETTE COULEUR
  const COLOR_BG_DARK = 'bg-[#1F2937]'; // Gris anthracite profond (plus doux que le vert foncé initial)
  const COLOR_ACCENT = '#6BBD78'; // Vert clair maintenu pour l'énergie et l'éducation
  const COLOR_BORDER = 'border-white/10'; // Ligne de séparation très subtile

  return (
    // Utilisation du nouveau fond sombre pour un rendu premium
    <footer className={`${COLOR_BG_DARK} !text-white mt-24 shadow-2xl shadow-black/30`}>
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">
        
        {/* Top part */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">
          
          {/* Logo + baseline */}
          <div className="space-y-4">
            <Link href="/" aria-label="Retour à l'accueil Edalia">
              <div className="inline-flex items-center gap-2">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M12 0L20.6603 14L12 28L3.33975 14L12 0Z"
                    fill={COLOR_ACCENT} // Vert clair d'accentuation
                  />
                  <path d="M3.33975 14L0 8H12L3.33975 14Z" fill="white" />
                  <path d="M3.33975 14L12 28H0L3.33975 14Z" fill="white" fillOpacity="0.5" /> 
                </svg>
                {/* Texte du logo en blanc */}
                <span className="font-headline text-3xl font-normal tracking-tight text-white">
                  Edalia
                </span>
              </div>
            </Link>

            {/* Texte de description en BLANC/70 (plus doux) */}
            <p className="max-w-xs text-sm text-white/70 leading-relaxed">
              Edalia connecte les professeurs passionnés et les élèves motivés
              à Abidjan, du primaire au supérieur.
            </p>

            {/* Tag Abidjan: Fond plus subtil et texte BLANC/80 */}
            <div className={`inline-flex items-center gap-2 rounded-full ${COLOR_BORDER} border bg-white/5 px-3 py-1 mt-2`}>
              <span className="h-2 w-2 rounded-full bg-[#6BBD78]" />
              <span className="text-xs font-medium text-white/80">
                Plateforme 100% dédiée aux familles d’Abidjan
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            
            {/* Col 1 */}
            <div>
              {/* Titre en vert clair accentué */}
              <h3 className="font-headline text-lg font-semibold" style={{ color: COLOR_ACCENT }}>
                Liens rapides
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {/* Liens en blanc/70, deviennent vert clair au survol */}
                <li><Link href="/teachers" className="text-white/70 hover:text-white transition-colors">Trouver un prof</Link></li>
                <li><Link href="/become-a-teacher" className="text-white/70 hover:text-white transition-colors">Devenir prof</Link></li>
                <li><Link href="/become-a-teacher#faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="font-headline text-lg font-semibold" style={{ color: COLOR_ACCENT }}>
                Edalia
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/about#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-6">
              <div>
                <h3 className="font-headline text-lg font-semibold" style={{ color: COLOR_ACCENT }}>
                  Besoin d&apos;aide ?
                </h3>

                {/* Bouton d'aide : Fond transparent/subtil et bordure verte. Texte en blanc. */}
                <Link
                  href="/about#contact"
                  className={`mt-4 inline-flex items-center gap-2 rounded-lg ${COLOR_BORDER} border px-4 py-2 text-sm font-medium !text-white hover:bg-white/10 transition-colors shadow-md`}
                >
                  <Mail className="h-4 w-4" style={{ color: COLOR_ACCENT }} /> 
                  <span>Parler à l’équipe Edalia</span>
                </Link>
              </div>

              <div>
                <h3 className="font-headline text-lg font-semibold" style={{ color: COLOR_ACCENT }}>
                  Suivez-nous
                </h3>
                {/* Icônes des réseaux sociaux en BLANC/70 par défaut, passent à l'accent au survol */}
                <div className="mt-4 flex items-center gap-4 text-white/70">
                  <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

          </nav>
        </div>

        {/* Bottom - Ligne de séparation plus douce */}
        <div className={`mt-10 border-t ${COLOR_BORDER} pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50`}>
          {/* Texte copyright et liens légaux en BLANC/50 */}
          <p className="text-white/50">&copy; {currentYear} Edalia Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="text-white/50 hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}