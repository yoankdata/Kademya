// src/components/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'header' | 'footer' | 'app' | 'default';
};

export function Logo({ variant = 'header' }: LogoProps) {
  const config =
    variant === 'footer'
      ? {
        src: '/images/kademya-logo-primary',
        width: 1024,
        height: 1024,
        // >> GROS LOGO DANS LE FOOTER
        className: 'h-28 md:h-32 w-auto',
      }
      : variant === 'app'
        ? {
          src: '/images/kademya-app-icon.png',
          width: 64,
          height: 64,
          className: 'h-12 w-12',
        }
        : {
          // HEADER = logo horizontal
          src: '/images/kademya-logo-horizontal.png',
          width: 260,
          height: 72,
          // >> PLUS GRAND DANS LE HEADER
          className: 'h-12 md:h-16 w-auto',
        };

  return (
    <Link
      href="/"
      aria-label="Accueil Kademya"
      className="inline-flex items-center"
    >
      <Image
        src={config.src}
        alt="Kademya"
        width={config.width}
        height={config.height}
        className={config.className}
        priority={variant === 'header'}
      />
    </Link>
  );
}
