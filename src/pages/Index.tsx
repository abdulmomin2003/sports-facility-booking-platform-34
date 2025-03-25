
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FacilitiesSection from '@/components/FacilitiesSection';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set up intersection observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page-transition">
      <Hero />
      <Features />
      <FacilitiesSection />
      
      {/* How It Works Section */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Process
          </span>
          <h2 className="heading-lg mb-4">How It Works</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Book your preferred sports facility in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center reveal opacity-0">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-accent">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Search</h3>
            <p className="text-foreground/70">
              Browse our collection of sports facilities and filter by location, type, or amenities.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-accent">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Book</h3>
            <p className="text-foreground/70">
              Select your preferred date and time, then confirm your booking with secure payment.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-accent">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Play</h3>
            <p className="text-foreground/70">
              Arrive at the facility, use your booking confirmation, and enjoy your sport!
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-black text-white py-24">
        <div className="container text-center max-w-4xl">
          <h2 className="heading-lg mb-6 reveal opacity-0">Ready to book your sports facility?</h2>
          <p className="text-white/80 mb-8 text-lg reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            Join thousands of athletes and teams who use our platform to find and book the best sports facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link to="/products" className="px-6 py-3 bg-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
              Book a facility
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium transition-all hover:bg-white/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
