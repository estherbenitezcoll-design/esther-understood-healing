import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import logoSvg from "@/assets/logo.png";

// TikTok icon component since it's not in lucide-react
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary via-blue-200 via-30% via-amber-50 via-60% to-stone-50 border-t border-border/50">
      <div className="container-warm py-12">
        {/* Main Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Brand */}
          <div className="text-center space-y-4">
            <Link to="/" className="flex flex-col items-center justify-center space-y-2 hover:scale-110 hover:brightness-110 transition-all duration-300 hover:drop-shadow-lg">
              <img src={logoSvg} alt="Logo" className="h-24 w-24" />
              <span className="font-heading font-bold text-2xl text-gradient">
                Esther Benítez
              </span>
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:rotate-12 hover:drop-shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
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