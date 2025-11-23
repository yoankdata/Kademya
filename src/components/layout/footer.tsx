import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  HelpCircle,
  Mail,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Utiliser !text-white pour s'assurer que le texte est blanc sur ce fond sombre.
    <footer className="bg-[#1A3626] !text-white mt-24">
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
                    fill="#6BBD78" // Vert clair d'accentuation
                  />
                  <path d="M3.33975 14L0 8H12L3.33975 14Z" fill="white" />
                  <path d="M3.33975 14L12 28H0L3.33975 14Z" fill="white" fillOpacity="0.7" />
                </svg>
                {/* Texte du logo en blanc */}
                <span className="font-headline text-3xl font-normal tracking-tight text-white">
                  Edalia
                </span>
              </div>
            </Link>

            {/* Texte de description en BLANC */}
            <p className="max-w-xs text-sm text-white leading-relaxed">
              Edalia connecte les professeurs passionnés et les élèves motivés
              à Abidjan, du primaire au supérieur.
            </p>

            {/* Tag Abidjan: Texte en BLANC */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3C644E] bg-[#3C644E]/40 px-3 py-1 mt-2">
              <span className="h-2 w-2 rounded-full bg-[#6BBD78]" />
              <span className="text-xs font-medium text-white">
                Plateforme 100% dédiée aux familles d’Abidjan
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            
            {/* Col 1 */}
            <div>
              {/* Titre en vert clair */}
              <h3 className="font-headline text-lg font-semibold !text-[#6BBD78]">
                Liens rapides
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {/* Liens en blanc par défaut, deviennent vert clair au survol */}
                <li><Link href="/teachers" className="text-white hover:text-[#6BBD78] transition-colors">Trouver un prof</Link></li>
                <li><Link href="/become-a-teacher" className="text-white hover:text-[#6BBD78] transition-colors">Devenir prof</Link></li>
                <li><Link href="/become-a-teacher#faq" className="text-white hover:text-[#6BBD78] transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="font-headline text-lg font-semibold !text-[#6BBD78]">
                Edalia
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-white hover:text-[#6BBD78] transition-colors">À propos</Link></li>
                <li><Link href="/about#contact" className="text-white hover:text-[#6BBD78] transition-colors">Contact</Link></li>
                {/* Le lien Blog a été supprimé ici */}
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-6">
              <div>
                <h3 className="font-headline text-lg font-semibold !text-[#6BBD78]">
                  Besoin d&apos;aide ?
                </h3>

                {/* Bouton d'aide : Texte en blanc forcé pour le bouton */}
                <Link
                  href="/about#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#6BBD78] bg-[#3C644E] px-4 py-2 text-sm font-medium !text-white hover:bg-[#4E7A5D] transition-colors shadow-md"
                >
                  <Mail className="h-4 w-4 text-[#6BBD78]" /> 
                  <span>Parler à l’équipe Edalia</span>
                </Link>
              </div>

              <div>
                <h3 className="font-headline text-lg font-semibold !text-[#6BBD78]">
                  Suivez-nous
                </h3>
                {/* Icônes des réseaux sociaux en BLANC par défaut, passent à l'accent au survol */}
                <div className="mt-4 flex items-center gap-4 text-white">
                  <Link href="#" aria-label="Facebook" className="hover:text-[#6BBD78] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Twitter" className="hover:text-[#6BBD78] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Instagram" className="hover:text-[#6BBD78] transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#3C644E] pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          {/* Texte copyright et liens légaux en BLANC */}
          <p className="text-white/70">&copy; {currentYear} Edalia Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-white">
            <Link href="/legal" className="text-white hover:text-[#6BBD78] transition-colors">Mentions légales</Link>
            <Link href="/privacy" className="text-white hover:text-[#6BBD78] transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}