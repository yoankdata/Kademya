// src/components/layout/header-client.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

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

            {/* CTA + MENU MOBILE */}
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
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100 transition-all"
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white absolute top-full left-0 right-0 z-50">
                    <nav className="container mx-auto px-4 py-4 space-y-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    'block px-3 py-3 rounded-md font-semibold transition-all',
                                    isActive(link.href)
                                        ? 'bg-green-50 text-gray-900'
                                        : 'text-gray-700 hover:bg-gray-100',
                                )}
                                style={{
                                    color: isActive(link.href) ? COLORS.PRIMARY : undefined,
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/enseignants"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 block px-3 py-3 rounded-md font-semibold text-white text-center transition-all"
                            style={{ backgroundColor: COLORS.PRIMARY }}
                        >
                            <BookOpen className="inline-block h-4 w-4 mr-2" aria-hidden="true" />
                            Voir les profs
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
