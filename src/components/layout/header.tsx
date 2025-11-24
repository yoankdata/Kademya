'use client';

import Link from 'next/link';
import { Menu, LogIn, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/teachers', label: 'Nos Profs' },
  { href: '/about', label: 'À Propos' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const ACCENT = '#6BBD78';
  const PRIMARY = '#1A3626';

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors',
                  isActive
                    ? `text-[${PRIMARY}] border-b-2 border-[${ACCENT}] pb-1`
                    : `text-gray-600 hover:text-[${ACCENT}]`
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTAS DESKTOP */}
        <div className="hidden md:flex items-center gap-3">

          {/* LOGIN */}
          <Button variant="ghost" asChild className="font-semibold hover:text-[#6BBD78]">
            <Link href="/auth/login">
              <LogIn className="w-4 h-4 mr-1" /> Connexion
            </Link>
          </Button>

          {/* CTA PRINCIPAL */}
          <Button
            asChild
            className="font-semibold text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            <Link href="/teachers">
              <BookOpen className="w-4 h-4 mr-2" /> Voir les profs
            </Link>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between mt-3">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Logo />
                </Link>
              </SheetTitle>
            </SheetHeader>

            {/* NAVIGATION MOBILE */}
            <nav className="mt-6 space-y-5 text-lg font-semibold px-2">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-800 hover:text-[#6BBD78]"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* MOBILE CTA */}
            <div className="mt-10 space-y-3 px-2">

              <Button
                asChild
                variant="outline"
                className="w-full font-semibold"
              >
                <SheetClose asChild>
                  <Link href="/auth/login">
                    <LogIn className="h-4 w-4 mr-2" /> Connexion
                  </Link>
                </SheetClose>
              </Button>

              <Button
                asChild
                className="w-full font-semibold text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                <SheetClose asChild>
                  <Link href="/teachers">
                    <BookOpen className="h-4 w-4 mr-2" /> Voir les profs
                  </Link>
                </SheetClose>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
