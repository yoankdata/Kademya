import { TeacherCard } from "@/components/teacher-card";
import { teachers } from "@/lib/placeholder-data";

export default function TeachersPage() {
  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center space-y-4 mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Découvrez nos professeurs</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Parcourez notre annuaire de professeurs vérifiés et passionnés, prêts à vous accompagner vers la réussite.
          </p>
        </header>

        <main>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
