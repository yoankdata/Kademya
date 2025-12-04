// src/components/Footer.tsx
import Link from 'next/link';
import { Facebook, Mail } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-card text-card-foreground border-t border-border shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">

        {/* ================= TOP ================= */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">

          {/* Logo + Description */}
          <div className="space-y-6">
            <Logo variant="default" />

            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Kademya connecte les professeurs passionnés et les élèves motivés
              à Abidjan, du primaire au supérieur.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1.5 border border-secondary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">
                Plateforme 100% dédiée aux familles d’Abidjan
              </span>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

            {/* Colonne 1 */}
            <div>
              <h3 className="font-headline text-base font-semibold text-foreground mb-4">
                Liens rapides
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/enseignants" className="text-muted-foreground hover:text-primary transition-colors">
                    Trouver un prof
                  </Link>
                </li>
                <li>
                  <Link href="/devenir-enseignant" className="text-muted-foreground hover:text-primary transition-colors">
                    Devenir prof
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 2 */}
            <div>
              <h3 className="font-headline text-base font-semibold text-foreground mb-4">
                Kademya
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/abonnement" className="text-muted-foreground hover:text-primary transition-colors">
                    Abonnement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3 */}
            <div className="space-y-6">

              <div>
                <h3 className="font-headline text-base font-semibold text-foreground mb-4">
                  Besoin d'aide ?
                </h3>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  <span>Parler à l’équipe</span>
                </Link>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-headline text-base font-semibold text-foreground mb-4">
                  Suivez-nous
                </h3>

                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.facebook.com/people/Kademya/61584208002758/"
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-full"
                  >
                    <Facebook className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

            </div>
          </nav>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm border-t border-border">
          <p className="text-muted-foreground font-medium">
            © {currentYear} Kademya Abidjan. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/cgu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              CGU
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
