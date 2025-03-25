
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
  "20:00 - 21:00",
  "21:00 - 22:00",
];

const BookingPage = () => {
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState("");
  const [facility, setFacility] = useState("Roof Top Cricket");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error('Please select a date');
      return;
    }
    
    if (!timeSlot) {
      toast.error('Please select a time slot');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      toast.success('Booking confirmed!');
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="page-transition pt-24 min-h-screen">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Book a Facility</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Select your preferred date and time to secure your booking
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="facility">Select Facility</Label>
                <select
                  id="facility"
                  className="w-full p-3 border border-gray-200 rounded-md"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                >
                  <option value="Roof Top Cricket">Roof Top Cricket</option>
                  <option value="Snooker Club">Snooker Club</option>
                  <option value="Shawshank Redemption">Shawshank Redemption</option>
                  <option value="Futsal Court">Futsal Court</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-4">
                  <Label htmlFor="timeSlot">Select Time Slot</Label>
                  <select
                    id="timeSlot"
                    className="w-full p-3 border border-gray-200 rounded-md"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="p-6 bg-secondary/30 rounded-xl mt-8">
                <h3 className="text-lg font-semibold mb-4">Facility Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">I-8</span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-medium">Availability:</span>
                      <span className="ml-2">24/7</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="font-medium">Price:</span>
                      <span className="ml-2">$3000 per hour</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Facilities Included:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Professional equipment</li>
                      <li>• Changing rooms</li>
                      <li>• Lighting for night games</li>
                      <li>• Water coolers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Confirm Booking"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
