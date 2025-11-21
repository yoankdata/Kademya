import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, MapPin, Book, Briefcase, GraduationCap, Phone, Verified } from 'lucide-react';
import { teachers, findImage, Teacher } from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  return teachers.map((teacher) => ({
    id: teacher.id,
  }));
}

function getTeacher(id: string): Teacher | undefined {
  return teachers.find((teacher) => teacher.id === id);
}

export default function TeacherProfilePage({ params }: { params: { id: string } }) {
  const teacher = getTeacher(params.id);

  if (!teacher) {
    notFound();
  }

  const image = findImage(teacher.avatarImageId);
  const whatsappLink = `https://wa.me/${teacher.whatsappNumber}`;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column (Sticky) */}
          <aside className="md:col-span-1 md:sticky top-24 self-start">
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-square w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait de ${teacher.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      data-ai-hint={image.imageHint}
                    />
                  )}
                   <div className="absolute top-2 right-2">
                        <Badge className="bg-primary/80 backdrop-blur-sm text-primary-foreground">
                            <Verified className="w-4 h-4 mr-1.5" />
                            Vérifié
                        </Badge>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center space-y-4">
                <h1 className="font-headline text-3xl font-bold text-primary">{teacher.name}</h1>
                <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{teacher.location}</span>
                </div>
                <div className="flex justify-center items-center gap-2 text-accent">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-lg">{teacher.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground text-sm">({teacher.reviews} avis)</span>
                </div>
                <Separator />
                <div className="text-left space-y-1">
                    <p className="text-muted-foreground">Tarif</p>
                    <p><span className="font-bold text-2xl text-primary">{teacher.rate.toLocaleString('fr-CI')} FCFA</span> / heure</p>
                </div>
                 <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> Contacter sur WhatsApp
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground pt-2">Professeur vérifié par Edalia</p>
              </CardContent>
            </Card>
          </aside>

          {/* Right Column */}
          <main className="md:col-span-2 space-y-10">
            <section>
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">À propos de moi</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{teacher.bio}</p>
            </section>
            
            <section>
                <Card>
                    <CardContent className="p-6 grid sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <Briefcase className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">Expérience</h3>
                                <p className="text-muted-foreground">{teacher.experience}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <GraduationCap className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg">Diplômes</h3>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {teacher.qualifications.map(q => <li key={q}>{q}</li>)}
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section>
              <h2 className="font-headline text-2xl font-bold text-primary mb-4">Matières enseignées</h2>
              <div className="flex flex-wrap gap-3">
                {teacher.subjects.map((subject) => (
                  <Badge key={subject} className="text-base px-4 py-2" variant="secondary">{subject}</Badge>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
