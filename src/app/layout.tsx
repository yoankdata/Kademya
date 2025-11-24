import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Poppins, Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import SupabaseProvider from '@/components/SupabaseProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Edalia - Trouvez un professeur fiable à Abidjan',
  description:
    'Mise en relation avec des professeurs vérifiés et passionnés pour des cours particuliers de qualité.',
  icons: null,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={cn(
          'font-body antialiased',
          poppins.variable,
          nunito.variable,
        )}
      >
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </SupabaseProvider>
      </body>
    </html>
  );
}
