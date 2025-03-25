
import React from 'react';
import { Layout, Feather, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  const features = [
    {
      icon: <Layout className="h-8 w-8 mb-4" />,
      title: 'Thoughtful Design',
      description: 'Every element serves a purpose. Nothing is superfluous, everything is carefully considered.',
      delay: '0.3s',
    },
    {
      icon: <Feather className="h-8 w-8 mb-4" />,
      title: 'Premium Materials',
      description: 'We source the finest materials to create products that are both beautiful and durable.',
      delay: '0.5s',
    },
    {
      icon: <Layers className="h-8 w-8 mb-4" />,
      title: 'Functional Simplicity',
      description: 'Complexity is removed, leaving only what's necessary to serve the product's purpose.',
      delay: '0.7s',
    },
  ];

  return (
    <section id="features" className={cn("py-24 container", className)}>
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
          Features
        </span>
        <h2 className="heading-lg mb-4">Our Design Principles</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
          We believe that good design is as little design as possible. Our products are simple, intuitive, and built to last.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass rounded-2xl p-8 flex flex-col items-center text-center opacity-0 animate-fade-in"
            style={{ animationDelay: feature.delay }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-foreground/70 text-balance">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
