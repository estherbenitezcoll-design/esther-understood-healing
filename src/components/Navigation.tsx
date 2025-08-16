import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-warm">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="font-heading font-bold text-xl text-gradient">
              Esther Benítez
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-gentle font-medium"
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-gentle font-medium"
            >
              Sobre mí
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-gentle font-medium"
            >
              Servicios
            </Link>
            <Link 
              to="/podcast-book" 
              className="text-foreground hover:text-primary transition-gentle font-medium"
            >
              Podcast & Libro
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-gentle font-medium"
            >
              Contacto
            </Link>
            <Button className="btn-healing">
              Reservar sesión
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-gentle"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-gentle"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-gentle"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/podcast-book"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-gentle"
                onClick={() => setIsOpen(false)}
              >
                Podcast & Libro
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-gentle"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="px-3 py-2">
                <Button className="btn-healing w-full">
                  Reservar sesión
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;