// src/app/become-a-teacher/form/form-state.ts
import { z } from 'zod';

// --- Listes pour UI + validation ---

export const MATIERES = [
  'Mathématiques',
  'Physique-Chimie',
  'SVT',
  'Français',
  'Anglais',
  'Histoire-Géographie',
  'Philosophie',
  'Économie',
  'Informatique',
  'Autres',
] as const;

export const NIVEAUX = ['Primaire', 'Collège', 'Lycée', 'Supérieur'] as const;

export const COMMUNES = [
  'Abobo',
  'Adjamé',
  'Anyama',
  'Bingerville',
  'Cocody',
  'Koumassi',
  'Marcory',
  'Plateau',
  'Port-Bouët',
  'Treichville',
  'Yopougon',
  'Hors Abidjan',
] as const;

// --- Schéma Zod ---

export const TeacherSchema = z.object({
  nom_complet: z
    .string()
    .min(3, 'Le nom doit contenir au moins 3 caractères.')
    .trim(),
  email: z
    .string()
    .email('Veuillez saisir une adresse e-mail valide.')
    .or(z.literal('')) // Email optionnel mais si rempli, doit être valide
    .optional(),
  matiere: z.enum(MATIERES, {
    errorMap: () => ({ message: 'Matière sélectionnée invalide.' }),
  }),
  niveau: z.enum(NIVEAUX, {
    errorMap: () => ({ message: 'Niveau sélectionné invalide.' }),
  }),
  commune: z.enum(COMMUNES, {
    errorMap: () => ({ message: 'Commune sélectionnée invalide.' }),
  }),
  numero_whatsapp: z
    .string()
    .regex(
      /^(?:\+?225|225)?[0-9]{8}$/,
      'Numéro WhatsApp invalide. Format attendu : 225XXXXXXXX ou +225XXXXXXXX.',
    ),
  tarif_horaire: z
    .string()
    .transform(val => Number(val))
    .refine(val => !isNaN(val), { message: 'Le tarif doit être un nombre.' })
    .refine(val => val >= 3000 && val <= 20000, {
      message: 'Le tarif horaire doit être compris entre 3 000 et 20 000 FCFA.',
    }),
  biographie: z
    .string()
    .min(50, 'Merci de détailler un peu plus votre expérience (au moins 50 caractères).')
    .optional()
    .or(z.literal('')),
});

// --- Types dérivés ---

export type TeacherFormValues = {
  nom_complet: string;
  email: string;
  matiere: string;
  niveau: string;
  commune: string;
  numero_whatsapp: string;
  tarif_horaire: string;
  biographie: string;
};

export type TeacherFormErrors = Partial<
  Record<keyof TeacherFormValues | 'cgu_accepted' | 'global', string>
>;

export type TeacherFormState = {
  success: boolean;
  errors: TeacherFormErrors;
  values: TeacherFormValues;
};

export const initialFormState: TeacherFormState = {
  success: false,
  errors: {},
  values: {
    nom_complet: '',
    email: '',
    matiere: '',
    niveau: '',
    commune: '',
    numero_whatsapp: '',
    tarif_horaire: '',
    biographie: '',
  },
};

export function sanitize(formData: FormData): TeacherFormValues {
  const get = (name: string) =>
    ((formData.get(name) as string | null)?.trim() ?? '');

  return {
    nom_complet: get('nom_complet'),
    email: get('email'),
    matiere: get('matiere'),
    niveau: get('niveau'),
    commune: get('commune'),
    numero_whatsapp: get('numero_whatsapp'),
    tarif_horaire: get('tarif_horaire'),
    biographie: get('biographie'),
  };
}
