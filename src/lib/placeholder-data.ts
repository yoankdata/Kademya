import { PlaceHolderImages } from './placeholder-images';

export interface Teacher {
  id: string;
  name: string;
  avatarImageId: string;
  subjects: string[];
  rate: number;
  rating: number;
  reviews: number;
  location: string;
  bio: string;
  experience: string;
  qualifications: string[];
  whatsappNumber: string;
}

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Amina Koné',
    avatarImageId: 'teacher-1',
    subjects: ['Mathématiques', 'Physique'],
    rate: 7500,
    rating: 4.9,
    reviews: 42,
    location: 'Cocody, Abidjan',
    bio: 'Ma passion : rendre les maths simples et fun. J\'utilise des exemples de tous les jours pour que les élèves comprennent les notions compliquées et aient de bonnes bases.',
    experience: '8 ans d\'enseignement au collège et lycée.',
    qualifications: ['Licence en Mathématiques', 'Master MEEF'],
    whatsappNumber: '2250712345678',
  },
  {
    id: '2',
    name: 'Brou Aka',
    avatarImageId: 'teacher-2',
    subjects: ['Français', 'Histoire-Géo'],
    rate: 5000,
    rating: 4.8,
    reviews: 35,
    location: 'Marcory, Abidjan',
    bio: 'Je suis convaincu que les histoires nous aident à mieux apprendre. J\'aide les élèves à trouver leur style à l\'écrit et à aimer les événements qui ont marqué notre monde.',
    experience: '6 ans de cours à domicile pour tous les niveaux.',
    qualifications: ['Licence de Lettres Modernes', 'Master d\'Histoire'],
    whatsappNumber: '2250712345679',
  },
  {
    id: '3',
    name: 'Yao N\'Guessan',
    avatarImageId: 'teacher-3',
    subjects: ['Chimie', 'SVT'],
    rate: 8000,
    rating: 4.9,
    reviews: 51,
    location: 'Riviera, Abidjan',
    bio: 'La science, c\'est passionnant ! J\'essaie de transmettre cette énergie dans chaque cours. Mon but, c\'est de développer la curiosité et l\'esprit critique avec des exemples concrets.',
    experience: '10 ans comme prof de science au lycée.',
    qualifications: ['Master en Chimie Organique', 'CAPES'],
    whatsappNumber: '2250712345680',
  },
  {
    id: '4',
    name: 'Fanta Touré',
    avatarImageId: 'teacher-4',
    subjects: ['Informatique', 'Anglais'],
    rate: 10000,
    rating: 5.0,
    reviews: 60,
    location: 'Yopougon, Abidjan',
    bio: 'J\'apprends aux élèves les bases de l\'informatique et de l\'anglais, les compétences de demain. Je rends le code et la langue accessibles et intéressants pour tout le monde.',
    experience: '5 ans comme développeuse et 3 ans comme prof d\'anglais.',
    qualifications: ['BTS en Informatique de Gestion', 'TOEFL'],
    whatsappNumber: '2250712345681',
  },
  {
    id: '5',
    name: 'Kouamé Jean',
    avatarImageId: 'teacher-5',
    subjects: ['Musique', 'Piano', 'Guitare'],
    rate: 15000,
    rating: 4.8,
    reviews: 29,
    location: 'Treichville, Abidjan',
    bio: 'La musique, c\'est pour tout le monde. Je donne des cours de piano et guitare sur mesure, en mêlant théorie et pratique pour que chacun puisse s\'exprimer.',
    experience: '15 ans comme musicien professionnel et prof particulier.',
    qualifications: ['Diplôme du conservatoire', 'Guitare Classique Niveau Supérieur'],
    whatsappNumber: '2250712345682',
  },
  {
    id: '6',
    name: 'Adja Sissoko',
    avatarImageId: 'teacher-6',
    subjects: ['Art', 'Dessin'],
    rate: 4500,
    rating: 4.9,
    reviews: 38,
    location: 'Bingerville, Abidjan',
    bio: 'J\'aide les élèves à libérer leur créativité. On explore différentes techniques, du dessin à la peinture, dans une ambiance qui encourage et qui inspire.',
    experience: '7 ans d\'enseignement en arts plastiques.',
    qualifications: ['Licence en Arts Plastiques', 'Diplôme des Beaux-Arts'],
    whatsappNumber: '2250712345683',
  },
];

export const findImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};
