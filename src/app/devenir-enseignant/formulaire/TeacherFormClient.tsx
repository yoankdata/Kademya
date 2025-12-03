// src/app/become-a-teacher/form/TeacherFormClient.tsx
'use client';

import type { ElementType } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

import { createTeacherCandidate } from './actions';
import {
  initialFormState,
  MATIERES,
  NIVEAUX,
  COMMUNES,
  TeacherFormValues,
} from './form-state';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  User,
  Mail,
  BookOpen,
  TrendingUp,
  MapPin,
  DollarSign,
  Phone,
  PencilLine,
  CheckCircle,
  AlertTriangle,
  Camera,
} from 'lucide-react';

// Bouton de soumission avec état pending
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full sm:w-auto transition-colors duration-300"
    >
      {pending ? 'Envoi en cours…' : 'Envoyer ma candidature'}
    </Button>
  );
}

// Map des icônes par champ texte
const fieldIcons: Partial<Record<keyof TeacherFormValues, ElementType>> = {
  nom_complet: User,
  email: Mail,
  matiere: BookOpen,
  niveau: TrendingUp,
  commune: MapPin,
  tarif_horaire: DollarSign,
  numero_whatsapp: Phone,
  biographie: PencilLine,
};

type Props = {
  submitted: boolean;
};

