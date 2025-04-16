import React, { useState, useEffect } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Edit } from 'lucide-react';

const Facilities = () => {
  const [location, setLocation] = useState('all');
  const [category, setCategory] = useState('all');
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      id: 1,
      name: 'Roof Top Cricket',
      description: 'Available 24/7',
      location: 'I-8',
      sport: 'Cricket',
      category: 'Outdoor',
      price: '$3000',
      image: '/lovable-uploads/57789ea9-a4fe-4aa9-a86a-aaf98c3dc33a.png'
    },
    {
      id: 2,
      name: 'Snooker Club',
      description: 'A Snooker club, also available with other mini games...',
      location: 'I-8',
      sport: 'Indoor',
      category: 'Recreation',
      price: '$200',
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
      image: '/lovable-uploads/f609e2ef-b794-4157-8249-ccdb64087151.png'
    }
  ];

  const handleBooking = (facilityName: string) => {
    toast.success(`Redirecting to booking page for ${facilityName}`);
  };

  const filteredFacilities = facilities.filter(facility => 
    (location === 'all' || facility.location === location) && 
    (category === 'all' || facility.category === category)
  );

  const locations = ['all', 'I-8', 'G-11', 'F-7'];
  const categories = ['all', 'Indoor', 'Outdoor', 'Recreation'];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Available Sports Facilities</h1>
          <p className="text-gray-600">Find and book your preferred sports facility</p>
        </div>
        
        {/* Filters section */}
        <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location-filter" className="block text-lg font-medium mb-2">
              Filter by Location:
            </label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger id="location-filter" className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="category-filter" className="block text-lg font-medium mb-2">
              Filter by Category:
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category-filter" className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Facilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredFacilities.map(facility => (
            <Card key={facility.id} className="overflow-hidden shadow-lg bg-white rounded-lg">
              <div className="p-4 text-center">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-48 object-cover rounded mb-4" 
                />
                <h2 className="text-2xl font-bold mb-2">{facility.name}</h2>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div className="space-y-2 text-left mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{facility.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sport:</span>
                    <span>{facility.sport}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Category:</span>
                    <span>{facility.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Pricing:</span>
                    <span>{facility.price}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link to={`/owner/edit-facility/${facility.id}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Link to="/book" className="flex-1">
                    <Button 
                      className="w-full" 
                      onClick={() => handleBooking(facility.name)}
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
          
          {filteredFacilities.length === 0 && (
            <div className="col-span-full text-center py-16">
              <h3 className="text-xl font-medium mb-2">No facilities match your filters</h3>
              <p className="text-gray-600">Try different filter options</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
