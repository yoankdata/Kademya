// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, BookOpen, TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    // Dégradé de fond subtil et hauteur pour centrer le contenu
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-16">

      {/* Icône d'alerte visuelle et impactante */}
      <TriangleAlert className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />

      <Card className="max-w-xl w-full shadow-2xl border-2 border-border/70 rounded-xl bg-white dark:bg-gray-900/80 backdrop-blur-sm">
        <CardContent className="py-12 px-8 md:px-12 text-center space-y-8">

          {/* Section du titre et de la description */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40 px-3 py-1.5 text-xs font-semibold tracking-wider text-red-700 dark:text-red-300 uppercase">
              Erreur 404
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white font-headline">
              Page Absente du Carnet 🧭
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Nous n&apos;avons pas trouvé la page que vous cherchez. Elle n&apos;existe pas, n&apos;existe plus ou n&apos;a pas encore été écrite dans l&apos;histoire de Kademya.
            </p>
          </div>

          {/* Section des actions - Hiérarchie des boutons améliorée */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

            {/* Action principale : Bouton "Retour à l'accueil" mis en avant */}
            <Button asChild size="lg" className="w-full sm:w-auto font-semibold shadow-md hover:shadow-lg transition-shadow">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Retourner à l&apos;accueil
              </Link>
            </Button>

            {/* Actions secondaires : Plus discrètes pour ne pas surcharger l'utilisateur */}
            <Button asChild variant="ghost" className="w-full sm:w-auto text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/enseignants">
                <Search className="h-4 w-4 mr-2" />
                Voir les professeurs
              </Link>
            </Button>

          </div>

          {/* Lien pour devenir professeur déplacé et stylisé différemment */}
          <p className="text-sm pt-4 text-muted-foreground/80">
            Intéressé(e) ?
            <Link
              href="/devenir-enseignant/formulaire"
              className="ml-2 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-1" />
              Devenir professeur
            </Link>
          </p>

          {/* Lien de support en bas */}
          <p className="text-[11px] text-muted-foreground/60 pt-6 border-t border-dashed dark:border-gray-800/80">
            Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur technique, vous pouvez nous écrire à{' '}
            <a
              href="mailto:support@kademya.com"
              className="underline underline-offset-2 text-current hover:text-blue-500 transition-colors"
            >
              assistance.kademya@gmail.com
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}