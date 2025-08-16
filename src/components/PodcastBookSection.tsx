import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, BookOpen, Play, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";

const PodcastBookSection = () => {
  const [expandedPodcast, setExpandedPodcast] = useState(false);
  const [expandedBook, setExpandedBook] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-accent/80 opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-white/5 to-white/10"></div>
      <div className="container-warm relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Podcast & <span className="text-white/90">Libro</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Recursos adicionales para tu proceso de autoconocimiento y sanación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Podcast Card */}
          <Card className="bg-gradient-to-br from-primary/5 via-card to-primary/10 border-primary/20 shadow-soft cursor-pointer"
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
                    Un espacio para quienes han sentido que llegaban tarde a su propio diagnóstico.
                  </p>
                </div>
              </div>
              
              {expandedPodcast && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ni loca ni vaga combina psicología, experiencias reales y reflexión crítica para dar voz y sentido a la neurodivergencia y al trauma.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button className="btn-healing w-full" onClick={(e) => e.stopPropagation()}>
                      <Headphones className="mr-2 h-4 w-4" />
                      Escuchar podcast
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Disponible en YouTube
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Book Card */}
          <Card className="bg-gradient-to-br from-secondary/5 via-card to-secondary/10 border-secondary/20 shadow-soft cursor-pointer"
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
                      "El día que Eco recuperó su voz"
                    </h3>
                    {expandedBook ? 
                      <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" /> : 
                      <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    }
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Todos saben quién fue Narciso… pero ¿quién era Eco?
                  </p>
                </div>
              </div>
              
              {expandedBook && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                      <p>Una voz que vuelve desde el eco del dolor.</p>
                      <p>Un relato real que abraza, informa y despierta.</p>
                      <p>Porque sanar también es alzar la voz.</p>
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