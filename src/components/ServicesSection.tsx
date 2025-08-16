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
        <div className="space-y-12">
          {/* Features in a single row at the top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const colors = [
                { bg: 'bg-primary', shadow: 'shadow-blue' },
                { bg: 'bg-secondary', shadow: 'shadow-violet' },
        { bg: 'bg-tertiary', shadow: 'shadow-steel' },
        { bg: 'bg-accent', shadow: 'shadow-periwinkle' }
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

          {/* How we work together section below */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                  ¿Cómo trabajamos <span className="text-gradient">juntas</span>?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Card className="bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm hover:shadow-lg transition-gentle text-center">
                   <CardContent className="p-6 space-y-4">
                     <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                       <span className="text-2xl font-bold text-primary">01</span>
                     </div>
                     <div className="space-y-2">
                       <h4 className="font-heading font-semibold text-lg">Primera sesión</h4>
                       <p className="text-muted-foreground text-sm">
                         Conocemos tu historia y necesidades específicas en un ambiente de total confianza
                       </p>
                     </div>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm hover:shadow-lg transition-gentle text-center">
                   <CardContent className="p-6 space-y-4">
                     <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto">
                       <span className="text-2xl font-bold text-secondary">02</span>
                     </div>
                     <div className="space-y-2">
                       <h4 className="font-heading font-semibold text-lg">Plan personalizado</h4>
                       <p className="text-muted-foreground text-sm">
                         Diseñamos juntas un enfoque terapéutico adaptado a tu proceso único
                       </p>
                     </div>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm hover:shadow-lg transition-gentle text-center">
                   <CardContent className="p-6 space-y-4">
                     <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto">
                       <span className="text-2xl font-bold text-accent">03</span>
                     </div>
                     <div className="space-y-2">
                       <h4 className="font-heading font-semibold text-lg">Acompañamiento</h4>
                       <p className="text-muted-foreground text-sm">
                         Proceso de sanación gradual con herramientas específicas como EMDR
                       </p>
                     </div>
                   </CardContent>
                 </Card>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;