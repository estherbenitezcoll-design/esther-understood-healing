import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, BookOpen, Play, ShoppingCart } from "lucide-react";

const PodcastBookSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-warm">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Podcast & <span className="text-gradient">Libro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos adicionales para tu proceso de autoconocimiento y sanación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Podcast Card */}
          <Card className="bg-gradient-to-br from-primary/5 via-card to-primary/10 border-primary/20 shadow-soft">
            <CardHeader className="text-center space-y-4">
              <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-full w-fit mx-auto">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-heading font-bold">
                Podcast "Ni loca Ni vaga"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center leading-relaxed">
                Un espacio de reflexión y validación donde exploramos temas de 
                trauma, neurodivergencia y salud mental desde una perspectiva 
                comprensiva y libre de etiquetas.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-heading font-semibold text-foreground text-center">
                  Episodios destacados:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                    <Play className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      "Desmitificando el trauma complejo"
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                    <Play className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      "La neurodivergencia invisible"
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg">
                    <Play className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      "Herramientas de autorregulación"
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <Button className="btn-healing w-full">
                  <Headphones className="mr-2 h-5 w-5" />
                  Escuchar podcast
                </Button>
                <p className="text-xs text-muted-foreground">
                  Disponible en Spotify, Apple Podcasts y YouTube
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Book Card */}
          <Card className="bg-gradient-to-br from-secondary/5 via-card to-secondary/10 border-secondary/20 shadow-soft">
            <CardHeader className="text-center space-y-4">
              <div className="bg-gradient-to-br from-secondary to-accent p-4 rounded-full w-fit mx-auto">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-heading font-bold">
                "El día que eco recuperó su voz"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center leading-relaxed">
                Una guía íntima y profesional que combina experiencia clínica 
                con narrativa personal para acompañarte en tu proceso de 
                reconexión contigo mismo/a.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-heading font-semibold text-foreground text-center">
                  En este libro encontrarás:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Herramientas prácticas de autorregulación emocional
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Estrategias para reconocer y sanar patrones traumáticos
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Ejercicios de reconexión con tu voz interior auténtica
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Reflexiones sobre neurodivergencia y autocompasión
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-3">
                <Button className="btn-healing w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar en Amazon
                </Button>
                <p className="text-xs text-muted-foreground">
                  Disponible en formato físico y digital
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 space-y-6">
          <h3 className="text-2xl font-heading font-semibold">
            ¿Te resuenan estos recursos?
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Si quieres profundizar en tu proceso personal, te invito a que 
            agendemos una sesión para trabajar juntos/as de manera personalizada.
          </p>
          <Button className="btn-healing text-lg px-8 py-6">
            Reservar mi primera sesión
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastBookSection;