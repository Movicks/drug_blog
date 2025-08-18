"use client";

import { ArrowRight, Globe, Truck, Shield } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-10 lg:pt-32"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/backgroundImage.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Health Solutions
            <span className="block text-secondary">Direct from Trusted Sources</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access authentic wellness products, herbal remedies, supplements, and medical supplies 
            directly from verified manufacturers. Empowering better health through quality and affordability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProducts}
              className="btn-hero group"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm"
            >
              Contact Supplier
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-white/90 animate-float">
              <Globe className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-sm">Delivering health products worldwide</p>
            </div>
            <div className="flex flex-col items-center text-white/90 animate-float" style={{animationDelay: '0.5s'}}>
              <Shield className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Certified Quality</h3>
              <p className="text-sm">Strictly tested and verified products</p>
            </div>
            <div className="flex flex-col items-center text-white/90 animate-float" style={{animationDelay: '1s'}}>
              <Truck className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-sm">Fast and safe logistics for your health needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
