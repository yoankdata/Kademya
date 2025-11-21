import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Search, Star, Verified, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TeacherCard } from '@/components/teacher-card';
import { teachers, findImage } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const heroImage = findImage('hero-image');
const featuredTeachers = teachers.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary tracking-tight">
                      Trouvez un professeur fiable à Abidjan en 2 minutes
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80">
                      Professeurs vérifiés • Sans commission • Contact direct WhatsApp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/teachers">Voir les profs</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/become-a-teacher">Devenir Prof</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                    {heroImage && (
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        data-ai-hint={heroImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Comment ça marche ?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">C'est simple comme bonjour.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Search className="h-10 w-10 text-accent" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-primary">1. Cherchez</h3>
                <p className="text-foreground/80">Parcourez les profils de profs vérifiés par matière et par commune.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-primary">2. Choisissez</h3>
                <p className="text-foreground/80">Consultez les profils détaillés avec les tarifs, les avis et les diplômes.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                 <div className="bg-green-500/10 p-4 rounded-full">
                  <Phone className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-headline text-2xl font-semibold text-primary">3. Contactez</h3>
                <p className="text-foreground/80">Échangez directement avec le prof sur WhatsApp pour fixer le cours.</p>
              </div>
            </div>
             <div className="text-center mt-12">
                <Badge variant="secondary" className="text-base px-4 py-2 text-foreground/80">
                    <Verified className="w-5 h-5 mr-2 text-primary"/>
                    Tous les professeurs sont vérifiés par Edalia
                </Badge>
            </div>
          </div>
        </section>

        {/* Featured Teachers Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Nos professeurs à la une</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Découvrez quelques-uns de nos enseignants les plus appréciés.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/teachers">Voir tous les profs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Ce que les parents en pensent</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/parent1/100/100" data-ai-hint="african parent portrait" />
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">Mme. Konan</h4>
                      <p className="text-sm text-muted-foreground">Maman de Cédric</p>
                    </div>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                   <p className="text-foreground/80 italic">"Grâce à Edalia, j'ai trouvé un super prof de maths pour mon fils. Le contact direct sur WhatsApp, c'est vraiment pratique. Les notes de Cédric ont beaucoup augmenté !"</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/parent2/100/100" data-ai-hint="african parent portrait" />
                      <AvatarFallback>M.D.</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">M. Diarra</h4>
                      <p className="text-sm text-muted-foreground">Papa de Aïcha</p>
                    </div>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                   <p className="text-foreground/80 italic">"Je cherchais un prof de guitare pour ma fille. La plateforme est simple et les profs sont sérieux. Je recommande Edalia sans hésiter."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
