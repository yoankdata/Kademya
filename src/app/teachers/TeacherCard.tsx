'use client';

import { MapPin, DollarSign, BookOpen, Star, User } from 'lucide-react';

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
  const placeholder = '/images/teachers/placeholder-teacher.jpg';
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

  const formatPrice = (price: number) =>
    price.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'XOF', // Utiliser le code XOF pour FCFA si c'est la norme
      minimumFractionDigits: 0,
    }).replace('XOF', 'FCFA'); // Remplacer le symbole par FCFA/h

  return (
    <div className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative flex flex-col h-full">
      {/* Photo et Note en badge */}
      <div className="w-full h-40 bg-muted relative overflow-hidden">
        <img
          src={photoUrl}
          alt={`Photo de ${teacher.nom_complet}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          onError={handleImageError}
        />
        
        {/* Badge de notation flottant */}
        <div className="absolute top-3 right-3 flex items-center text-sm font-bold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50 shadow-md">
          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
          {displayRating}
          {teacher.avis_nombre > 0 && (
            <span className="ml-2 text-xs font-normal text-white/80">
              ({teacher.avis_nombre})
            </span>
          )}
        </div>
      </div>
      
      {/* Contenu de la carte */}
      <div className="px-5 pt-5 pb-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Nom du professeur */}
          <h2 className="text-xl font-bold text-foreground mb-1 leading-tight">
            {teacher.nom_complet}
          </h2>

          {/* Matière et Niveau en tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="flex items-center text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
              <BookOpen className="w-3 h-3 mr-1" />
              {teacher.matiere}
            </span>
            <span className="text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-300 dark:border-blue-700">
              {teacher.niveau}
            </span>
          </div>

          {/* Localisation */}
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="font-medium text-foreground">
              {teacher.commune}
            </span>
          </div>

          {/* Biographie */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 min-h-[4.5rem]">
            {teacher.biographie ||
              "Ce professeur n'a pas encore rédigé sa biographie détaillée. Cliquez pour en savoir plus."}
          </p>
        </div>

        {/* Pied de carte (Tarif et Bouton) */}
        <div className="pt-4 border-t border-border mt-auto space-y-3">
          {/* Tarif bien visible */}
          <div className="flex items-center justify-between">
            <p className="flex items-center text-base font-semibold text-primary">
              <DollarSign className="w-5 h-5 mr-2" />
              Tarif :
            </p>
            <span className="text-xl font-extrabold text-primary">
              {formatPrice(teacher.tarif_horaire)}/h
            </span>
          </div>

          {/* Bouton Voir Profil */}
          <a
            href={`/teachers/${teacher.id}`}
            className="block w-full text-center py-2.5 px-4 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Voir le profil détaillé
          </a>
        </div>
      </div>
    </div>
  );
}

// Fonction utilitaire pour le prix, à placer si possible en dehors du composant
// (pour simplifier j'ai laissé le formatage dans le composant)