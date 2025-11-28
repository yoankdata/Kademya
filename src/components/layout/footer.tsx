// src/components/Footer.tsx
import Link from 'next/link';
import { Facebook, Mail } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Nouvelle palette premium
  const BG_DARK = '#0C0C0E';          // fond anthracite doux
  const ACCENT = '#5BB98C';           // vert profond premium
  const ACCENT_LIGHT = '#AEE7C8';     // vert clair secondaire
  const TEXT_MAIN = '#F1F5F9';        // blanc cassé moderne
  const TEXT_MUTED = 'rgba(241,245,249,0.7)';  // blanc atténué
  const BORDER = 'rgba(255,255,255,0.12)';      // bordure douce

  return (
    <footer
      style={{ backgroundColor: BG_DARK, color: TEXT_MAIN }}
      className="mt-24 shadow-2xl shadow-black/30"
    >
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14">

        {/* ================= TOP ================= */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">

          {/* Logo + Description */}
          <div className="space-y-4">
            <Logo variant="footer" />

            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: TEXT_MUTED }}
            >
              Kademya connecte les professeurs passionnés et les élèves motivés
              à Abidjan, du primaire au supérieur.
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 mt-2"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: TEXT_MUTED }}
              >
                Plateforme 100% dédiée aux familles d’Abidjan
              </span>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

            {/* Colonne 1 */}
            <div>
              <h3
                className="font-headline text-lg font-semibold"
                style={{ color: ACCENT }}
              >
                Liens rapides
              </h3>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/enseignants" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    Trouver un prof
                  </Link>
                </li>
                <li>
                  <Link href="/devenir-enseignant" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    Devenir prof
                  </Link>
                </li>
                <li>
                  <Link href="/faq" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 2 */}
            <div>
              <h3
                className="font-headline text-lg font-semibold"
                style={{ color: ACCENT }}
              >
                Kademya
              </h3>

              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/a-propos" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/abonnement" style={{ color: TEXT_MUTED }} className="hover:text-white transition-colors">
                    Abonnement
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3 */}
            <div className="space-y-6">

              <div>
                <h3
                  className="font-headline text-lg font-semibold"
                  style={{ color: ACCENT }}
                >
                  Besoin d&apos;aide ?
                </h3>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors shadow-md mt-4"
                  style={{
                    border: `1px solid ${BORDER}`,
                    color: TEXT_MAIN,
                  }}
                >
                  <Mail className="h-4 w-4" style={{ color: ACCENT }} />
                  <span>Parler à l’équipe Kademya</span>
                </Link>
              </div>

              {/* Social : uniquement Facebook */}
              <div>
                <h3
                  className="font-headline text-lg font-semibold"
                  style={{ color: ACCENT }}
                >
                  Suivez-nous
                </h3>

                <div className="mt-4 flex items-center gap-4" style={{ color: TEXT_MUTED }}>
                  <Link
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>

            </div>
          </nav>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{
            borderTop: `1px solid ${BORDER}`,
            color: 'rgba(241,245,249,0.85)', // texte lisible & propre
            letterSpacing: '0.3px',
          }}
        >
          <p className="font-medium">
            © {currentYear} Kademya Abidjan. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors font-medium"
              style={{ color: 'rgba(241,245,249,0.85)' }}
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="hover:text-white transition-colors font-medium"
              style={{ color: 'rgba(241,245,249,0.85)' }}
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/cgu"
              className="hover:text-white transition-colors font-medium"
              style={{ color: 'rgba(241,245,249,0.85)' }}
            >
              CGU
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
