import { Link, useLocation } from "react-router-dom";
import cowLogo from "/attached_assets/stock_images/beautiful_indian_cow_195670f8.jpg";

export const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img 
                src={cowLogo} 
                alt="Saubhagya Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Saubhagya</span>
          </Link>

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
              Users
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

        </div>
      </div>
    </header>
  );
};