'use client';

import Link from 'next/link';
import { Menu, User, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button'; 
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetHeader, SheetDescription } from '@/components/ui/sheet';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/teachers', label: 'Nos Profs' },
  { href: '/become-a-teacher', label: 'Devenir Prof' },
  { href: '/about', label: 'À Propos' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Définir les couleurs du Hero
  const ACCENT_COLOR = '#6BBD78'; // Vert clair (CTA Secondaire/Accent)
  const PRIMARY_COLOR = '#1A3626'; // Vert très foncé (CTA Principal/Fond Footer)

  return (
    // Header blanc avec ombre
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        
        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  // Poids de police SEMI-BOLD pour tous les liens
                  'font-semibold transition-colors p-2 -my-2', 
                  isActive 
                    ? `text-[${PRIMARY_COLOR}] border-b-2 border-[${ACCENT_COLOR}]` // Actif : Vert foncé avec soulignement Vert clair
                    : `text-gray-600 hover:text-[${ACCENT_COLOR}]` // Inactif : Gris doux, hover Vert clair
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        
        {/* CTAs Desktop & Toggle Mobile */}
        <div className="flex items-center gap-4">
          
          {/* Double CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* CTA Secondaire : Je suis Professeur (Style neutre/ghost) - Police SEMI-BOLD */}
            <Button variant="ghost" asChild className={`hover:text-[${ACCENT_COLOR}] font-semibold`}>
              <Link href="/become-a-teacher">Je suis Professeur</Link>
            </Button>
            
            {/* CTA Primaire : Voir les Profs (Style Vert Foncé) - Police SEMI-BOLD */}
            <Button 
                asChild 
                style={{ backgroundColor: PRIMARY_COLOR }} // Couleur Vert Foncé
                className="hover:bg-[#3C644E] text-white font-semibold" // Hover un peu plus clair, Texte blanc, SEMI-BOLD
            >
              <Link href="/teachers">Voir les profs</Link>
            </Button>
          </div>

          {/* Menu Mobile (Sheet) */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm flex flex-col">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="sr-only">Menu principal</SheetTitle>
                <SheetDescription className="sr-only">Navigation principale du site Edalia.</SheetDescription>
                 <Link href="/" className="flex items-center" onClick={() => setIsSheetOpen(false)}>
                   <Logo />
                 </Link>
              </SheetHeader>
              
              {/* Liens de navigation Mobile */}
              <nav className="grid gap-4 text-lg py-6 flex-grow">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        // Police SEMI-BOLD
                        'flex items-center gap-4 px-2.5 transition-colors font-semibold',
                        pathname.startsWith(link.href) ? `text-[${ACCENT_COLOR}]` : 'text-gray-700 hover:text-[${ACCENT_COLOR}]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              
              {/* CTAs Mobile */}
              <div className="mt-auto pt-6 border-t space-y-3">
                {/* CTA Primaire Mobile : Vert Foncé */}
                <Button 
                    className="w-full font-semibold" 
                    asChild 
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  <SheetClose asChild>
                    <Link href="/teachers">
                      <BookOpen className="h-4 w-4 mr-2" /> Voir les profs
                    </Link>
                  </SheetClose>
                </Button>
                {/* CTA Secondaire Mobile : Outline */}
                <Button variant="outline" className="w-full font-semibold" asChild>
                  <SheetClose asChild>
                    <Link href="/become-a-teacher">
                      <User className="h-4 w-4 mr-2" /> Je suis Professeur
                    </Link>
                  </SheetClose>
                </Button>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}