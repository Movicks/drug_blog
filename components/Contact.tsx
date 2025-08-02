"use client";

import { Phone, Mail, MessageCircle, MapPin, Clock, Globe } from 'lucide-react';

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

const Contact = ({ contact }: Props) => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=Hi! I'm interested in sourcing health products. Could you please provide more information?`,
      '_blank'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${contact.phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contact.email}?subject=Health Product Inquiry`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-from-primary-to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our wellness products or need a tailored solution for your business? Contact our experts for personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card-gradient-red p-8 rounded-2xl border border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/90 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Consultation</h3>
              <p className="text-muted-foreground mb-4">Speak directly with a health trade consultant</p>
              <p className="text-lg font-medium text-primary">{contact.phoneNumber}</p>
            </div>

            <div className="bg-card-gradient-accent p-8 rounded-2xl border border-accent/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Inquiries</h3>
              <p className="text-muted-foreground mb-4">Request quotes and product catalogs</p>
              <p className="text-lg font-medium text-accent">{contact.email}</p>
            </div>

            <div className="bg-card-gradient-secondary p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">WhatsApp Support</h3>
              <p className="text-muted-foreground mb-4">Quick responses for urgent product requests</p>
              <p className="text-lg font-medium text-secondary">{contact.whatsappNumber}</p>
            </div>

            <div className="bg-card-gradient-muted p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Office Location</h3>
              <p className="text-muted-foreground mb-4">Schedule a visit to discuss bulk orders</p>
              <p className="text-lg font-medium text-foreground">{contact.officeLocation}</p>
            </div>
          </div>

          {/* Quick Action Panel */}
          <div className="bg-card backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xs">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Quick Actions</h3>

            <div className="space-y-4 mb-15">
              <div className="flex items-center justify-between px-4 py-2 bg-muted/80 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Business Hours</span>
                </div>
                <span className="text-sm text-muted-foreground">9AM - 6PM CST</span>
              </div>

              <div className="flex items-center justify-between px-4 py-2 bg-muted/30 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-secondary" />
                  <span className="font-medium text-foreground">Languages</span>
                </div>
                <span className="text-sm text-muted-foreground">EN, CN, ES</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Specialist
              </button>

              <button
                onClick={handleEmail}
                className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground py-4 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-3 h-5 w-5" />
                Send Inquiry
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
