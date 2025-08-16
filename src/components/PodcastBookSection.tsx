import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, BookOpen, Play, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";

const PodcastBookSection = () => {
  const [expandedPodcast, setExpandedPodcast] = useState(false);
  const [expandedBook, setExpandedBook] = useState(false);

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

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Podcast Card */}
          <Card className="bg-gradient-to-br from-primary/5 via-card to-primary/10 border-primary/20 shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedPodcast(!expandedPodcast)}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Podcast Cover Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      Podcast "Ni loca Ni vaga"
                    </h3>
                    {expandedPodcast ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    }
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Un espacio de reflexión y validación sobre trauma, neurodivergencia y salud mental.
                  </p>
                </div>
              </div>
              
              {expandedPodcast && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-foreground">
                      Episodios destacados:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg">
                        <Play className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          "Desmitificando el trauma complejo"
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg">
                        <Play className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          "La neurodivergencia invisible"
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg">
                        <Play className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          "Herramientas de autorregulación"
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="btn-healing w-full" onClick={(e) => e.stopPropagation()}>
                      <Headphones className="mr-2 h-4 w-4" />
                      Escuchar podcast
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Disponible en Spotify, Apple Podcasts y YouTube
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Book Card */}
          <Card className="bg-gradient-to-br from-secondary/5 via-card to-secondary/10 border-secondary/20 shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedBook(!expandedBook)}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                {/* Book Cover Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      "El día que eco recuperó su voz"
                    </h3>
                    {expandedBook ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    }
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Una guía íntima que combina experiencia clínica con narrativa personal.
                  </p>
                </div>
              </div>
              
              {expandedBook && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <h4 className="font-heading font-semibold text-foreground">
                      En este libro encontrarás:
                    </h4>
                    <div className="space-y-2">
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

                  <div className="space-y-3">
                    <Button className="btn-healing w-full" onClick={(e) => e.stopPropagation()}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Comprar en Amazon
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Disponible en formato físico y digital
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PodcastBookSection;