import { Button } from "@/components/ui/button";
import { Heart, Play, BookOpen } from "lucide-react";
import liminalBackground from "@/assets/liminal-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${liminalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      
      <div className="container-warm relative z-10">
        <div className="text-center space-y-8 animate-gentle-fade max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight">
              No estás{" "}
              <span className="text-gradient">roto/a</span>
              <br />
              Aquí eres{" "}
              <span className="text-gradient">comprendido/a</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Psicóloga especializada en trauma complejo, EMDR y apoyo a personas 
              neurodivergentes. Terapia online personalizada desde la comprensión 
              y el respeto.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-healing text-lg px-8 py-6">
              <Heart className="mr-2 h-5 w-5" />
              Reservar mi sesión online
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 border-primary text-primary hover:bg-primary hover:text-white transition-gentle backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Escuchar podcast
            </Button>
            <Button variant="outline" size="lg" className="bg-white/20 border-accent text-accent hover:bg-accent hover:text-white transition-gentle backdrop-blur-sm">
              <BookOpen className="mr-2 h-5 w-5" />
              Libro disponible
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;