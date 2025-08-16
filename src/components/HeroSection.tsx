import { Button } from "@/components/ui/button";
import { Heart, Play, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container-warm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-gentle-fade">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                No estás{" "}
                <span className="text-gradient">roto/a</span>
                <br />
                Aquí eres{" "}
                <span className="text-gradient">comprendido/a</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Psicóloga especializada en trauma complejo, EMDR y apoyo a personas 
                neurodivergentes. Terapia online personalizada desde la comprensión 
                y el respeto.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-healing text-lg px-8 py-6">
                <Heart className="mr-2 h-5 w-5" />
                Reservar mi sesión online
              </Button>
              <Button variant="outline" size="lg" className="bg-background/50 border-primary text-primary hover:bg-primary hover:text-white transition-gentle">
                <Play className="mr-2 h-5 w-5" />
                Escuchar podcast
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-accent border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-background"></div>
                </div>
                <span className="text-sm text-muted-foreground">+500 personas acompañadas</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-gentle-slide">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img
                src={heroImage}
                alt="Terapia especializada en trauma complejo y EMDR"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-soft backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Libro disponible</p>
                  <p className="text-sm text-muted-foreground">"El día que eco recuperó su voz"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;