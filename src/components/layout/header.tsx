// src/components/layout/header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { HeaderClient } from './header-client';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-border shadow-subtle">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/kademya-logo-horizontal.png"
            alt="Logo Kademya"
            width={300}
            height={100}
            className="h-20 w-auto md:h-28 lg:h-36"
            priority
          />
        </Link>

        {/* CLIENT-SIDE NAVIGATION */}
        <HeaderClient />
      </div>
    </header>
  );
}
