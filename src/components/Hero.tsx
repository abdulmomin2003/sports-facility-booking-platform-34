
import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center container-padding bg-black text-white", className)}>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
        <img 
          src="/lovable-uploads/89966957-5fb6-4594-b402-17ee63d81ee8.png" 
          alt="Sports collage" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Sports Space
        </span>
        
        <h1 className="heading-xl mb-6 animate-fade-in text-balance" style={{ animationDelay: '0.5s' }}>
          Discover and Book Sports Facilities
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in text-balance" style={{ animationDelay: '0.7s' }}>
          Find and book cricket fields, football courts, gaming lounges, and more. All in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Link to="/products" className="px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            Browse Facilities
          </Link>
          <Link to="/login" className="px-6 py-3 border border-white/30 rounded-lg font-medium transition-all hover:bg-white/10">
            Sign In
          </Link>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in cursor-pointer"
        style={{ animationDelay: '1.5s' }}
        aria-label="Scroll to content"
      >
        <span className="text-sm mb-2 text-white/80">Explore</span>
        <ArrowDownIcon className="animate-bounce text-white" />
      </button>
    </section>
  );
};

export default Hero;
