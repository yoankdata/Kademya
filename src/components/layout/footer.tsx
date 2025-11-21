import Link from 'next/link';
import { Facebook, Twitter, Instagram, HelpCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2">
                 <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path d="M12 0L20.6603 14L12 28L3.33975 14L12 0Z" fill="hsl(var(--accent))"/>
                    <path d="M3.33975 14L0 7.99999H12L3.33975 14Z" fill="hsl(var(--primary-foreground))"/>
                    <path d="M3.33975 14L12 28H0L3.33975 14Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.7"/>
                </svg>
                <span className="font-headline text-3xl font-normal text-primary-foreground">Edalia</span>
              </div>
            </Link>
            <p className="max-w-xs text-sm text-primary-foreground/80">Connecte les professeurs passionnés et les élèves motivés à Abidjan.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
              <div>
                <h3 className="font-headline text-lg font-semibold text-accent">Liens Rapides</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/teachers" className="hover:underline text-sm">Trouver un prof</Link></li>
                  <li><Link href="/become-a-teacher" className="hover:underline text-sm">Devenir prof</Link></li>
                  <li><Link href="/become-a-teacher#faq" className="hover:underline text-sm">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold text-accent">Edalia</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link href="/about" className="hover:underline text-sm">À propos</Link></li>
                  <li><Link href="/about#contact" className="hover:underline text-sm">Contact</Link></li>
                </ul>
              </div>
              <div>
                  <h3 className="font-headline text-lg font-semibold text-accent">Suivez-nous</h3>
                  <div className="flex mt-4 space-x-4">
                      <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                      <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                      <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                  </div>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Edalia Abidjan. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
