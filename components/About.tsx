import { urlFor } from '@/sanity/lib/image';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';


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

const About = ({ contact }: Props) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Felo.ng
          </h2>
          <div className="w-24 h-1 bg-gradient-from-primary-to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium health products with over 15 years of experience connecting global markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-4 w-full">
            <div className="flex flex-wrap justify-center gap-8 mb-8 min-w-full">
              <div className="bg-card-gradient-red p-6 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300 lg:w-[30rem]">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous quality control and health compliance testing for all products</p>
              </div>
              
              <div className="bg-card-gradient-accent p-6 rounded-2xl border border-accent/10 hover:shadow-lg transition-all duration-300 lg:w-[30rem]">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Network</h3>
                <p className="text-muted-foreground">Extensive wellness supplier connections worldwide</p>
              </div>
              
              <div className="bg-card-gradient-secondary p-6 rounded-2xl border border-secondary/10 hover:shadow-lg transition-all duration-300 lg:w-[30rem]">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">Quick processing and secure delivery</p>
              </div>
              
              {/* <div className="bg-card-gradient-muted p-6 rounded-2xl border border-muted/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-muted/30 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Location</h3>
                <p className="text-muted-foreground">Based in {contact.officeLocation}</p>
              </div> */}
            </div>
            
            {/* <div className="bg-gradient-to-r from-card via-card/80 to-card p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                    <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                    Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    To connect global businesses with trusted health product manufacturers, ensuring access to 
                    authentic wellness solutions, streamlined procurement, and transparent trade practices that 
                    prioritize quality, safety, and affordability in the healthcare industry.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <h4 className="font-semibold text-foreground mb-3">Our Commitment</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Transparent pricing with no hidden costs
                        </li>
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Clear and reliable communication for global partners
                        </li>
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        Focused on safety and product authenticity
                        </li>
                    </ul>
                    </div>
                    <div>
                    <h4 className="font-semibold text-foreground mb-3">Our Services</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        Custom packaging & private labeling for health brands
                        </li>
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        Competitive bulk pricing for clinics and wellness retailers
                        </li>
                        <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        End-to-end logistics for seamless health product supply
                        </li>
                    </ul>
                    </div>
                </div>
            </div> */}

          </div>

          {/* Seller Card */}
          {/* <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-card via-card/90 to-card/80 p-6 rounded-2xl border border-border/50 backdrop-blur-sm sticky top-8">
              <div className="text-center mb-6">
                <Image 
                  src={urlFor(contact.profileImage)} 
                  alt={contact.fullName}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-3 border-primary/20"
                />
                <h3 className="text-xl font-bold text-foreground mb-1">{contact.fullName}</h3>
                <p className="text-primary font-medium text-sm mb-3">{contact.position}</p>
                <div className="flex items-center justify-center text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{contact.officeLocation}</span>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground text-center italic">
                  "Building long-term partnerships through trust, quality, and excellent service."
                </p>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">{contact.clients}</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-accent">{contact.yearsOfExperience}</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-secondary">30+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;