
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            ByteNRun
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-item ${isActivePath('/') ? 'nav-item-active' : ''}`}>
            Home
          </Link>
          <Link to="/menu" className={`nav-item ${isActivePath('/menu') ? 'nav-item-active' : ''}`}>
            Food
          </Link>
          <Link to="/errands" className={`nav-item ${isActivePath('/errands') ? 'nav-item-active' : ''}`}>
            Errands
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-secondary transition-colors duration-200">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link to="/login">
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-secondary transition-colors duration-200">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-sm animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`py-2 px-4 rounded-md ${isActivePath('/') ? 'bg-secondary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`py-2 px-4 rounded-md ${isActivePath('/menu') ? 'bg-secondary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Food
            </Link>
            <Link
              to="/errands"
              className={`py-2 px-4 rounded-md ${isActivePath('/errands') ? 'bg-secondary' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Errands
            </Link>
            <Link
              to="/login"
              className="py-2 px-4 rounded-md flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
