import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="space-y-6">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Helping Businesses Grow Through
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Technology, Strategy & Innovation
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto">
            Malav Shah – CTO & Delivery Head (CSM®), Business Growth Strategist
          </h2>
          
          {/* Description */}
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            17+ years of experience scaling businesses, leading transformations, 
            and architecting solutions that drive growth and positive change.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('experience')}
              className="text-lg px-8 py-4"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              Connect with Me
            </Button>
          </div>
          
          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">17+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">CTO</div>
              <div className="text-white/70 text-sm">Current Role</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">CSM®</div>
              <div className="text-white/70 text-sm">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">India</div>
              <div className="text-white/70 text-sm">Based</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;