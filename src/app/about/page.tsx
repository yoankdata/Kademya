import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { findImage } from '@/lib/placeholder-data';
import { Pattern } from '@/components/pattern';

const aboutImage = findImage('about-us');

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="relative bg-primary/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[.06]">
          <Pattern />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">À Propos d'Edalia</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Notre mission est de connecter les professeurs dévoués et les élèves motivés à Abidjan, pour créer une communauté d'apprentissage et de réussite.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Notre Histoire</h2>
            <p className="text-foreground/80 mb-4">
              Edalia est née d'une idée simple : une éducation de qualité doit être accessible à tous, partout à Abidjan. Nous avons vu des professeurs talentueux et passionnés, et des élèves désireux d'apprendre, qui avaient juste besoin d'un moyen simple pour se trouver.
            </p>
            <p className="text-foreground/80">
              Nous avons bâti une plateforme qui est plus qu'un simple annuaire. C'est une communauté basée sur la confiance, la transparence et l'amour de l'apprentissage. En vérifiant chaque professeur et en facilitant le contact direct via WhatsApp, nous donnons aux parents les moyens de faire le meilleur choix pour l'avenir de leur enfant.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </section>

        <section className="text-center bg-secondary py-16 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-[.06]">
              <Pattern />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Notre Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Chez Edalia, notre mission est simple : offrir à chaque élève d’Abidjan un accès facilité à un enseignement de qualité, et permettre à chaque professeur de valoriser son expertise sans intermédiaire ni commission. Nous créons un espace fiable, transparent et accessible où familles et enseignants peuvent se rencontrer, échanger et collaborer en toute confiance. Grâce à un parcours fluide, vérifié et pensé pour les usages locaux, Edalia rend le soutien scolaire plus proche, plus humain et plus efficace.
            </p>
          </div>
        </section>

        <section id="contact" className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Contactez-nous</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
                Vous avez des questions ou souhaitez devenir partenaire ? Nous serions ravis d'échanger avec vous.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-accent/20 rounded-full">
                        <Mail className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">Envoyez-nous un message</p>
                    <a href="mailto:contact@edalia.ci" className="text-primary hover:underline">contact@edalia.ci</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-accent/20 rounded-full">
                        <Phone className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-muted-foreground">Lun-Ven de 9h à 17h</p>
                    <a href="tel:+2250712345678" className="text-primary hover:underline">+225 07 12 34 56 78</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-accent/20 rounded-full">
                        <MapPin className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">Bureau</h3>
                    <p className="text-muted-foreground">Cocody Angré, Abidjan</p>
                    <p className="text-primary">Côte d'Ivoire</p>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
