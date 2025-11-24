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

export function TeacherCard({ teacher }: TeacherCardProps) {
  // Ton vrai placeholder local
  const placeholder = '/images/teachers/placeholder-teacher.jpg';

  // Si Supabase a une photo → afficher
  // Sinon → placeholder
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
    <div className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-40 bg-muted relative overflow-hidden">
        <img
          src={photoUrl}
          alt={`Photo de ${teacher.nom_complet}`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>

      <div className="px-6 pt-4 pb-6">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-foreground">
              {teacher.nom_complet}
            </h2>

            <p className="text-xs md:text-sm text-muted-foreground flex items-center mt-1">
              <BookOpen className="w-4 h-4 mr-1" />
              {teacher.matiere} ({teacher.niveau})
            </p>
          </div>

          <div className="flex items-center text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/30">
            <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
            {displayRating}
          </div>
        </div>

        {/* BIO */}
        <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-3 min-h-[3rem]">
          {teacher.biographie ||
            "Le professeur n'a pas encore rédigé sa biographie."}
        </p>

        {/* INFOS */}
        <div className="space-y-2 mb-4 border-t border-border pt-3">
          <p className="flex items-center text-xs md:text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            Secteur :
            <span className="font-medium text-foreground ml-1">
              {teacher.commune}
            </span>
          </p>

          <p className="flex items-center text-xs md:text-sm text-muted-foreground">
            <DollarSign className="w-4 h-4 mr-2" />
            Tarif :
            <span className="font-semibold text-primary ml-1">
              {teacher.tarif_horaire.toLocaleString()} FCFA/h
            </span>
            <span className="ml-4 text-[11px] text-muted-foreground">
              ({teacher.avis_nombre} avis)
            </span>
          </p>
        </div>

        {/* BOUTON */}
        <a
          href={`/teachers/${teacher.id}`}
          className="block w-full text-center py-2 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Voir le profil
        </a>
      </div>
    </div>
  );
}
