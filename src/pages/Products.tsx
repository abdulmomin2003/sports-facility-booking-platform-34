
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, FilterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Products = () => {
  const [filter, setFilter] = useState('all');
  
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

  const products = [
    {
      id: 1,
      name: 'Minimal Chair',
      category: 'furniture',
      price: '$350',
      description: 'A beautifully crafted chair that combines comfort with simplicity.'
    },
    {
      id: 2,
      name: 'Essential Lamp',
      category: 'lighting',
      price: '$195',
      description: 'A versatile lamp that provides warm, ambient lighting for any space.'
    },
    {
      id: 3,
      name: 'Timeless Table',
      category: 'furniture',
      price: '$520',
      description: 'A sleek table with clean lines and durable construction.'
    },
    {
      id: 4,
      name: 'Minimalist Shelf',
      category: 'storage',
      price: '$280',
      description: 'A functional shelf that adds elegance to any wall.'
    },
    {
      id: 5,
      name: 'Pure Vase',
      category: 'decor',
      price: '$125',
      description: 'A simple vase that showcases flowers without stealing their spotlight.'
    },
    {
      id: 6,
      name: 'Elegant Clock',
      category: 'decor',
      price: '$175',
      description: 'A wall clock with a minimal face and precise movement.'
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  const categories = ['all', 'furniture', 'lighting', 'storage', 'decor'];

  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            Our Collection
          </span>
          <h1 className="heading-xl mb-6">Minimal Products for Modern Living</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            Carefully designed and crafted to enhance your everyday experience.
            Each piece is a testament to simplicity and functionality.
          </p>
        </div>
      </section>
      
      {/* Filter & Products */}
      <section className="container py-12 mb-24">
        {/* Filters */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div className="flex items-center">
            <FilterIcon className="mr-2 h-5 w-5" />
            <span className="mr-4">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-lg capitalize transition-all",
                    filter === category 
                      ? "bg-foreground text-background" 
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <p className="text-foreground/70">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="glass rounded-2xl overflow-hidden reveal opacity-0 transition-all hover:translate-y-[-5px] hover:shadow-lg"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-foreground/5 h-64 flex items-center justify-center">
                <span className="text-lg font-medium text-foreground/40">Product Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="font-medium">{product.price}</span>
                </div>
                <span className="inline-block text-xs px-2 py-1 bg-foreground/10 rounded-full mb-3 capitalize">
                  {product.category}
                </span>
                <p className="text-foreground/70 mb-4 text-balance">{product.description}</p>
                <button className="inline-flex items-center font-medium subtle-underline">
                  View details <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="heading-lg mb-4">What Our Customers Say</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Don't just take our word for it. Hear from people who have integrated our designs into their lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The clean lines and thoughtful details make these pieces stand out without overwhelming my space.",
                author: "Sarah K.",
                title: "Interior Designer"
              },
              {
                quote: "These products are worth the investment. I've had my table for years, and it still looks brand new.",
                author: "Michael T.",
                title: "Architect"
              },
              {
                quote: "The lamp not only provides beautiful light but has become a conversation piece in my living room.",
                author: "Elena R.",
                title: "Home Owner"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 reveal opacity-0"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <blockquote className="text-lg mb-6 text-balance">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-foreground/70">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
