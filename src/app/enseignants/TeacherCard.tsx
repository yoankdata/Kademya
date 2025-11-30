import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowRight, BadgeCheck } from 'lucide-react';

// ... (Ton type TeacherForClient reste le même)

export function TeacherCard({ teacher }: { teacher: TeacherForClient }) {
  const placeholder = '/images/teachers/placeholder-teacher.jpg';
  const photoUrl = teacher.photo_url || placeholder;
  const formattedPrice = new Intl.NumberFormat('fr-FR').format(teacher.tarif_horaire);

  return (
    <Link
      href={`/enseignants/${teacher.id}`}
      className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 h-full"
    >
      {/* HEADER : Avatar + Info + Note */}
      <div className="flex items-start gap-4 mb-4">
        {/* AVATAR */}
        <div className="relative w-14 h-14 flex-shrink-0">
          <Image
            src={photoUrl}
            alt={teacher.nom_complet}
            fill
            className="object-cover rounded-full border border-gray-100 group-hover:scale-105 transition-transform duration-300"
            sizes="56px"
          />
          {/* Indicateur de disponibilité (optionnel, touche sympa) */}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        {/* INFO PRINCIPALE */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-bold text-gray-900 truncate group-hover:text-primary transition-colors">
              {teacher.nom_complet}
            </h3>
            {/* Note Star */}
            {teacher.avis_moyenne && (
              <div className="flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-current" />
                <span>{teacher.avis_moyenne.toFixed(1)}</span>
              </div>
            )}
          </div>

          {/* LOCALISATION (Remontée ici pour lier au prof) */}
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <MapPin className="w-3 h-3 mr-1" />
            {teacher.commune}
          </div>
        </div>
      </div>

      {/* BADGES (Matière & Niveau) - Plus structuré que du texte simple */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
          {teacher.matiere}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
          {teacher.niveau}
        </span>
      </div>

      {/* BIO */}
      <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">
        {teacher.biographie || "Professeur passionné, je m'adapte aux besoins de chaque élève pour garantir leur réussite."}
      </p>

      {/* FOOTER : PRIX & CALL TO ACTION */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Tarif</span>
          <div className="text-lg font-bold text-gray-900">
            {formattedPrice} <span className="text-sm font-normal text-gray-500">FCFA/h</span>
          </div>
        </div>

        {/* BOUTON DISCRET MAIS EFFICACE */}
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}