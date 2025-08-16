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
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Terapia <span className="text-gradient">Online</span> Especializada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompañamiento terapéutico profesional desde la comodidad de tu hogar. 
            Especializado en trauma complejo, EMDR y apoyo a la neurodivergencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-gentle">
              <CardContent className="p-6 space-y-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-full w-fit mx-auto">
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
          ))}
        </div>

        {/* Main service card */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card via-card/95 to-muted/30 border-border/50 shadow-warm">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl font-heading font-bold">
              ¿Cómo trabajamos juntos/as?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h4 className="font-heading font-semibold">Primera sesión</h4>
                <p className="text-muted-foreground text-sm">
                  Conocemos tu historia y necesidades específicas en un ambiente de total confianza
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto">
                  <span className="text-2xl font-bold text-secondary">02</span>
                </div>
                <h4 className="font-heading font-semibold">Plan personalizado</h4>
                <p className="text-muted-foreground text-sm">
                  Diseñamos juntos/as un enfoque terapéutico adaptado a tu proceso único
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto">
                  <span className="text-2xl font-bold text-accent">03</span>
                </div>
                <h4 className="font-heading font-semibold">Acompañamiento</h4>
                <p className="text-muted-foreground text-sm">
                  Proceso de sanación gradual con herramientas específicas como EMDR
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 pt-8 border-t border-border/50">
              <div className="space-y-3">
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  ¿Lista/o para comenzar tu proceso de sanación?
                </h4>
                <p className="text-muted-foreground">
                  Contacta conmigo para agendar tu primera sesión o resolver cualquier duda
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-healing text-lg px-8 py-6">
                  Reservar sesión online
                </Button>
                <Button variant="outline" size="lg" className="bg-background border-primary text-primary hover:bg-primary hover:text-white transition-gentle">
                  WhatsApp 24/7
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;