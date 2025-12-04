import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight, BadgeCheck } from 'lucide-react';

export type TeacherForClient = {
  id: string;
  nom_complet: string;
  photo_url: string | null;
  matiere: string;
  niveau: string;
  commune: string;
  tarif_horaire: number;
  avis_moyenne: number | null;
  biographie: string | null;
  slug?: string;
};

export function TeacherCard({ teacher }: { teacher: TeacherForClient }) {
  const placeholder = '/images/teachers/placeholder-teacher.jpg';
  const photoUrl = teacher.photo_url || placeholder;
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(teacher.tarif_horaire);

  return (
    <Link
      href={`/enseignants/${teacher.slug || teacher.id}`}
      className="group relative flex flex-col bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 h-full overflow-hidden"
    >
      {/* GLOW EFFECT ON HOVER */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* HEADER : Avatar + Info */}
      <div className="relative flex items-start gap-5 mb-6 z-10">
        {/* AVATAR */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={photoUrl}
            alt={teacher.nom_complet}
            fill
            className="object-cover rounded-full ring-4 ring-white dark:ring-black/20 group-hover:scale-105 transition-transform duration-500"
            sizes="64px"
          />
          {/* Badge Vérifié (si applicable, ou juste déco) */}
          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-black p-1 rounded-full">
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/10" />
          </div>
        </div>

        {/* INFO PRINCIPALE */}
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-lg font-headline font-bold text-foreground truncate group-hover:text-primary transition-colors">
            {teacher.nom_complet}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-70" />
            {teacher.commune}
          </div>
        </div>
      </div>

      {/* TAGS (Matière & Niveau) */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/10">
          {teacher.matiere}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
          {teacher.niveau}
        </span>
      </div>

      {/* BIO */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-8 flex-grow leading-relaxed relative z-10">
        {teacher.biographie || "Professeur passionné, je m'adapte aux besoins de chaque élève pour garantir leur réussite."}
      </p>

      {/* FOOTER : PRIX & NOTE */}
      <div className="flex items-center justify-between pt-5 border-t border-border/40 mt-auto relative z-10">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-foreground">
            {formattedPrice} <span className="text-xs font-medium text-muted-foreground">FCFA/h</span>
          </div>
        </div>

        {/* Note Star */}
        {teacher.avis_moyenne ? (
          <div className="flex items-center gap-1.5 text-sm font-bold text-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>{teacher.avis_moyenne.toFixed(1)}</span>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground/50">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        )}
      </div>
    </Link>
  );
}