// src/app/become-a-teacher/form/page.tsx
import type { Metadata } from 'next';
import TeacherFormClient from './TeacherFormClient';

type PageProps = {
  searchParams?: {
    submitted?: string;
  };
};

// SEO de base pour la page "Devenir professeur"
export const metadata: Metadata = {
  title: 'Devenir professeur | Kademya',
  description:
    'Rejoignez Kademya en tant que professeur vérifié. Créez votre profil, envoyez vos diplômes et commencez à enseigner aux élèves en Côte d’Ivoire.',
  openGraph: {
    title: 'Devenir professeur sur Kademya',
    description:
      'Développez votre activité éducative en partageant vos compétences. Inscription gratuite, profils vérifiés, mise en relation avec les parents.',
    url: 'https://kademya.com/devenir-enseignant',
    type: 'website',
    siteName: 'Kademya',
  },
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const submitted = params?.submitted === '1';

  return <TeacherFormClient submitted={submitted} />;
}
