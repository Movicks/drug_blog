"use client";

import { Phone, Mail, MessageCircle } from 'lucide-react';

type Contact = {
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
  };
  
  type Props = {
    contact: Contact;
};

const Footer = ({ contact }: Props) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contact.whatsappNumber}?text=Hi! I\'m interested in your products. Could you please provide more information?`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-primary mb-2">ChinalinkTrade</h3>
            <p className="text-background/80 text-sm max-w-md mx-auto">
              Your trusted partner for premium health products worldwide.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
            <a 
              href="tel:+8613800138000"
              className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-2 text-sm"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">{contact.phoneNumber}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a 
              href="mailto:sales@chinalinktrade.com"
              className="text-secondary hover:text-secondary/80 transition-colors flex items-center space-x-2 text-sm"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <button 
              onClick={handleWhatsApp}
              className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-2 text-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </button>
          </div>
          
          <div className="border-t border-background/20 pt-4 text-center">
            <p className="text-background/60 text-xs">
              © {currentYear} ChinalinkTrade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;