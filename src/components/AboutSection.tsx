import { CheckCircle, Brain, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import estherProfile from "@/assets/esther-profile.jpg";

const AboutSection = () => {
  const specializations = [
    {
      icon: Brain,
      title: "Trauma complejo y TEPT",
      description: "Especialización en traumas de desarrollo y experiencias adversas repetidas"
    },
    {
      icon: Heart,
      title: "Terapia EMDR",
      description: "Certificación europea en EMDR para procesamiento de traumas"
    },
    {
      icon: Users,
      title: "Neurodivergencia en adultos",
      description: "Apoyo especializado a personas neurodivergentes incomprendidas"
    }
  ];

  const approaches = [
    "Enfoque integrador no centrado únicamente en TCC",
    "Terapia centrada en la persona y sus necesidades únicas",
    "Comprensión profunda del trauma y la neurodivergencia",
    "Ambiente seguro y libre de juicios",
    "Validación de experiencias y emociones"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
      <div className="container-warm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-2">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={estherProfile} alt="Esther Benítez" />
                    <AvatarFallback>EB</AvatarFallback>
                  </Avatar>
                </Card>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold">
                  Sobre <span className="text-gradient">Esther Benítez</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Psicóloga colegiada especializada en trauma complejo y terapia EMDR, 
                con certificación europea. Mi enfoque se centra en acompañar a personas 
                que han sido etiquetadas injustamente como "locas" o "vagas", ofreciendo 
                un espacio seguro de comprensión y sanación.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creo firmemente que cada persona tiene una historia única que merece 
                ser escuchada y validada. Mi trabajo se basa en la comprensión profunda 
                del trauma y la neurodivergencia, alejándome de enfoques rígidos para 
                ofrecer terapia verdaderamente personalizada.
              </p>
            </div>

            {/* Approach points */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Mi enfoque terapéutico:
              </h3>
              <div className="space-y-3">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-center">
              Especializaciones
            </h3>
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-gentle">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                        <spec.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-heading font-semibold text-foreground">
                          {spec.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;