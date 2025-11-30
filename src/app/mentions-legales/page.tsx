// src/app/mentions-legales/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales – Kademya',
  description:
    'Mentions légales de Kademya, plateforme de mise en relation entre parents/élèves et professeurs.',
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Mentions légales – Kademya
      </h1>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
        <p className="text-gray-700">
          Le site <strong>Kademya</strong> est édité par&nbsp;:
        </p>
        <p className="text-gray-700">
          <strong>Kademya</strong> – Plateforme éducative de mise en relation
          entre parents/élèves et professeurs indépendants.
          <br />
          Représentant légal&nbsp;: <strong>Yoan Kilolo</strong>
          <br />
          Adresse de contact&nbsp;:{' '}
          <a
            href="mailto:contact@kademya-ci.com"
            className="text-emerald-700 underline"
          >
            contact@kademya-ci.com
          </a>
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Hébergement</h2>
        <p className="text-gray-700">
          Le site est hébergé par&nbsp;:
        </p>
        <p className="text-gray-700">
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, United States
          <br />
          Site web&nbsp;:{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 underline"
          >
            vercel.com
          </a>
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Objet du site</h2>
        <p className="text-gray-700">
          Kademya est une plateforme en ligne permettant de mettre en relation
          des parents/élèves et des professeurs indépendants pour des cours à
          domicile ou en ligne. Kademya ne dispense pas directement les cours et
          n&apos;est pas partie au contrat de prestation conclu entre le parent
          (ou l&apos;élève majeur) et le professeur.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-700">
          L&apos;ensemble des éléments présents sur le site (textes, logos,
          identité visuelle, éléments graphiques, code, etc.) sont, sauf
          mention contraire, la propriété de Kademya. Toute reproduction,
          représentation, modification, publication, transmission ou adaptation,
          totale ou partielle, de ces éléments, par quelque moyen que ce soit,
          est interdite sans l&apos;autorisation écrite préalable de Kademya.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Responsabilité
        </h2>
        <p className="text-gray-700">
          Kademya met en relation des parents/élèves et des professeurs
          indépendants, mais n&apos;intervient pas dans l&apos;organisation, le
          déroulement ou le contenu des cours. Les professeurs restent seuls
          responsables des prestations fournies et du respect de leurs
          obligations légales et contractuelles.
        </p>
        <p className="text-gray-700">
          Kademya ne saurait être tenue responsable des dommages directs ou
          indirects résultant de l&apos;utilisation du site, d&apos;une
          impossibilité d&apos;y accéder, ou de tout dysfonctionnement
          technique.
        </p>
      </section>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Liens externes
        </h2>
        <p className="text-gray-700">
          Le site peut contenir des liens vers des sites tiers. Kademya n&apos;a
          aucun contrôle sur ces sites et ne saurait être tenue responsable de
          leur contenu ni des éventuels dommages pouvant résulter de leur
          consultation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Contact
        </h2>
        <p className="text-gray-700">
          Pour toute question relative à ces mentions légales, vous pouvez nous
          contacter à l&apos;adresse suivante&nbsp;:{' '}
          <a
            href="mailto:contact@kademya-ci.com"
            className="text-emerald-700 underline"
          >
            contact@kademya-ci.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