export default function TeacherFormClient({ submitted }: Props) {
  const [state, formAction] = useActionState(
    createTeacherCandidate,
    initialFormState,
  );

  // Champ texte / textarea générique
  const InputField = ({
    id,
    label,
    name,
    type = 'text',
    placeholder = '',
    required = true,
    min,
  }: {
    id: string;
    label: string;
    name: keyof TeacherFormValues;
    type?: string;
    placeholder?: string;
    required?: boolean;
    min?: number;
  }) => {
    const Icon = fieldIcons[name];

    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="flex items-center gap-2 font-semibold">
          {Icon && (
            <Icon className="h-4 w-4 text-green-600 dark:text-green-400" />
          )}
          {label}
        </Label>

        {name === 'biographie' ? (
          <Textarea
            id={id}
            name={name}
            rows={5}
            placeholder={placeholder}
            defaultValue={state.values[name]}
            required={required}
            className="focus-visible:ring-green-500"
          />
        ) : (
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            defaultValue={state.values[name]}
            required={required}
            min={min}
            className="focus-visible:ring-green-500"
          />
        )}

        {state.errors[name] && (
          <div role="alert" aria-live="assertive" className="text-xs text-red-500 flex items-center gap-1 mt-1">
            <AlertTriangle className="h-3 w-3" />
            {state.errors[name]}
          </div>
        )}
      </div>
    );
  };

  // Select réutilisable (matière / niveau / commune)
  const SelectField = ({
    id,
    label,
    name,
    options,
  }: {
    id: string;
    label: string;
    name: keyof TeacherFormValues;
    options: string[];
  }) => {
    const Icon = fieldIcons[name];

    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="flex items-center gap-2 font-semibold">
          {Icon && (
            <Icon className="h-4 w-4 text-green-600 dark:text-green-400" />
          )}
          {label}
        </Label>
        <select
          id={id}
          name={name}
          defaultValue={state.values[name]}
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>
            Sélectionner...
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {state.errors[name] && (
          <div role="alert" aria-live="assertive" className="text-xs text-red-500 flex items-center gap-1 mt-1">
            <AlertTriangle className="h-3 w-3" />
            {state.errors[name]}
          </div>
        )}
      </div>
    );
  };

  // Succès (via state ou via query ?submitted=1)
  if (state.success || submitted) {
    return (
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-xl text-center min-h-[80vh]">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 dark:text-white mb-4">
          Candidature envoyée avec succès
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Merci pour ta confiance. Ton dossier a bien été reçu et sera examiné par l&apos;équipe
          Kademya dans les prochaines heures.
        </p>

        <div className="space-y-4 mb-8 text-gray-700 dark:text-gray-200">
          <p className="font-bold text-lg text-primary uppercase tracking-wide">
            Étape indispensable pour apparaître dans le catalogue
          </p>
          <p>
            Choisis ton abonnement professeur pour devenir visible auprès des parents d&apos;Abidjan :
          </p>

          <div className="bg-secondary/30 p-6 rounded-xl text-left space-y-3 border border-border/50">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <p><span className="font-bold text-foreground">10 000 FCFA / mois</span> – visibilité immédiate pendant 30 jours</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
              <p><span className="font-bold text-foreground">25 000 FCFA / trimestre</span> – visibilité 90 jours à tarif réduit</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground italic">
            Sans abonnement actif, ton profil restera invisible, même après
            validation de ta candidature.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-8">
            <Link href="/abonnement">Activer mon abonnement</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Retourner à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Formulaire principal
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl space-y-8 pt-header-offset">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-gray-900 dark:text-white">
            Rejoignez la communauté Kademya
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remplissez ce formulaire pour créer votre profil enseignant. Nous
            vérifions chaque candidature manuellement pour garantir
            l&apos;excellence et la confiance des familles à Abidjan.
          </p>
        </div>

        {state.errors.global && (
          <div role="alert" aria-live="assertive" className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400 dark:bg-red-500/10 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <p>{state.errors.global}</p>
          </div>
        )}

        <Card className="shadow-xl border-t-4 border-green-500 dark:border-green-400">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-gray-800 dark:text-white">
              Détails de ma candidature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-8">
              {/* HONEYPOT FIELD (Anti-spam) */}
              <div className="opacity-0 absolute -z-10 h-0 w-0 overflow-hidden">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  id="nom_complet"
                  label="Nom complet (tel qu'il apparaîtra sur votre profil)"
                  name="nom_complet"
                  required
                />
                <InputField
                  id="email"
                  label="Adresse e-mail (Optionnel)"
                  name="email"
                  type="email"
                  required={false}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <SelectField
                  id="matiere"
                  label="Matière principale enseignée"
                  name="matiere"
                  options={MATIERES}
                />
                <SelectField
                  id="niveau"
                  label="Niveau de scolarité principal"
                  name="niveau"
                  options={NIVEAUX}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <SelectField
                  id="commune"
                  label="Commune de résidence (Abidjan)"
                  name="commune"
                  options={COMMUNES}
                />
                <InputField
                  id="tarif_horaire"
                  label="Tarif horaire souhaité (FCFA)"
                  name="tarif_horaire"
                  type="number"
                  min={0}
                  placeholder="Ex: 6000"
                  required
                />
              </div>

              <InputField
                id="numero_whatsapp"
                label="Numéro WhatsApp"
                name="numero_whatsapp"
                placeholder="2250700000000"
                required
              />

              <InputField
                id="biographie"
                label="Présentez-vous"
                name="biographie"
                placeholder="Expérience, méthodes, diplômes..."
                required
              />

              {/* Section pièces justificatives */}
              <section className="space-y-4 border-t pt-6 mt-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pièces justificatives
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ces documents servent uniquement à vérifier votre identité et
                  vos diplômes. Ils ne seront jamais visibles publiquement.
                </p>

                {/* Photo de profil optionnelle */}
                <div className="space-y-2">
                  <Label
                    htmlFor="photo_profil"
                    className="font-semibold flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4 text-green-600 dark:text-green-400" />
                    Photo de profil (recommandé)
                  </Label>
                  <Input
                    id="photo_profil"
                    name="photo_profil"
                    type="file"
                    accept="image/*"
                  />
                  <p className="text-xs text-muted-foreground">
                    Format portrait ou carré, visage bien visible. Cette photo
                    apparaîtra sur votre profil public après validation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pièce d’identité */}
                  <div className="space-y-2">
                    <Label htmlFor="id_document" className="font-semibold">
                      Pièce d&apos;identité (obligatoire)
                    </Label>
                    <Input
                      id="id_document"
                      name="id_document"
                      type="file"
                      accept=".pdf,image/*"
                      required
                    />
                  </div>

                  {/* Diplôme / attestation */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="diplome_document"
                      className="font-semibold"
                    >
                      Diplôme ou attestation (obligatoire)
                    </Label>
                    <Input
                      id="diplome_document"
                      name="diplome_document"
                      type="file"
                      accept=".pdf,image/*"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Consentement & CGU */}
              <section className="space-y-4 border-t pt-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Consentement & conditions
                </h2>
                <p className="text-sm text-muted-foreground">
                  En poursuivant, vous certifiez que les informations fournies
                  sont exactes. Vos documents sont utilisés uniquement pour
                  vérifier votre profil enseignant et ne sont jamais partagés
                  publiquement.
                </p>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="cgu_accepted"
                    name="cgu_accepted"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                  />
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <label
                      htmlFor="cgu_accepted"
                      className="font-medium cursor-pointer"
                    >
                      J'accepte les CGU et la politique de confidentialité
                      de Kademya.
                    </label>
                    <p className="text-xs text-muted-foreground">
                      En cochant cette case, j&apos;autorise Kademya à collecter
                      et traiter mes données personnelles (y compris ma pièce
                      d&apos;identité et mes diplômes) uniquement pour la
                      vérification de mon profil et la mise en relation avec les
                      familles.
                    </p>
                    <p className="text-xs">
                      Lire les{' '}
                      <Link href="/cgu" className="underline">
                        Conditions Générales d&apos;Utilisation
                      </Link>{' '}
                      et la{' '}
                      <Link href="/confidentialite" className="underline">
                        Politique de confidentialité
                      </Link>
                      .
                    </p>

                    {state.errors.cgu_accepted && (
                      <div role="alert" aria-live="assertive" className="text-xs text-red-500 flex items-center gap-1 mt-1">
                        <AlertTriangle className="h-3 w-3" />
                        {state.errors.cgu_accepted}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Rappel modèle avant le bouton */}
              <p className="text-sm text-muted-foreground pt-2">
                L’inscription est <span className="font-semibold">100% gratuite</span>. Après
                validation de votre profil, vous pourrez activer votre abonnement{' '}
                <span className="font-semibold">(10 000 FCFA / mois)</span> pour
                apparaître dans le catalogue Kademya et être visible auprès des familles
                d’Abidjan.
              </p>

              <div className="pt-4 flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
