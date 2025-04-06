
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { UploadCloud, Clock, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Facility name must be at least 3 characters.",
  }),
  location: z.string({
    required_error: "Please select a location.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  sport: z.string({
    required_error: "Please select a sport.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().min(1, {
    message: "Please provide a price.",
  }),
  image: z.string().optional(),
  timeSlots: z.array(z.string()).min(1, {
    message: "Please add at least one time slot.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const AddFacility = () => {
  const navigate = useNavigate();
  const [timeSlots, setTimeSlots] = React.useState<string[]>([]);
  const [newTimeSlot, setNewTimeSlot] = React.useState<string>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      timeSlots: [],
    },
  });

  // Predefined values for dropdowns
  const locations = ["I-8", "G-11", "F-7", "E-11"];
  const categories = ["Indoor", "Outdoor", "Recreation"];
  const sports = {
    Indoor: ["Snooker", "Bowling", "Gaming", "Table Tennis"],
    Outdoor: ["Cricket", "Football", "Tennis", "Basketball"],
    Recreation: ["Swimming", "Gym", "Yoga", "Dance"],
  };

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const addTimeSlot = () => {
    if (newTimeSlot && !timeSlots.includes(newTimeSlot)) {
      const updatedSlots = [...timeSlots, newTimeSlot];
      setTimeSlots(updatedSlots);
      form.setValue("timeSlots", updatedSlots);
      setNewTimeSlot("");
    }
  };

  const removeTimeSlot = (slot: string) => {
    const updatedSlots = timeSlots.filter((s) => s !== slot);
    setTimeSlots(updatedSlots);
    form.setValue("timeSlots", updatedSlots);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Facility added successfully!");
    navigate("/owner");
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Add New Facility</h1>
          <p className="text-gray-600">Create a new sports facility for booking</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Facility Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facility Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter facility name" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the name of your sports facility.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Location */}
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the area where your facility is located.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Category */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sports Category</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedCategory(value);
                          // Reset sport when category changes
                          form.setValue("sport", "");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the category of your sports facility.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sport */}
                <FormField
                  control={form.control}
                  name="sport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specific Sport</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!selectedCategory}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={selectedCategory ? "Select sport" : "Select category first"} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {selectedCategory &&
                            sports[selectedCategory as keyof typeof sports].map((sport) => (
                              <SelectItem key={sport} value={sport}>
                                {sport}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the specific sport offered at your facility.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your facility..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormDescription>
                        Provide details about your facility, amenities, and rules.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Price */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pricing</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. $50 per hour" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the pricing details for your facility.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Image Upload (Mock) */}
                <FormItem>
                  <FormLabel>Facility Image</FormLabel>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-all">
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <UploadCloud className="h-10 w-10 text-gray-400" />
                      </div>
                      <div className="text-gray-600">
                        <span className="font-medium text-primary">Click to upload</span> or drag and drop
                      </div>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG or GIF (max. 2MB)
                      </p>
                    </div>
                  </div>
                </FormItem>

                {/* Time Slots */}
                <FormField
                  control={form.control}
                  name="timeSlots"
                  render={() => (
                    <FormItem>
                      <FormLabel>Available Time Slots</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div className="flex col-span-5">
                          <FormControl>
                            <Input
                              placeholder="e.g. 10:00 - 11:00"
                              value={newTimeSlot}
                              onChange={(e) => setNewTimeSlot(e.target.value)}
                              className="rounded-r-none"
                            />
                          </FormControl>
                          <Button 
                            type="button" 
                            onClick={addTimeSlot}
                            className="rounded-l-none"
                          >
                            <Plus className="h-4 w-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {timeSlots.length > 0 ? (
                          timeSlots.map((slot, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                              <Clock className="h-3 w-3" />
                              {slot}
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-4 w-4 p-0 ml-1"
                                onClick={() => removeTimeSlot(slot)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </Badge>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No time slots added yet</p>
                        )}
                      </div>
                      <FormDescription>
                        Add available time slots for bookings.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-4 pt-4">
                  <Button variant="outline" type="button" onClick={() => navigate("/owner")}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Facility</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddFacility;
