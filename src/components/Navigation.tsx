import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoSvg from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container-warm">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoSvg} alt="Logo" className="h-16 w-16" />
            <span className="font-heading font-bold text-xl text-gradient">
              Esther Benítez
            </span>
          </Link>

          {/* Navigation with only Reserve button */}
          <div className="flex items-center">
            <Button className="btn-healing">
              Reservar sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;