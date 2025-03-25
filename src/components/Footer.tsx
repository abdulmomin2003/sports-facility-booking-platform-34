
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("border-t border-border", className)}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight inline-block mb-4">
              DESIGN
            </Link>
            <p className="text-foreground/70 max-w-md mb-4">
              We create products that are simple, intuitive, and focused on the essential. 
              Good design is as little design as possible.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
              <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</Link>
              <Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">Products</Link>
              <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Email</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Design. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
