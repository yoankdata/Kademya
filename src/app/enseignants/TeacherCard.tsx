'use client';

import { MapPin, DollarSign, BookOpen, Star } from 'lucide-react';

export type TeacherForClient = {
  id: string;
  nom_complet: string;
  matiere: string;
  niveau: string;
  tarif_horaire: number;
  commune: string;
  biographie: string | null;
  photo_url: string | null;
  avis_moyenne: number | null;
  avis_nombre: number;
};

type TeacherCardProps = {
  teacher: TeacherForClient;
};

const formatPrice = (price: number) =>
  price
    .toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    })
    .replace('XOF', 'FCFA');

const placeholder = '/images/teachers/placeholder-teacher.jpg';

export function TeacherCard({ teacher }: TeacherCardProps) {
  const photoUrl = teacher.photo_url || placeholder;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = placeholder;
  };

  const displayRating = teacher.avis_moyenne
    ? teacher.avis_moyenne.toFixed(1)
    : 'N/A';

  return (
    <div
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-3xl border border-[#E7ECE9]
        bg-white
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* Bande discrète doré/menthe en haut */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#E1AD01_0%,#95D7AE_40%,#95D7AE_60%,#E1AD01_100%)]" />

      {/* Photo */}
      <div className="relative h-56 w-full overflow-hidden rounded-t-3xl bg-[#F5F5F5]">
        <img
          src={photoUrl}
          alt={`Photo de ${teacher.nom_complet}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />

        {/* Badge notation */}
        <div
          className="
            absolute top-4 right-4 flex items-center gap-1.5
            rounded-full border border-[#E1AD01]
            bg-white/95 px-3 py-1.5
            text-sm font-semibold text-[#2E2E2E]
            backdrop-blur-sm shadow-md
          "
        >
          <Star className="h-4 w-4 fill-[#E1AD01] text-[#E1AD01]" />
          <span>{displayRating}</span>
          {teacher.avis_nombre > 0 && (
            <span className="text-xs text-[#5C8D66]">
              ({teacher.avis_nombre})
            </span>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col justify-between gap-6 px-6 pt-6 pb-6">
        <div>
          {/* Nom */}
          <h2 className="mb-2 text-xl md:text-2xl font-extrabold text-[#2E2E2E]">
            {teacher.nom_complet}
          </h2>

          {/* Badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {/* Matière : fond menthe léger */}
            <span
              className="
                inline-flex items-center rounded-full
                border border-[#95D7AE]
                bg-[#F0F7F3]
                px-3 py-1 text-xs font-medium
                text-[#2E2E2E]
              "
            >
              <BookOpen className="mr-1.5 h-3.5 w-3.5 text-[#5C8D66]" />
              {teacher.matiere}
            </span>

            {/* Niveau : outline vert feuille */}
            <span
              className="
                inline-flex items-center rounded-full
                border border-[#5C8D66]
                bg-white
                px-3 py-1 text-xs font-medium
                text-[#5C8D66]
              "
            >
              {teacher.niveau}
            </span>
          </div>

          {/* Localisation */}
          <div className="mb-3 flex items-center text-sm text-[#5C8D66]">
            <MapPin className="mr-2 h-4 w-4 text-[#E1AD01]" />
            <span className="font-medium text-[#2E2E2E]">
              {teacher.commune}
            </span>
          </div>

          {/* Biographie */}
          <p className="min-h-[4.5rem] text-sm leading-relaxed text-[#2E2E2E]/75 line-clamp-3">
            {teacher.biographie ||
              "Ce professeur n'a pas encore rédigé sa biographie détaillée. Cliquez pour en savoir plus."}
          </p>
        </div>

        {/* Bas de carte */}
        <div className="mt-auto space-y-4 border-t border-[#F0F0F0] pt-4">
          {/* Tarif */}
          <div className="flex items-end justify-between">
            <p className="flex items-center text-xs font-medium uppercase tracking-wide text-[#5C8D66]">
              <DollarSign className="mr-1.5 h-4 w-4 text-[#E1AD01]" />
              Tarif horaire
            </p>
            <span className="text-2xl md:text-3xl font-extrabold text-[#E1AD01]">
              {formatPrice(teacher.tarif_horaire)}/h
            </span>
          </div>

          {/* CTA principal : vert feuille */}
          <a
            href={`/enseignants/${teacher.id}`}
            className="
              block w-full rounded-2xl
              bg-[#5C8D66] py-2.5 px-4
              text-center text-sm md:text-base font-semibold
              text-white
              shadow-md shadow-[rgba(0,0,0,0.10)]
              transition-all duration-200
              hover:bg-[#4A7455]
              hover:shadow-lg hover:shadow-[rgba(0,0,0,0.16)]
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#95D7AE]
              focus-visible:ring-offset-2 focus-visible:ring-offset-white
            "
          >
            Voir le profil détaillé
          </a>
        </div>
      </div>
    </div>
  );
}
