
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface FacilitiesSectionProps {
  className?: string;
}

interface Facility {
  id: number;
  name: string;
  description: string;
  location: string;
  sport: string;
  category: string;
  price: string;
  availability: string;
  image: string;
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ className }) => {
  const [location, setLocation] = useState('all');
  const [category, setCategory] = useState('all');
  
  // This would normally come from an API
  const facilities: Facility[] = [
    {
      id: 1,
      name: 'Roof Top Cricket',
      description: 'Available 24/7',
      location: 'I-8',
      sport: 'Cricket',
      category: 'Outdoor',
      price: '$3000',
      availability: '24/7',
      image: '/lovable-uploads/57789ea9-a4fe-4aa9-a86a-aaf98c3dc33a.png'
    },
    {
      id: 2,
      name: 'Snooker Club',
      description: 'A Snooker club, also available with other mini games',
      location: 'I-8',
      sport: 'Indoor',
      category: 'Recreation',
      price: '$200',
      availability: '10:00 - 22:00',
      image: '/lovable-uploads/382cd5ae-3add-4ef7-9234-9f7d8554d501.png'
    },
    {
      id: 3,
      name: 'Shawshank Redemption',
      description: 'Really cozy and easy to access gaming environment',
      location: 'G-11',
      sport: 'Gaming Lounge',
      category: 'Indoor',
      price: '$498',
      availability: '12:00 - 00:00',
      image: '/lovable-uploads/89a7647f-269c-4ac6-aa7d-b8de927b1815.png'
    },
    {
      id: 4,
      name: 'Futsal Court',
      description: 'Professional futsal court with floodlights for night games',
      location: 'F-7',
      sport: 'Football',
      category: 'Outdoor',
      price: '$1500',
      availability: '08:00 - 23:00',
      image: '/lovable-uploads/f609e2ef-b794-4157-8249-ccdb64087151.png'
    }
  ];

  const handleBooking = (facilityName: string) => {
    toast.success(`Redirecting to booking page for ${facilityName}`);
  };

  const filteredFacilities = location === 'all' && category === 'all' 
    ? facilities 
    : facilities.filter(facility => 
        (location === 'all' || facility.location === location) && 
        (category === 'all' || facility.category === category)
      );

  const locations = ['all', 'I-8', 'G-11', 'F-7'];
  const categories = ['all', 'Indoor', 'Outdoor', 'Recreation'];

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
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc === 'all' ? 'All Locations' : loc}</option>
                ))}
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
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-accent hover:bg-accent/90">
                Search Facilities
              </Button>
            </div>
          </div>
        </div>
        
        {filteredFacilities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div 
                key={facility.id} 
                className="facility-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{facility.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{facility.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{facility.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium">Sport:</span>
                      <span className="ml-2">{facility.sport}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">Availability:</span>
                      <span className="ml-2">{facility.availability}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium">Pricing:</span>
                      <span className="ml-2">{facility.price}</span>
                    </div>
                  </div>
                  
                  <Link to="/book">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90" 
                      onClick={() => handleBooking(facility.name)}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
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
            <h3 className="text-xl font-medium mb-2">No facilities available</h3>
            <p className="text-foreground/60">
              Try different search criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesSection;
