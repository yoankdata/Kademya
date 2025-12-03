// src/components/layout/header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { HeaderClient } from './header-client';

export function Header() {
  return (
    <header className="fixed top-2 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/20 bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-lg shadow-black/5 transition-all duration-300">
      <div className="container mx-auto flex h-16 md:h-24 items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/kademya-logo-horizontal.png"
            alt="Logo Kademya"
            width={180}
            height={60}
            className="h-8 md:h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* CLIENT-SIDE NAVIGATION */}
        <HeaderClient />
      </div>
    </header>
  );
}
