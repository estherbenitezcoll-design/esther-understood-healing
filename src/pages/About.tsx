import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Brain, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const qualifications = [
    "Psicóloga Colegiada en el Colegio Oficial de Psicólogos",
    "Certificación Europea en EMDR (European EMDR Association)",
    "Especialización en Trauma Complejo y Disociación",
    "Formación específica en Neurodivergencia en la Edad Adulta",
    "Enfoque Integrador: Humanista, Sistémico y Psicodinámico",
    "Más de 500 horas de supervisión clínica"
  ];

  const values = [
    {
      icon: Heart,
      title: "Compasión",
      description: "Cada persona tiene una historia única que merece ser escuchada con respeto y empatía"
    },
    {
      icon: Brain,
      title: "Comprensión",
      description: "Entiendo la complejidad del trauma y la neurodivergencia desde la evidencia científica"
    },
    {
      icon: Users,
      title: "No juicio",
      description: "Un espacio completamente libre de etiquetas y juicios donde puedes ser tú mismo/a"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container-warm">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold">
                Conoce a <span className="text-gradient">Esther Benítez</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Psicóloga especializada en acompañar procesos de sanación desde 
                la comprensión profunda del trauma y la neurodivergencia
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-warm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Mi historia profesional
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mi camino en la psicología comenzó con una profunda curiosidad sobre 
                    la experiencia humana y un deseo genuino de acompañar a las personas 
                    en sus procesos más vulnerables y transformadores.
                  </p>
                  <p>
                    A lo largo de mi formación y práctica clínica, me he especializado 
                    en trauma complejo y EMDR, obteniendo mi certificación europea. 
                    Esta especialización nació de la comprensión de que muchas personas 
                    cargan con heridas invisibles que necesitan un enfoque especializado 
                    y sensible.
                  </p>
                  <p>
                    Mi trabajo con personas neurodivergentes me ha enseñado la importancia 
                    de mirar más allá de las etiquetas y comprender las experiencias únicas 
                    de cada individuo. Creo firmemente que no hay personas "rotas", sino 
                    historias que necesitan ser validadas y comprendidas.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-semibold">
                  Cualificaciones profesionales
                </h3>
                <div className="space-y-3">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
          <div className="container-warm">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Mis valores como <span className="text-gradient">terapeuta</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían mi práctica clínica y mi forma de acompañar 
                cada proceso terapéutico
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-gentle">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full w-fit mx-auto">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section-padding">
          <div className="container-warm">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm">
                <CardContent className="p-8 lg:p-12 space-y-6">
                  <div className="text-center space-y-4">
                    <Award className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-heading font-bold">
                      Mi filosofía terapéutica
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-foreground">"No estás roto/a, aquí eres comprendido/a"</strong> 
                      no es solo mi lema, es la base de mi práctica clínica.
                    </p>
                    <p>
                      Creo que cada persona que llega a terapia trae consigo una sabiduría 
                      innata sobre su propia experiencia. Mi rol como terapeuta no es 
                      "arreglar" a nadie, sino acompañar, validar y ofrecer herramientas 
                      que permitan reconectar con esa sabiduría interior.
                    </p>
                    <p>
                      Mi enfoque integra diferentes corrientes psicológicas, priorizando 
                      siempre la seguridad emocional y la construcción de una relación 
                      terapéutica basada en la confianza mutua y el respeto incondicional.
                    </p>
                  </div>

                  <div className="text-center pt-6">
                    <Button className="btn-healing text-lg px-8 py-6">
                      Comenzar mi proceso terapéutico
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;