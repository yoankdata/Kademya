// src/app/cgu/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation – Kademya",
  description:
    "Conditions Générales d'Utilisation de la plateforme Kademya pour les parents, élèves et professeurs.",
};

export default function CguPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 pt-24 md:pt-36 pb-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Conditions Générales d'Utilisation – Kademya
      </h1>

      <p className="text-gray-700 mb-6">
        Les présentes Conditions Générales d'Utilisation (CGU) ont pour
        objet de définir les modalités et conditions d'utilisation de la
        plateforme <strong>Kademya</strong> par les parents, élèves et
        professeurs.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">1. Définitions</h2>
        <p className="text-gray-700">
          Dans le cadre des présentes CGU, les termes suivants ont la signification
          qui suit&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>« Kademya »</strong> : plateforme de mise en relation entre
            parents/élèves et professeurs indépendants.
          </li>
          <li>
            <strong>« Utilisateur »</strong> : toute personne consultant le site
            ou utilisant les services proposés par Kademya (parent, élève,
            professeur).
          </li>
          <li>
            <strong>« Professeur »</strong> : personne proposant des cours via
            la plateforme.
          </li>
          <li>
            <strong>« Parent/Élève »</strong> : personne recherchant un professeur
            via la plateforme.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">2. Objet</h2>
        <p className="text-gray-700">
          Kademya met à disposition une plateforme permettant aux professeurs de
          proposer leurs services de cours et aux parents/élèves de trouver un
          professeur correspondant à leurs besoins. Kademya n'est pas
          partie au contrat qui peut être conclu entre un parent/élève et un
          professeur, et n'intervient pas dans le contenu ou la
          réalisation des cours.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Rôle et responsabilité de Kademya
        </h2>
        <p className="text-gray-700">
          Kademya agit en tant qu'intermédiaire technique de mise en
          relation. À ce titre&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Kademya met à disposition un espace permettant aux professeurs de
            créer un profil et aux parents/élèves de les contacter.
          </li>
          <li>
            Kademya effectue une vérification de base des informations et
            documents fournis par les professeurs, sans pouvoir garantir l'
            exhaustivité ou l'authenticité absolue de ces éléments.
          </li>
          <li>
            Kademya n'est pas responsable du déroulement des cours, de la
            ponctualité, de la qualité pédagogique ou du résultat scolaire.
          </li>
        </ul>
        <p className="text-gray-700">
          Kademya ne saurait être tenue responsable des litiges survenant entre
          un parent/élève et un professeur. En cas de problème sérieux, l'
          utilisateur est invité à contacter Kademya, qui pourra intervenir à
          titre de médiateur dans la mesure du possible.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          4. Obligations des professeurs
        </h2>
        <p className="text-gray-700">
          Le professeur s'engage à&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            fournir des informations exactes, complètes et à jour lors de la
            création de son profil ;
          </li>
          <li>
            transmettre des documents authentiques (diplômes, justificatifs,
            pièce d'identité) lors de la vérification ;
          </li>
          <li>
            respecter les élèves et les familles, agir avec professionnalisme,
            courtoisie et dans le respect des règles de sécurité et de
            confidentialité ;
          </li>
          <li>
            prévenir le parent/élève en cas de retard ou d'annulation
            d'un cours, dans des délais raisonnables.
          </li>
          <li>
            disposer d'un abonnement actif afin de rester visible
            dans le catalogue public de Kademya. Deux formules sont disponibles :
            <br />
            - <strong>Abonnement mensuel : 10 000 FCFA</strong>
            <br />
            - <strong>Abonnement trimestriel : 25 000 FCFA</strong>
            <br />
            Un profil enseignant n’est visible qu’avec un abonnement actif, peu importe la formule choisie.
          </li>
        </ul>
        <p className="text-gray-700">
          Kademya se réserve le droit de suspendre ou supprimer le profil d'
          un professeur en cas de comportement inapproprié, fraude, non-respect
          des présentes CGU, ou en cas de non-renouvellement de l'abonnement
          de visibilité. En l'absence d'abonnement actif, le profil
          du professeur peut être masqué ou rendu inaccessible aux parents/élèves.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          5. Obligations des parents/élèves
        </h2>
        <p className="text-gray-700">
          Le parent/élève s'engage à&nbsp;:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>utiliser la plateforme de manière honnête et loyale ;</li>
          <li>
            fournir des informations exactes lors des prises de contact avec les
            professeurs ;
          </li>
          <li>
            respecter le temps et les conditions convenues avec le professeur
            (horaires, lieu, mode de paiement, etc.) ;
          </li>
          <li>
            adopter un comportement respectueux à l'égard des professeurs.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">6. Paiements</h2>
        <p className="text-gray-700">
          Dans la version actuelle de la plateforme, les paiements des cours sont gérés
          directement entre le parent/élève et le professeur (espèces, Mobile
          Money, virement, etc.). Kademya n'encaisse pas les paiements et
          n'intervient pas dans la négociation des conditions financières.
        </p>
        <p className="text-gray-700">
          Il appartient au parent/élève et au professeur de s'accorder sur
          le tarif, les modalités et la fréquence des paiements.
        </p>
        <p className="text-gray-700">
          La mise en relation et la visibilité des professeurs sur la plateforme
          sont financées par un abonnement mensuel payé par les professeurs. Kademya
          ne perçoit <strong>aucune commission</strong> sur le montant des cours
          dispensés.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">7. Avis</h2>
        <p className="text-gray-700">
          Les parents/élèves peuvent laisser un avis et une note sur un professeur
          après un ou plusieurs cours. Les avis doivent rester honnêtes, factuels
          et respectueux.
        </p>
        <p className="text-gray-700">
          Kademya se réserve le droit de modérer, suspendre ou supprimer tout
          avis contenant des propos injurieux, diffamatoires, discriminatoires ou
          manifestement sans lien avec l'expérience réelle.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          8. Accès au site et disponibilité
        </h2>
        <p className="text-gray-700">
          Kademya s'efforce de maintenir le site accessible et fonctionnel,
          mais ne peut garantir une disponibilité continue et sans interruption.
          Des opérations de maintenance ou des incidents techniques peuvent
          entraîner une indisponibilité temporaire.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          9. Suspension et suppression de compte
        </h2>
        <p className="text-gray-700">
          Kademya se réserve le droit de suspendre ou supprimer le compte d'
          un utilisateur (professeur ou parent/élève) en cas de non-respect des
          présentes CGU, de fraude, de tentative de détournement de la
          plateforme ou de comportement inapproprié. En ce qui concerne les
          professeurs, le non-renouvellement de l'abonnement de visibilité
          peut également entraîner la désactivation du profil public.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          10. Modification des CGU
        </h2>
        <p className="text-gray-700">
          Kademya se réserve le droit de modifier les présentes CGU à tout
          moment. La version à jour est celle publiée sur cette page. Il est
          recommandé de consulter régulièrement cette page pour prendre
          connaissance d'éventuelles modifications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">11. Contact</h2>
        <p className="text-gray-700">
          Pour toute question relative aux présentes CGU, vous pouvez nous
          contacter à l'adresse suivante&nbsp;:{' '}
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
