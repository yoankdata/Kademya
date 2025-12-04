// src/app/politique-confidentialite/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité – Kademya',
  description:
    'Politique de confidentialité de Kademya concernant la collecte et le traitement des données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-24 md:pt-36 pb-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Politique de confidentialité – Kademya
      </h1>

      <p className="text-gray-700 mb-6">
        La présente politique de confidentialité a pour objectif d'informer
        les utilisateurs de la plateforme <strong>Kademya</strong> sur la
        manière dont leurs données personnelles sont collectées, utilisées,
        stockées et protégées.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          1. Responsable du traitement
        </h2>
        <p className="text-gray-700">
          Le responsable du traitement des données personnelles collectées via
          la plateforme Kademya est&nbsp;:
          <br />
          <strong>Kademya – Représentant légal&nbsp;: Yoan Kilolo</strong>
          <br />
          Email&nbsp;:{' '}
          <a
            href="mailto:contact@kademya-ci.com"
            className="text-emerald-700 underline"
          >
            contact@kademya-ci.com
          </a>
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          2. Données collectées
        </h2>
        <p className="text-gray-700">
          Dans le cadre de l'utilisation de la plateforme, Kademya peut
          collecter les catégories de données suivantes&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Données professeurs</strong> : nom, prénom, photo de profil,
            ville/quartier, matières enseignées, niveaux, tarif horaire,
            description/bio, diplômes, disponibilités, liens de contact (WhatsApp,
            email), documents de vérification (copie de pièce d'identité,
            justificatif de diplôme, etc.).
          </li>
          <li>
            <strong>Données parents/élèves</strong> : nom, prénom, email, numéro
            de téléphone (le cas échéant), contenu des messages envoyés via les
            formulaires de contact.
          </li>
          <li>
            <strong>Données de navigation</strong> : données techniques liées à
            la consultation du site (adresse IP, type de navigateur, pages
            consultées, etc.), à des fins de sécurité et de statistiques
            internes.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Finalités du traitement
        </h2>
        <p className="text-gray-700">
          Les données collectées sont utilisées pour les finalités suivantes&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Création, affichage et gestion des profils professeurs.</li>
          <li>Mise en relation entre parents/élèves et professeurs.</li>
          <li>
            Vérification et sécurisation des profils professeurs (contrôle des
            documents transmis).
          </li>
          <li>Gestion des demandes envoyées via les formulaires de contact.</li>
          <li>Amélioration de la qualité du service et de l'expérience utilisateur.</li>
          <li>Prévention des fraudes et abus sur la plateforme.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          4. Base légale du traitement
        </h2>
        <p className="text-gray-700">
          Les traitements de données réalisés par Kademya reposent principalement
          sur&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            l'exécution de mesures précontractuelles ou contractuelles
            (mise en relation, gestion des profils professeurs) ;
          </li>
          <li>
            le consentement de l'utilisateur (création de compte, envoi de
            formulaire, transmission de documents) ;
          </li>
          <li>
            l'intérêt légitime de Kademya à sécuriser sa plateforme et à
            prévenir la fraude.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          5. Durée de conservation
        </h2>
        <p className="text-gray-700">
          Les données sont conservées pour une durée n'excédant pas celle
          nécessaire aux finalités pour lesquelles elles sont collectées&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Données liées au profil professeur&nbsp;: conservées tant que le
            compte est actif, puis archivées pendant une durée maximale de 5 ans
            à compter de la désactivation du compte, sauf obligation légale
            contraire.
          </li>
          <li>
            Données liées aux demandes de contact&nbsp;: conservées pendant une
            durée maximale de 3 ans à compter du dernier échange.
          </li>
          <li>
            Documents de vérification&nbsp;: conservés pour la durée
            strictement nécessaire à la vérification et à la sécurisation des
            profils, puis supprimés ou anonymisés dans la mesure du possible.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          6. Partage des données
        </h2>
        <p className="text-gray-700">
          Kademya ne vend pas les données personnelles à des tiers.
          Certaines données peuvent être partagées avec&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Des prestataires techniques (hébergement, outils de stockage et de
            sécurité), uniquement dans la mesure nécessaire à leur mission.
          </li>
          <li>
            Les autorités compétentes, en cas d'obligation légale ou de
            procédure judiciaire.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          7. Sécurité des données
        </h2>
        <p className="text-gray-700">
          Kademya met en œuvre des mesures techniques et organisationnelles
          adaptées pour protéger les données personnelles contre la destruction
          accidentelle ou illicite, la perte, l'altération, la
          divulgation ou l'accès non autorisé.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          8. Droits des utilisateurs
        </h2>
        <p className="text-gray-700">
          Conformément aux réglementations applicables en matière de protection
          des données, les utilisateurs disposent des droits suivants sur leurs
          données personnelles&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Droit d'accès ;</li>
          <li>Droit de rectification ;</li>
          <li>Droit d'effacement (dans les limites légales) ;</li>
          <li>Droit d'opposition au traitement ;</li>
          <li>Droit à la limitation du traitement ;</li>
          <li>Droit à la portabilité (dans les cas applicables).</li>
        </ul>
        <p className="text-gray-700">
          Pour exercer ces droits, l'utilisateur peut contacter&nbsp;:{' '}
          <a
            href="mailto:contact@kademya-ci.com"
            className="text-emerald-700 underline"
          >
            contact@kademya-ci.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">
          9. Mise à jour de la politique
        </h2>
        <p className="text-gray-700">
          Kademya se réserve le droit de modifier la présente politique de
          confidentialité à tout moment. En cas de modification, la nouvelle
          version sera publiée sur cette page avec une mention de la date de
          mise à jour. Il est recommandé de consulter régulièrement cette page.
        </p>
      </section>
    </main>
  );
}
