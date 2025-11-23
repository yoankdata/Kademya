'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createTeacherCandidate } from './actions';
import { initialFormState } from './form-state';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending}>
      {pending ? 'Envoi en cours…' : 'Envoyer ma candidature'}
    </Button>
  );
}

type Props = {
  submitted: boolean;
};

export default function TeacherFormClient({ submitted }: Props) {
  const [state, formAction] = useActionState(
    createTeacherCandidate,
    initialFormState
  );

  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-headline font-semibold">
            Créer mon profil enseignant
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Remplissez ce formulaire pour rejoindre Edalia. Nous vérifions
            chaque profil manuellement avant publication pour garantir la
            confiance des familles.
          </p>
        </div>

        {submitted && (
          <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary">
            Votre demande a bien été envoyée. Nous vous contacterons sous 24h
            pour finaliser la vérification de votre profil.
          </div>
        )}

        {state.errors.global && !submitted && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive mb-4">
            {state.errors.global}
          </div>
        )}

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              Informations principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nom_complet">Nom complet</Label>
                  <Input
                    id="nom_complet"
                    name="nom_complet"
                    defaultValue={state.values.nom_complet}
                    required
                  />
                  {state.errors.nom_complet && (
                    <p className="text-xs text-destructive">
                      {state.errors.nom_complet}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail (optionnel)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={state.values.email}
                  />
                  {state.errors.email && (
                    <p className="text-xs text-destructive">
                      {state.errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="matiere">Matière principale</Label>
                  <Input
                    id="matiere"
                    name="matiere"
                    placeholder="Mathématiques, Français..."
                    defaultValue={state.values.matiere}
                    required
                  />
                  {state.errors.matiere && (
                    <p className="text-xs text-destructive">
                      {state.errors.matiere}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="niveau">Niveau</Label>
                  <Input
                    id="niveau"
                    name="niveau"
                    placeholder="Primaire, Collège, Lycée, Supérieur..."
                    defaultValue={state.values.niveau}
                    required
                  />
                  {state.errors.niveau && (
                    <p className="text-xs text-destructive">
                      {state.errors.niveau}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="commune">Commune</Label>
                  <Input
                    id="commune"
                    name="commune"
                    placeholder="Cocody, Yopougon, Marcory..."
                    defaultValue={state.values.commune}
                    required
                  />
                  {state.errors.commune && (
                    <p className="text-xs text-destructive">
                      {state.errors.commune}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tarif_horaire">Tarif horaire (FCFA)</Label>
                  <Input
                    id="tarif_horaire"
                    name="tarif_horaire"
                    type="number"
                    min={0}
                    placeholder="6000"
                    defaultValue={state.values.tarif_horaire}
                  />
                  {state.errors.tarif_horaire && (
                    <p className="text-xs text-destructive">
                      {state.errors.tarif_horaire}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numero_whatsapp">Numéro WhatsApp</Label>
                <Input
                  id="numero_whatsapp"
                  name="numero_whatsapp"
                  placeholder="2250700000000"
                  defaultValue={state.values.numero_whatsapp}
                  required
                />
                {state.errors.numero_whatsapp && (
                  <p className="text-xs text-destructive">
                    {state.errors.numero_whatsapp}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="biographie">Présentez-vous</Label>
                <Textarea
                  id="biographie"
                  name="biographie"
                  rows={5}
                  placeholder="Parlez de votre expérience, de votre façon d’enseigner, des niveaux que vous prenez en charge..."
                  defaultValue={state.values.biographie}
                />
                {state.errors.biographie && (
                  <p className="text-xs text-destructive">
                    {state.errors.biographie}
                  </p>
                )}
              </div>

              <div className="pt-2 flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
