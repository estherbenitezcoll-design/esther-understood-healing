import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Clock, Shield, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Terapia 100% Online",
      description: "Sesiones cómodas desde tu espacio seguro, sin desplazamientos"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Adaptados a tu rutina y necesidades personales"
    },
    {
      icon: Shield,
      title: "Espacio Seguro",
      description: "Ambiente libre de juicios donde puedes ser tú mismo/a"
    },
    {
      icon: MessageCircle,
      title: "Enfoque Personalizado",
      description: "Terapia diseñada específicamente para tu proceso único"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-warm">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Specialized Online Therapy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                Terapia <span className="text-gradient">Online</span> Especializada
              </h2>
              <p className="text-xl text-muted-foreground">
                Acompañamiento terapéutico profesional desde la comodidad de tu hogar. 
                Especializado en trauma complejo, EMDR y apoyo a la neurodivergencia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const colors = [
                  { bg: 'bg-primary', shadow: 'shadow-blue' },
                  { bg: 'bg-secondary', shadow: 'shadow-pink' },
                  { bg: 'bg-tertiary', shadow: 'shadow-mint' },
                  { bg: 'bg-accent', shadow: 'shadow-lavender' }
                ];
                const colorSet = colors[index % colors.length];
                
                return (
                  <Card key={index} className={`text-center border-border/50 bg-card/50 backdrop-blur-sm hover:${colorSet.shadow} transition-gentle`}>
                    <CardContent className="p-6 space-y-4">
                      <div className={`${colorSet.bg} p-3 rounded-full w-fit mx-auto`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right side - How we work together */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                ¿Cómo trabajamos <span className="text-gradient">juntas</span>?
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-primary">01</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold">Primera sesión</h4>
                      <p className="text-muted-foreground text-sm">
                        Conocemos tu historia y necesidades específicas en un ambiente de total confianza
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-secondary">02</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold">Plan personalizado</h4>
                      <p className="text-muted-foreground text-sm">
                        Diseñamos juntas un enfoque terapéutico adaptado a tu proceso único
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-accent">03</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold">Acompañamiento</h4>
                      <p className="text-muted-foreground text-sm">
                        Proceso de sanación gradual con herramientas específicas como EMDR
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;