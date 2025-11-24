import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { findImage } from '@/lib/placeholder-data';
import { CheckCircle2, Zap, Users, BadgePercent, GraduationCap, ArrowRight, Check, Coins } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pageImage = findImage('become-teacher');

export default function BecomeATeacherPage() {
  return (
    <div className="bg-background">
      
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative py-24 md:py-32 flex items-center justify-center text-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
             {pageImage && (
              <Image
                src={pageImage.imageUrl}
                alt={pageImage.description}
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-[0.15] grayscale" 
                data-ai-hint={pageImage.imageHint}
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 container px-4 mx-auto max-w-4xl">
            <Badge className="mb-8 py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors rounded-full text-sm font-medium">
                🚀 Rejoignez la communauté des meilleurs profs d'Abidjan
            </Badge>
            
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-foreground">
                Enseignez librement.<br/>
                <span className="text-primary">Gagnez 100% de vos tarifs.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Fini les commissions. Edalia vous connecte directement aux parents d'élèves. Vous fixez vos règles, vous gardez tout ce que vous gagnez.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1" asChild>
                    <Link href="/become-a-teacher/form">
                        Créer mon profil maintenant <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </Button>
                <div className="text-sm text-muted-foreground sm:hidden mt-2">
                    Sans engagement • Annulable à tout moment
                </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground/80">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500"/> Profil Vérifié</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500"/> Paiement Direct</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500"/> Zéro Commission</span>
            </div>
        </div>
      </section>

      {/* ======================== FEATURES GRID ======================== */}
      <section className="py-24 container px-4 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">Pourquoi les professeurs choisissent Edalia ?</h2>
            <p className="text-lg text-muted-foreground">Une plateforme pensée pour valoriser votre expertise et simplifier votre quotidien.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group">
                <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Élèves qualifiés</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Ne perdez plus de temps à prospecter. Votre profil est visible par des centaines de parents qui cherchent activement dans votre commune.
                    </p>
                </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group">
                <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                        <Coins className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Revenus maximiés</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Contrairement aux agences, nous ne prenons rien sur vos heures. Si vous facturez 5000F, vous recevez 5000F. Point final.
                    </p>
                </CardContent>
            </Card>
            
            <Card className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group">
                <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                        <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Liberté totale</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        C'est votre activité. Vous décidez de vos tarifs, de vos horaires et des zones (Cocody, Yopougon, etc.) où vous intervenez.
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* ======================== PRICING & VALUE ======================== */}
      <section id="pricing" className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                        Un investissement minime,<br/>
                        <span className="text-primary">rentabilisé immédiatement.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Le modèle Edalia est unique à Abidjan. Plutôt que de vous taxer sur chaque heure de cours (ce qui vous coûte des dizaines de milliers de francs par mois), nous fonctionnons par abonnement simple.
                    </p>
                    
                    <div className="space-y-4 pt-2">
                         {[
                            "Visibilité prioritaire dans le catalogue",
                            "Badge 'Professeur Vérifié' rassurant les parents",
                            "Accès direct aux demandes WhatsApp",
                            "0% de commission sur vos gains",
                            "Support dédié par l'équipe Edalia"
                         ].map((item, i) => (
                             <div key={i} className="flex items-center gap-4 text-foreground font-medium">
                                 <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-sm">
                                     <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                 </div>
                                 {item}
                             </div>
                         ))}
                    </div>
                </div>

                {/* Pricing Card */}
                <div className="relative mx-auto w-full max-w-md">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30" />
                    
                    <Card className="relative bg-background border-primary/20 shadow-2xl overflow-hidden rounded-2xl">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent" />
                        <div className="absolute top-4 right-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                Offre de lancement
                            </Badge>
                        </div>
                        
                        <CardHeader className="p-8 pb-4 text-center">
                            <CardTitle className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Abonnement Mensuel</CardTitle>
                            <div className="flex items-baseline justify-center gap-1 mt-6">
                                <span className="text-6xl font-extrabold text-foreground tracking-tight">5 000</span>
                                <span className="text-xl font-bold text-muted-foreground">FCFA</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">/ mois sans engagement</p>
                        </CardHeader>
                        
                        <CardContent className="p-8 pt-4">
                            <div className="bg-secondary/50 rounded-lg p-4 mb-8 text-center border border-border/50">
                                <p className="text-sm font-medium text-foreground">
                                    💡 Rentabilisé dès votre <span className="text-primary font-bold">1ère heure de cours</span> !
                                </p>
                            </div>
                            
                            <Button asChild size="lg" className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                <Link href="/become-a-teacher/form">Je commence maintenant</Link>
                            </Button>
                            
                            <p className="text-xs text-center text-muted-foreground mt-6">
                                Paiement sécurisé par Mobile Money (Orange, Wave, MTN)
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>

      {/* ======================== HOW IT WORKS (STEPS) ======================== */}
      <section className="py-24 container px-4 mx-auto">
         <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold">Lancer votre activité en 3 étapes</h2>
         </div>
         
         <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-muted via-primary/30 to-muted -z-10" />
             
             {[
                 { step: "01", title: "Profil", text: "Créez votre fiche enseignant en 2 minutes avec vos infos et photo." },
                 { step: "02", title: "Activation", text: "Réglez votre abonnement pour activer votre visibilité immédiate." },
                 { step: "03", title: "Enseignement", text: "Recevez vos premiers appels et organisez vos cours." }
             ].map((s, i) => (
                 <div key={i} className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300 mb-6 shadow-sm z-10">
                         {s.step}
                     </div>
                     <h3 className="text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                     <p className="text-muted-foreground leading-relaxed px-4">{s.text}</p>
                 </div>
             ))}
         </div>
      </section>

      {/* ======================== FAQ SECTION ======================== */}
      <section className="py-24 bg-muted/20">
          <div className="container px-4 mx-auto max-w-3xl">
             <h2 className="font-headline text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
             
             <div className="bg-background rounded-2xl border shadow-sm p-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="px-4">
                    <AccordionTrigger className="text-lg font-medium py-6">Comment suis-je payé par les parents ?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                      C'est très simple : <strong>directement</strong>. Le parent vous paie à la fin du cours ou selon votre accord (hebdomadaire/mensuel). Vous encaissez l'argent via le moyen qui vous arrange (Cash, Wave, Orange Money). Edalia n'intervient pas dans la transaction.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="px-4">
                    <AccordionTrigger className="text-lg font-medium py-6">Quels documents pour la vérification ?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                      Pour obtenir le badge "Vérifié", nous demandons généralement une pièce d'identité valide et une preuve de votre niveau d'études (diplôme ou carte étudiante). Cela rassure énormément les parents et augmente vos demandes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="px-4">
                    <AccordionTrigger className="text-lg font-medium py-6">Puis-je arrêter l'abonnement quand je veux ?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                      Absolument. Si vous avez assez d'élèves ou si vous partez en vacances, vous ne renouvelez simplement pas l'abonnement le mois suivant. Votre profil reste "en pause" et vous pouvez le réactiver plus tard sans tout ressaisir.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="border-b-0 px-4">
                    <AccordionTrigger className="text-lg font-medium py-6">Comment payez l'abonnement Edalia ?</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                      Le paiement se fait par Mobile Money. Une fois votre profil créé, vous recevrez les instructions pour effectuer le transfert sécurisé. Votre compte est activé dans l'heure qui suit la réception.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
             </div>
          </div>
      </section>
    </div>
  );
}