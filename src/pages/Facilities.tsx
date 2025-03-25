
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, FilterIcon, Clock, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Facilities = () => {
  const [filter, setFilter] = useState('all');
  const [location, setLocation] = useState('all');
  
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

  const facilities = [
    {
      id: 1,
      name: 'Roof Top Cricket',
      category: 'outdoor',
      price: 'Rs 3000/hr',
      location: 'I-8',
      availability: '24/7',
      description: 'A spacious rooftop cricket facility with stunning city views and professional equipment.',
      image: '/lovable-uploads/57789ea9-a4fe-4aa9-a86a-aaf98c3dc33a.png'
    },
    {
      id: 2,
      name: 'Premium Snooker Club',
      category: 'indoor',
      price: 'Rs 200/hr',
      location: 'I-8',
      availability: '10:00 - 22:00',
      description: 'World-class snooker tables in an elegant, climate-controlled environment.',
      image: '/lovable-uploads/382cd5ae-3add-4ef7-9234-9f7d8554d501.png'
    },
    {
      id: 3,
      name: 'Shawshank Gaming Lounge',
      category: 'gaming',
      price: 'Rs 498/hr',
      location: 'G-11',
      availability: '12:00 - 00:00',
      description: 'Premium gaming stations with the latest titles and comfortable seating for extended sessions.',
      image: '/lovable-uploads/89a7647f-269c-4ac6-aa7d-b8de927b1815.png'
    },
    {
      id: 4,
      name: 'Professional Futsal Court',
      category: 'outdoor',
      price: 'Rs 1500/hr',
      location: 'F-7',
      availability: '08:00 - 23:00',
      description: 'FIFA-standard futsal court with floodlights for night games and proper turf.',
      image: '/lovable-uploads/f609e2ef-b794-4157-8249-ccdb64087151.png'
    },
    {
      id: 5,
      name: 'Indoor Basketball Arena',
      category: 'indoor',
      price: 'Rs 1200/hr',
      location: 'G-11',
      availability: '09:00 - 21:00',
      description: 'Full-size indoor basketball court with maple wood flooring and professional hoops.',
      image: '/lovable-uploads/48ce1a51-4325-47e2-99f1-54bc1b2a5864.png'
    },
    {
      id: 6,
      name: 'Pro Fitness Gym',
      category: 'fitness',
      price: 'Rs 800/day',
      location: 'F-7',
      availability: '06:00 - 23:00',
      description: 'State-of-the-art fitness center with cardio equipment, free weights, and personal trainers.',
      image: '/lovable-uploads/89966957-5fb6-4594-b402-17ee63d81ee8.png'
    }
  ];

  const handleBooking = (facilityName: string) => {
    toast.success(`Redirecting to booking page for ${facilityName}`);
  };

  const filteredFacilities = filter === 'all' && location === 'all'
    ? facilities 
    : facilities.filter(facility => 
        (filter === 'all' || facility.category === filter) &&
        (location === 'all' || facility.location === location)
      );

  const categories = ['all', 'indoor', 'outdoor', 'gaming', 'fitness'];
  const locations = ['all', 'I-8', 'G-11', 'F-7'];

  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            Our Facilities
          </span>
          <h1 className="heading-xl mb-6">Premium Sports & Gaming Facilities</h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
            Discover and book the best sports facilities, gaming lounges, and fitness centers across the city.
            All facilities are carefully vetted to ensure quality experiences.
          </p>
        </div>
      </section>
      
      {/* Filter & Facilities */}
      <section className="container py-12 mb-24">
        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Find Your Perfect Facility</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <FilterIcon className="h-4 w-4" /> Filter by Category:
              </label>
              <select 
                className="w-full p-2 border border-gray-200 rounded-md"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
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
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
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
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Available Facilities</h2>
          <p className="text-foreground/70">
            Showing {filteredFacilities.length} of {facilities.length} facilities
          </p>
        </div>
        
        {/* Facilities Grid */}
        {filteredFacilities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility, index) => (
              <div 
                key={facility.id} 
                className="facility-card reveal opacity-0"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{facility.name}</h3>
                    <span className="font-medium text-accent">{facility.price}</span>
                  </div>
                  <span className="inline-block text-xs px-2 py-1 bg-foreground/10 rounded-full mb-3 capitalize">
                    {facility.category}
                  </span>
                  <p className="text-foreground/70 mb-4 text-balance">{facility.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>{facility.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span>{facility.availability}</span>
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
              alt="No facilities" 
              className="max-w-full h-48 object-contain mx-auto mb-6 opacity-20"
            />
            <h3 className="text-xl font-medium mb-2">No facilities available</h3>
            <p className="text-foreground/60">
              Try different search criteria
            </p>
          </div>
        )}
      </section>
      
      {/* How It Works */}
      <section className="py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Booking Process
            </span>
            <h2 className="heading-lg mb-4">How to Book a Facility</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-balance">
              Follow these simple steps to reserve your favorite sports facility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-12 w-12 mb-4 text-accent" />,
                title: "1. Find a Facility",
                description: "Browse our collection of premium sports facilities and find one that meets your needs."
              },
              {
                icon: <Calendar className="h-12 w-12 mb-4 text-accent" />,
                title: "2. Select Date & Time",
                description: "Choose your preferred date and time slot for booking the facility."
              },
              {
                icon: <ArrowRightIcon className="h-12 w-12 mb-4 text-accent" />,
                title: "3. Confirm & Play",
                description: "Complete your booking, receive confirmation, and enjoy your session!"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 text-center reveal opacity-0"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-balance">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
