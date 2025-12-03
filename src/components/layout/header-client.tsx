// src/components/layout/header-client.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { COLORS, LINKS } from '@/lib/constants';

const navLinks = [
    { href: LINKS.HOME, label: 'Accueil' },
    { href: LINKS.TEACHERS, label: 'Nos Profs' },
    { href: LINKS.BECOME_TEACHER, label: 'Devenir Prof' },
    { href: LINKS.ABOUT, label: 'À Propos' },
    { href: LINKS.CONTACT, label: 'Contact' },
];

export function HeaderClient() {
    const pathname = usePathname() || '/';
    const [mobileOpen, setMobileOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* NAVIGATION DESKTOP */}
            <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'font-semibold transition-all px-2 py-1 rounded-md',
                            isActive(link.href)
                                ? 'text-gray-900'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
                        )}
                        style={{
                            color: isActive(link.href) ? COLORS.PRIMARY : undefined,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* CTA + MENU MOBILE TRIGGER */}
            <div className="flex items-center gap-3">
                <Link
                    href="/enseignants"
                    className="hidden md:inline-flex items-center font-semibold text-white px-5 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
                    style={{ backgroundColor: COLORS.PRIMARY }}
                >
                    <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
                    Voir les profs
                </Link>

                {/* MOBILE MENU BUTTON */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden h-11 w-11"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Ouvrir le menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* FULL SCREEN MOBILE OVERLAY */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden flex flex-col animate-in fade-in duration-200">
                    {/* HEADER INSIDE MENU */}
                    <div className="flex items-center justify-end p-6 h-20">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-11 w-11"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Fermer le menu"
                        >
                            <X className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* LINKS */}
                    <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-6 pb-20">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    'text-2xl font-bold transition-colors py-2',
                                    isActive(link.href)
                                        ? 'text-primary'
                                        : 'text-foreground/80 hover:text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* MOBILE CTA */}
                        <Link
                            href="/enseignants"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center font-bold text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all mt-4 text-lg"
                            style={{ backgroundColor: COLORS.PRIMARY }}
                        >
                            <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                            Voir les profs
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
