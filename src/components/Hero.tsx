
import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <section className={cn("relative min-h-screen flex items-center container-padding", className)}>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-40 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Minimalist Design
        </span>
        
        <h1 className="heading-xl mb-6 animate-fade-in text-balance" style={{ animationDelay: '0.5s' }}>
          Simple, Elegant and Functional Design
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in text-balance" style={{ animationDelay: '0.7s' }}>
          Less, but better. We create products that are simple, intuitive, and focused on the essential.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <button className="px-6 py-3 bg-foreground text-background font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
            Explore products
          </button>
          <button className="px-6 py-3 border border-foreground/20 rounded-lg font-medium transition-all hover:bg-foreground/5">
            Learn more
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in cursor-pointer"
        style={{ animationDelay: '1.5s' }}
        aria-label="Scroll to content"
      >
        <span className="text-sm mb-2">Discover</span>
        <ArrowDownIcon className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
