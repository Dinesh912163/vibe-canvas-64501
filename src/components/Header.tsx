import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold text-foreground">Saubhagya</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-smooth font-medium ${location.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-smooth font-medium ${location.pathname === '/how-it-works' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              How It Works
            </Link>
            <Link 
              to="/benefits" 
              className={`transition-smooth font-medium ${location.pathname === '/benefits' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              Benefits
            </Link>
            <Link 
              to="/user-types" 
              className={`transition-smooth font-medium ${location.pathname === '/user-types' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              User Types
            </Link>
            <Link 
              to="/about" 
              className={`transition-smooth font-medium ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-smooth font-medium ${location.pathname === '/contact' ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4" />
              Call
            </Button>
            <Button variant="hero" size="sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};