import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-medium' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-foreground hover:text-accent transition-smooth"
            >
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Malav Shah
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className={`text-sm font-medium transition-smooth hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setIsContactDialogOpen(true)}
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-foreground' : 'text-white'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-medium">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-3 py-2">
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => setIsContactDialogOpen(true)}
                  className="w-full"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <ContactDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    </nav>
  );
};

export default Navigation;