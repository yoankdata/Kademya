'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
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

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-lg">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/teachers">Voir les profs</Link>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu principal</SheetTitle>
                  <SheetDescription className="sr-only">Navigation principale du site Edalia.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="border-b pb-4">
                    <Link href="/" className="flex items-center" onClick={() => setIsSheetOpen(false)}>
                      <Logo />
                    </Link>
                  </div>
                  <nav className="grid gap-6 text-lg font-medium mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          'flex items-center gap-4 px-2.5 transition-colors hover:text-primary',
                          pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <div className="mt-auto">
                     <Button className="w-full" asChild>
                        <Link href="/teachers" onClick={() => setIsSheetOpen(false)}>Voir les profs</Link>
                     </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
