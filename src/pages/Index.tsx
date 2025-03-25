
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
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
      
      {/* Product Showcase */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="heading-lg mb-4">Premium Products</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Each product is carefully designed to be functional, durable, and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="glass rounded-2xl overflow-hidden reveal opacity-0">
              <div className="bg-foreground/5 h-64 flex items-center justify-center">
                <span className="text-lg font-medium text-foreground/40">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Minimal Chair</h3>
                <p className="text-foreground/70 mb-4">A beautifully crafted chair that combines comfort with simplicity.</p>
                <Link to="/products" className="inline-flex items-center font-medium subtle-underline">
                  View details <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="glass rounded-2xl overflow-hidden reveal opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="bg-foreground/5 h-64 flex items-center justify-center">
                <span className="text-lg font-medium text-foreground/40">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Essential Lamp</h3>
                <p className="text-foreground/70 mb-4">A versatile lamp that provides warm, ambient lighting for any space.</p>
                <Link to="/products" className="inline-flex items-center font-medium subtle-underline">
                  View details <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="px-6 py-3 border border-foreground/20 rounded-lg font-medium inline-block transition-all hover:bg-foreground/5">
              View all products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Philosophy/About Preview */}
      <section className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="reveal opacity-0">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="heading-lg mb-6">Less, but better</h2>
            <p className="text-foreground/70 mb-6 text-balance">
              We believe that good design is honest, innovative, and makes a product useful. It's as little design as possible, focusing on the essential aspects and not burdened with non-essentials.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Innovative', 'Useful', 'Aesthetic', 'Unobtrusive', 'Honest', 'Long-lasting'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/about" className="inline-flex items-center font-medium subtle-underline">
              Learn more about our philosophy <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="glass rounded-2xl p-8 reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="bg-foreground/5 h-96 rounded-lg flex items-center justify-center">
              <span className="text-lg font-medium text-foreground/40">Design Process Image</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-foreground text-background py-24">
        <div className="container text-center max-w-4xl">
          <h2 className="heading-lg mb-6 reveal opacity-0">Ready to experience thoughtful design?</h2>
          <p className="text-background/80 mb-8 text-lg reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            Explore our collection of premium, minimalist products designed with purpose and crafted to last.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link to="/products" className="px-6 py-3 bg-background text-foreground font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
              View products
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-background/20 text-background rounded-lg font-medium transition-all hover:bg-background/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
