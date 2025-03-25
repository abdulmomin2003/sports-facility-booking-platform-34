
import React, { useEffect } from 'react';
import { CheckIcon } from 'lucide-react';

const About = () => {
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
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="heading-xl mb-6">Our Design Philosophy</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            We believe in creating products that are simple, intuitive, and focused on the essential.
            Good design is as little design as possible.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="glass rounded-2xl p-8 reveal opacity-0">
              <div className="bg-foreground/5 h-96 rounded-lg flex items-center justify-center">
                <span className="text-lg font-medium text-foreground/40">Team Image</span>
              </div>
            </div>
            
            <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="heading-lg mb-6">From Concept to Creation</h2>
              <p className="text-foreground/70 mb-4 text-balance">
                Founded in 2024, our studio was born from a desire to create products that stand the test of time. We were tired of disposable design and wanted to create objects that would become more beautiful with age.
              </p>
              <p className="text-foreground/70 mb-4 text-balance">
                Our team of designers and craftspeople work together to create products that are both beautiful and functional. Each piece is carefully considered, from the initial concept to the final execution.
              </p>
              <p className="text-foreground/70 text-balance">
                We believe that simplicity is not the absence of something, but the presence of the right something.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="heading-lg mb-4">What We Stand For</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Our design philosophy is guided by a set of principles that inform every decision we make.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative",
              description: "We create new solutions that improve upon existing designs, rather than simply replicating them."
            },
            {
              title: "Useful",
              description: "Our products serve a purpose and solve a problem, prioritizing function alongside form."
            },
            {
              title: "Aesthetic",
              description: "Beauty is essential to function. A well-designed product is pleasing to use and enhances daily life."
            },
            {
              title: "Unobtrusive",
              description: "Our designs are tools, not decorative objects. They should perform their function without demanding attention."
            },
            {
              title: "Honest",
              description: "We never try to make a product appear more innovative, powerful, or valuable than it really is."
            },
            {
              title: "Long-lasting",
              description: "We avoid following trends, focusing instead on timeless design that will remain relevant for years."
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 reveal opacity-0"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-start mb-4">
                <CheckIcon className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-foreground/70 text-balance">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="heading-lg mb-4">The People Behind the Designs</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Meet the talented individuals who bring our vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div 
                key={member} 
                className="glass rounded-2xl overflow-hidden reveal opacity-0"
                style={{ animationDelay: `${0.2 * member}s` }}
              >
                <div className="bg-foreground/5 h-80 flex items-center justify-center">
                  <span className="text-lg font-medium text-foreground/40">Team Member Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                  <p className="text-foreground/70 mb-4">Design Director</p>
                  <p className="text-foreground/70 text-balance">
                    Short bio about the team member and their contribution to the design philosophy.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
