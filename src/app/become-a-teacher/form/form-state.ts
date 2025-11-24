// src/app/become-a-teacher/form/form-state.ts

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
  Record<
    | 'nom_complet'
    | 'email'
    | 'matiere'
    | 'niveau'
    | 'commune'
    | 'numero_whatsapp'
    | 'tarif_horaire'
    | 'biographie'
    | 'global',
    string
  >
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

// --- Définition des listes (Utilisées pour la validation et l'UI) ---
export const MATIERES = [
    'Mathématiques', 'Physique-Chimie', 'SVT', 'Français', 'Anglais', 
    'Histoire-Géographie', 'Philosophie', 'Économie', 'Informatique', 'Autres'
];
export const NIVEAUX = [
    'Primaire', 'Collège', 'Lycée', 'Supérieur'
];
export const COMMUNES = [
    'Abobo', 'Adjamé', 'Anyama', 'Bingerville', 'Cocody', 'Koumassi', 
    'Marcory', 'Plateau', 'Port-Bouët', 'Treichville', 'Yopougon', 'Hors Abidjan'
];


export function validate(values: TeacherFormValues): TeacherFormErrors {
  const errors: TeacherFormErrors = {};

  if (!values.nom_complet) {
    errors.nom_complet = 'Le nom complet est obligatoire.';
  } else if (values.nom_complet.length < 3) {
    errors.nom_complet = 'Le nom doit contenir au moins 3 caractères.';
  }

  if (values.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = 'Veuillez saisir une adresse e-mail valide.';
    }
  }

  // --- NOUVELLE VALIDATION PAR LISTE ---
  if (!values.matiere) {
    errors.matiere = 'La matière principale est obligatoire.';
  } else if (!MATIERES.includes(values.matiere)) {
    errors.matiere = 'Matière sélectionnée invalide.';
}

  if (!values.niveau) {
    errors.niveau = 'Le niveau est obligatoire.';
  } else if (!NIVEAUX.includes(values.niveau)) {
    errors.niveau = 'Niveau sélectionné invalide.';
}
  
  if (!values.commune) {
    errors.commune = 'La commune est obligatoire.';
  } else if (!COMMUNES.includes(values.commune)) {
    errors.commune = 'Commune sélectionnée invalide.';
}
  // --- FIN NOUVELLE VALIDATION ---


  if (!values.numero_whatsapp) {
    errors.numero_whatsapp = 'Le numéro WhatsApp est obligatoire.';
  } else {
    // Côte d’Ivoire : 225 + 8 chiffres, ou +225...
    const whatsappRegex = /^(?:\+?225|225)?[0-9]{8}$/;
    if (!whatsappRegex.test(values.numero_whatsapp)) {
      errors.numero_whatsapp =
        'Numéro WhatsApp invalide. Format attendu : 225XXXXXXXX ou +225XXXXXXXX.';
    }
  }

  if (values.tarif_horaire) {
    const n = Number(values.tarif_horaire);
    if (Number.isNaN(n)) {
      errors.tarif_horaire = 'Le tarif doit être un nombre.';
    } else if (n < 3000 || n > 20000) {
      errors.tarif_horaire =
        'Le tarif horaire doit être compris entre 3 000 et 20 000 FCFA.';
    }
  }

  if (values.biographie && values.biographie.length < 50) {
    errors.biographie =
      'Merci de détailler un peu plus votre expérience (au moins 50 caractères).';
  }

  return errors;
}