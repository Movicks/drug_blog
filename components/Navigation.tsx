"use client"

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';


type Contact = {
  _id: string;
  fullName: string;
  position: string;
  officeLocation: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  clients: number;
  yearsOfExperience: number;
  profileImage: string;
};


type Props = {
  contact: Contact;
};

const Navigation = ({ contact }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      } ${isMenuOpen ? 'bg-white/80 backdrop-blur-xl border-b border-border' : ''}`}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative z-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl lg:text-4xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-secondary'
            } ${isMenuOpen ? 'text-primary' : ''}`}>
              Felo.ng
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-secondary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-secondary'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-secondary'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-secondary'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${contact.phoneNumber}`}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-primary hover:text-primary/80' 
                  : 'text-white hover:text-primary'
              }`}
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-accent hover:text-accent/80' 
                  : 'text-white hover:text-secondary'
              }`}
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className={`md:hidden border-2 border-white/30 p-[1px] rounded-lg ${isScrolled ? 'border-accent' : ''} ${isMenuOpen ? 'border-accent' : ''}`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={`transition-colors text-3xl ${
                isScrolled 
                  ? 'text-accent hover:text-accent/80' 
                  : 'text-white hover:text-secondary'
              } ${isMenuOpen ? 'text-accent' : ''}`}
            >
              {isMenuOpen ? <X size={34} /> : <Menu size={34} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Contact
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href={`tel:${contact.phoneNumber}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:text-accent/80 transition-colors"
                  aria-label="Email us"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;