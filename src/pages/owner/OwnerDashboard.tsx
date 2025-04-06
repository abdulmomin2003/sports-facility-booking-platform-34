
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  CalendarCheck, 
  LineChart, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle,
  Edit,
  Trash2
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from 'sonner';

interface Facility {
  id: number;
  name: string;
  location: string;
  category: string;
  sport: string;
  description: string;
  price: string;
  timeSlots: string[];
  image: string;
  status: 'active' | 'inactive';
  bookings: number;
}

interface Booking {
  id: number;
  facilityName: string;
  customerName: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const OwnerDashboard = () => {
  const [facilities, setFacilities] = useState<Facility[]>([
    {
      id: 1,
      name: 'Roof Top Cricket',
      location: 'I-8',
      category: 'Outdoor',
      sport: 'Cricket',
      description: 'Available 24/7',
      price: '$3000',
      timeSlots: ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
      image: '/lovable-uploads/57789ea9-a4fe-4aa9-a86a-aaf98c3dc33a.png',
      status: 'active',
      bookings: 12
    },
    {
      id: 2,
      name: 'Snooker Club',
      location: 'I-8',
      category: 'Indoor',
      sport: 'Snooker',
      description: 'A Snooker club, also available with other mini games...',
      price: '$200',
      timeSlots: ['14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00'],
      image: '/lovable-uploads/382cd5ae-3add-4ef7-9234-9f7d8554d501.png',
      status: 'active',
      bookings: 8
    },
    {
      id: 3,
      name: 'Shawshank Redemption',
      location: 'G-11',
      category: 'Indoor',
      sport: 'Gaming Lounge',
      description: 'Really cozy and easy to access gaming environment',
      price: '$498',
      timeSlots: ['18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'],
      image: '/lovable-uploads/89a7647f-269c-4ac6-aa7d-b8de927b1815.png',
      status: 'active',
      bookings: 5
    }
  ]);
  
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      facilityName: 'Roof Top Cricket',
      customerName: 'John Doe',
      date: '2025-04-10',
      timeSlot: '10:00 - 11:00',
      status: 'pending'
    },
    {
      id: 2,
      facilityName: 'Snooker Club',
      customerName: 'Jane Smith',
      date: '2025-04-11',
      timeSlot: '15:00 - 16:00',
      status: 'confirmed'
    },
    {
      id: 3,
      facilityName: 'Shawshank Redemption',
      customerName: 'Alex Johnson',
      date: '2025-04-12',
      timeSlot: '19:00 - 20:00',
      status: 'confirmed'
    },
    {
      id: 4,
      facilityName: 'Roof Top Cricket',
      customerName: 'David Wilson',
      date: '2025-04-15',
      timeSlot: '11:00 - 12:00',
      status: 'pending'
    }
  ]);

  const handleDeleteFacility = (id: number) => {
    setFacilities(facilities.filter(facility => facility.id !== id));
    toast.success('Facility deleted successfully');
  };

  const handleUpdateBookingStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    setBookings(bookings.map(booking => 
      booking.id === id ? {...booking, status} : booking
    ));
    
    const statusMessage = status === 'confirmed' ? 'Booking confirmed' : 'Booking cancelled';
    toast.success(statusMessage);
  };

  // Filter bookings that need confirmation (are pending)
  const pendingBookings = bookings.filter(booking => booking.status === 'pending');

  // Dashboard statistics
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
  const totalFacilities = facilities.length;
  const totalRevenue = 4698; // Example revenue calculation

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Owner Dashboard</h1>
            <p className="text-gray-600">Manage your sports facilities and bookings</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/owner/add-facility">
              <Button className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Facility
              </Button>
            </Link>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Facilities</p>
                  <h3 className="text-2xl font-bold mt-1">{totalFacilities}</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Bookings</p>
                  <h3 className="text-2xl font-bold mt-1">{totalBookings}</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <CalendarCheck className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Confirmed Bookings</p>
                  <h3 className="text-2xl font-bold mt-1">{confirmedBookings}</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">${totalRevenue}</h3>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <LineChart className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="facilities" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="facilities">Your Facilities</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="pending" className="relative">
              Pending Approval
              {pendingBookings.length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {pendingBookings.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          {/* Facilities Tab */}
          <TabsContent value="facilities">
            <div className="space-y-6">
              {facilities.map((facility) => (
                <Card key={facility.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1">
                      <img 
                        src={facility.image} 
                        alt={facility.name} 
                        className="w-full h-full object-cover md:max-h-48" 
                      />
                    </div>
                    <div className="p-6 md:col-span-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold">{facility.name}</h3>
                            <Badge className="ml-3" variant={facility.status === 'active' ? 'default' : 'secondary'}>
                              {facility.status === 'active' ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mt-1">{facility.description}</p>
                        </div>
                        <div className="space-x-2 mt-4 md:mt-0">
                          <Link to={`/owner/edit-facility/${facility.id}`}>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteFacility(facility.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p>{facility.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Sport</p>
                          <p>{facility.sport}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p>{facility.price}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Available Time Slots</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {facility.timeSlots.map((slot, index) => (
                            <Badge key={index} variant="outline" className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {slot}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-600 text-sm">
                          Total bookings: <span className="font-medium">{facility.bookings}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {facilities.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <PlusCircle className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No facilities yet</h3>
                  <p className="text-gray-500 mb-6">Add your first sports facility to start receiving bookings</p>
                  <Link to="/owner/add-facility">
                    <Button>Add New Facility</Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* All Bookings Tab */}
          <TabsContent value="bookings">
            <div className="space-y-4">
              {bookings.map(booking => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold">{booking.facilityName}</h3>
                          <Badge 
                            className="ml-3" 
                            variant={
                              booking.status === 'confirmed' ? 'default' : 
                              booking.status === 'pending' ? 'outline' : 'destructive'
                            }
                          >
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div>
                            <p className="text-sm text-gray-500">Customer</p>
                            <p>{booking.customerName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p>{booking.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Time</p>
                            <p>{booking.timeSlot}</p>
                          </div>
                        </div>
                      </div>
                      
                      {booking.status === 'pending' && (
                        <div className="flex space-x-2 mt-4 md:mt-0">
                          <Button 
                            size="sm" 
                            onClick={() => handleUpdateBookingStatus(booking.id, 'confirmed')}
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Confirm
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleUpdateBookingStatus(booking.id, 'cancelled')}
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {bookings.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <CalendarCheck className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
                  <p className="text-gray-500">Bookings will appear here once customers make reservations</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Pending Bookings Tab */}
          <TabsContent value="pending">
            {pendingBookings.length > 0 ? (
              <div className="space-y-4">
                {pendingBookings.map(booking => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold">{booking.facilityName}</h3>
                            <Badge variant="outline" className="ml-3">Awaiting Confirmation</Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div>
                              <p className="text-sm text-gray-500">Customer</p>
                              <p>{booking.customerName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p>{booking.date}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Time</p>
                              <p>{booking.timeSlot}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-4 md:mt-0">
                          <Button 
                            size="sm" 
                            onClick={() => handleUpdateBookingStatus(booking.id, 'confirmed')}
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Confirm
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleUpdateBookingStatus(booking.id, 'cancelled')}
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No bookings requiring confirmation</h3>
                <p className="text-gray-500">All bookings have been processed</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OwnerDashboard;
