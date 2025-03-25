
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Booking {
  id: number;
  facility: string;
  date: string;
  timeSlot: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  location: string;
}

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      facility: 'Roof Top Cricket',
      date: '3/25/2025',
      timeSlot: '10:00 - 11:00',
      status: 'confirmed',
      location: 'I-8'
    },
    {
      id: 2,
      facility: 'Snooker Club',
      date: '3/21/2025',
      timeSlot: '20:00 - 21:00',
      status: 'confirmed',
      location: 'I-8'
    }
  ]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition pt-24 min-h-screen">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile sidebar */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground/70">Email</h3>
                  <p>user@example.com</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-foreground/70">Role</h3>
                  <p>Customer</p>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Change Password
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              
              <nav className="space-y-1">
                <Link to="/products" className="block py-2 px-3 rounded-md hover:bg-secondary transition-colors">
                  Browse Facilities
                </Link>
                <Link to="/book" className="block py-2 px-3 rounded-md hover:bg-secondary transition-colors">
                  New Booking
                </Link>
                <Link to="/profile" className="block py-2 px-3 rounded-md hover:bg-secondary transition-colors">
                  Edit Profile
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Bookings</h2>
                <Link to="/book">
                  <Button size="sm">New Booking</Button>
                </Link>
              </div>
              
              {bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border border-border rounded-xl p-4 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{booking.facility}</h3>
                          
                          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-foreground/70">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{booking.date}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{booking.timeSlot}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{booking.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            booking.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                          
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/70 mb-4">You don't have any bookings yet</p>
                  <Link to="/products">
                    <Button>Browse Facilities</Button>
                  </Link>
                </div>
              )}
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
                  <img 
                    src="/lovable-uploads/f609e2ef-b794-4157-8249-ccdb64087151.png" 
                    alt="Futsal Court" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Futsal Court</h3>
                    <p className="text-sm text-foreground/70 mb-3">F-7, Professional futsal court</p>
                    <Link to="/book">
                      <Button size="sm" variant="outline" className="w-full">Book Now</Button>
                    </Link>
                  </div>
                </div>
                
                <div className="border border-border rounded-xl overflow-hidden hover:shadow-sm transition-shadow">
                  <img 
                    src="/lovable-uploads/89a7647f-269c-4ac6-aa7d-b8de927b1815.png" 
                    alt="Gaming Lounge" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Shawshank Redemption</h3>
                    <p className="text-sm text-foreground/70 mb-3">G-11, Cozy gaming environment</p>
                    <Link to="/book">
                      <Button size="sm" variant="outline" className="w-full">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
