import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-white via-40% to-[#287995] border-t border-border/50">
      <div className="container-warm py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:scale-110 hover:brightness-110 transition-all duration-300 hover:drop-shadow-lg">
              <img src={logoSvg} alt="Logo" className="h-16 w-16" />
              <span className="font-heading font-bold text-xl text-gradient">
                Esther Benítez
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Psicóloga especializada en trauma complejo, EMDR y apoyo a la neurodivergencia. 
              Un espacio seguro donde sanar y crecer.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Navegación
            </h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary hover:scale-105 hover:translate-x-2 hover:font-semibold transition-all duration-300 text-sm"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary hover:scale-105 hover:translate-x-2 hover:font-semibold transition-all duration-300 text-sm"
              >
                Sobre mí
              </Link>
              <Link 
                to="/services" 
                className="block text-muted-foreground hover:text-primary hover:scale-105 hover:translate-x-2 hover:font-semibold transition-all duration-300 text-sm"
              >
                Servicios
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary hover:scale-105 hover:translate-x-2 hover:font-semibold transition-all duration-300 text-sm"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Servicios
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Terapia Online</p>
              <p className="text-muted-foreground text-sm">Trauma Complejo</p>
              <p className="text-muted-foreground text-sm">EMDR</p>
              <p className="text-muted-foreground text-sm">Neurodivergencia</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Contacto
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                contacto@estherbenitez.com
              </p>
              <p className="text-muted-foreground text-sm">
                WhatsApp 24/7
              </p>
              <div className="flex space-x-3 pt-2">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Esther Benítez. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-muted-foreground hover:text-primary hover:scale-105 hover:font-semibold transition-all duration-300"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground hover:text-primary hover:scale-105 hover:font-semibold transition-all duration-300"
            >
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;