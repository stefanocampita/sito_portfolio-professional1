import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-display font-bold text-primary text-xl">
              SC
            </div>
            <span className="font-display font-semibold text-primary-foreground text-lg tracking-wide">
              Stefano Campita
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium pb-1 ${
                isActive('/') ? 'border-b-2 border-accent text-accent' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium pb-1 ${
                isActive('/portfolio') ? 'border-b-2 border-accent text-accent' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className={`text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium pb-1 ${
                isActive('/blog') ? 'border-b-2 border-accent text-accent' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-primary-foreground/90 hover:text-accent transition-colors duration-300 font-medium pb-1 ${
                isActive('/contact') ? 'border-b-2 border-accent text-accent' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};
