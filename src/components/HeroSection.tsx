import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import liminalBackground from "@/assets/liminal-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-start justify-center relative pt-20 pb-16"
      style={{
        backgroundImage: `url(${liminalBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 backdrop-blur-[0.5px]"></div>
      
      <div className="container-warm relative z-10">
        <div className="text-center space-y-20 animate-gentle-fade max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight text-white animate-heartbeat">
              Haz que la terapia te acompañe.
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto font-normal">
              Soy Esther Benítez, psicóloga especializada en trauma complejo y TEPT, terapia EMDR y acompañamiento a personas adultas neurodivergentes.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
             <Button size="lg" className="btn-healing px-8 py-4 text-lg">
               <BookOpen className="mr-2 h-5 w-5" />
               Reservar mi sesión online
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;