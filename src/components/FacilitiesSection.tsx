
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Filter } from 'lucide-react';

interface FacilitiesSectionProps {
  className?: string;
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ className }) => {
  const [location, setLocation] = useState('all');
  const [category, setCategory] = useState('all');
  
  // This would normally come from an API
  const facilities = [];

  return (
    <section className={cn("py-24 bg-secondary/30", className)}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
            Browse
          </span>
          <h2 className="heading-lg mb-4">Available Sports Facilities</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
            Search and filter to find the perfect facility for your needs
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Filter by Location:
              </label>
              <select 
                className="w-full p-2 border border-gray-200 rounded-md"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="downtown">Downtown</option>
                <option value="north">North Area</option>
                <option value="east">East Side</option>
                <option value="west">West Side</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter by Category:
              </label>
              <select 
                className="w-full p-2 border border-gray-200 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="basketball">Basketball</option>
                <option value="football">Football</option>
                <option value="tennis">Tennis</option>
                <option value="swimming">Swimming</option>
                <option value="gym">Fitness & Gym</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-accent hover:bg-accent/90">
                Search Facilities
              </Button>
            </div>
          </div>
        </div>
        
        {facilities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                {/* Facility cards would go here */}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
            <img 
              src="/lovable-uploads/48ce1a51-4325-47e2-99f1-54bc1b2a5864.png" 
              alt="Available Sports Facilities" 
              className="max-w-full h-48 object-contain mx-auto mb-6 opacity-20"
            />
            <h3 className="text-xl font-medium mb-2">No facilities available at the moment</h3>
            <p className="text-foreground/60">
              Check back later or try different search criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesSection;
