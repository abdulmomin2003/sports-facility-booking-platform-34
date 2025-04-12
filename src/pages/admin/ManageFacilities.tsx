
import { useState } from "react";
import { AdminSidebarWrapper } from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  MoreVertical, 
  MapPin, 
  CalendarDays,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  XCircle,
  Filter,
  ExternalLink,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Facility {
  id: string;
  name: string;
  category: string;
  location: string;
  owner: string;
  status: "approved" | "pending" | "rejected";
  rating: number;
  totalBookings: number;
  image: string;
  createdAt: string;
}

const facilities: Facility[] = [
  {
    id: "1",
    name: "Central Tennis Club",
    category: "Tennis",
    location: "Downtown, New York",
    owner: "Sarah Johnson",
    status: "approved",
    rating: 4.8,
    totalBookings: 152,
    image: "https://images.unsplash.com/photo-1622219809260-ce065fc5277e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-01-15",
  },
  {
    id: "2",
    name: "City Football Arena",
    category: "Football",
    location: "Brooklyn, New York",
    owner: "Michael Brown",
    status: "approved",
    rating: 4.5,
    totalBookings: 230,
    image: "https://images.unsplash.com/photo-1624880357913-a8539298fc27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Elite Basketball Court",
    category: "Basketball",
    location: "Queens, New York",
    owner: "Daniel Wilson",
    status: "pending",
    rating: 0,
    totalBookings: 0,
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-04-05",
  },
  {
    id: "4",
    name: "Riverside Swimming Complex",
    category: "Swimming",
    location: "Manhattan, New York",
    owner: "Emily Davis",
    status: "rejected",
    rating: 0,
    totalBookings: 0,
    image: "https://images.unsplash.com/photo-1524013131132-f09f59814613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-03-12",
  },
  {
    id: "5",
    name: "Green Valley Golf Course",
    category: "Golf",
    location: "Long Island, New York",
    owner: "John Smith",
    status: "approved",
    rating: 4.9,
    totalBookings: 98,
    image: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-02-08",
  },
  {
    id: "6",
    name: "Urban Yoga Studio",
    category: "Yoga",
    location: "SoHo, New York",
    owner: "Sarah Johnson",
    status: "pending",
    rating: 0,
    totalBookings: 0,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    createdAt: "2023-05-01",
  },
];

const ManageFacilities = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [activeTab, setActiveTab] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // Filter facilities based on search, category, and status
  const filterFacilities = (facilities: Facility[]) => {
    return facilities.filter((facility) => {
      const matchesSearch =
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || facility.category === selectedCategory;
      const matchesStatus = !selectedStatus || facility.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  const getTabFacilities = () => {
    switch (activeTab) {
      case "pending":
        return facilities.filter(f => f.status === "pending");
      case "approved":
        return facilities.filter(f => f.status === "approved");
      case "rejected":
        return facilities.filter(f => f.status === "rejected");
      default:
        return facilities;
    }
  };

  const filteredFacilities = filterFacilities(getTabFacilities());

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>;
      default:
        return null;
    }
  };

  const handleApprove = (id: string) => {
    toast({
      title: "Facility approved",
      description: "The facility has been approved and is now live.",
    });
  };

  const handleReject = (id: string) => {
    toast({
      title: "Facility rejected",
      description: "The facility has been rejected.",
    });
  };

  const handleDelete = (id: string) => {
    setIsDialogOpen(false);
    toast({
      title: "Facility deleted",
      description: "The facility has been successfully deleted.",
    });
  };

  return (
    <AdminSidebarWrapper>
      <div className="container py-6 space-y-6">
        <AdminHeader
          title="Facility Management"
          description="Manage all sports facilities across the platform."
        />

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="all">
                All Facilities ({facilities.length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                Pending Approval ({facilities.filter(f => f.status === "pending").length})
              </TabsTrigger>
              <TabsTrigger value="approved">
                Approved ({facilities.filter(f => f.status === "approved").length})
              </TabsTrigger>
              <TabsTrigger value="rejected">
                Rejected ({facilities.filter(f => f.status === "rejected").length})
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search facilities..."
                className="pl-8 md:w-[300px] w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="Tennis">Tennis</SelectItem>
                  <SelectItem value="Football">Football</SelectItem>
                  <SelectItem value="Basketball">Basketball</SelectItem>
                  <SelectItem value="Swimming">Swimming</SelectItem>
                  <SelectItem value="Golf">Golf</SelectItem>
                  <SelectItem value="Yoga">Yoga</SelectItem>
                </SelectContent>
              </Select>
              
              <Select onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Status</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="m-0">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  <Card key={facility.id}>
                    <div className="relative h-48 w-full">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-full w-full object-cover rounded-t-md"
                      />
                      {getStatusBadge(facility.status)}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{facility.name}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Facility
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Visit Facility
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600 cursor-pointer"
                              onClick={() => {
                                setSelectedFacility(facility);
                                setIsDialogOpen(true);
                              }}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 pb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{facility.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {facility.category}
                          </Badge>
                        </span>
                        {facility.status === "approved" && (
                          <span className="text-amber-500 font-medium flex items-center">
                            ★ {facility.rating}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      {facility.status === "pending" && (
                        <div className="flex gap-2 w-full">
                          <Button 
                            onClick={() => handleReject(facility.id)} 
                            variant="outline" 
                            className="flex-1"
                          >
                            <ThumbsDown className="h-4 w-4 mr-1" /> Reject
                          </Button>
                          <Button 
                            onClick={() => handleApprove(facility.id)} 
                            className="flex-1"
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" /> Approve
                          </Button>
                        </div>
                      )}
                      {facility.status === "approved" && (
                        <div className="flex items-center justify-between w-full text-sm">
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-1.5" />
                            <span>{facility.totalBookings} bookings</span>
                          </div>
                          <span className="text-muted-foreground">
                            Owner: {facility.owner}
                          </span>
                        </div>
                      )}
                      {facility.status === "rejected" && (
                        <Button variant="outline" className="w-full" onClick={() => handleApprove(facility.id)}>
                          <CheckCircle className="h-4 w-4 mr-2" /> Reconsider Approval
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center p-8 border border-dashed rounded-md">
                  <p className="text-muted-foreground mb-4">No facilities match your search criteria</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(undefined);
                      setSelectedStatus(undefined);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="m-0">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  // Similar card as in "all" tab but focused on pending facilities
                  <Card key={facility.id}>
                    {/* same card structure as above */}
                    <div className="relative h-48 w-full">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-full w-full object-cover rounded-t-md"
                      />
                      {getStatusBadge(facility.status)}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{facility.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 pb-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{facility.location}</span>
                      </div>
                      <div className="text-sm">
                        <Badge variant="outline">{facility.category}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Added on: {facility.createdAt}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex gap-2 w-full">
                        <Button 
                          onClick={() => handleReject(facility.id)} 
                          variant="outline" 
                          className="flex-1"
                        >
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                        <Button 
                          onClick={() => handleApprove(facility.id)} 
                          className="flex-1"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" /> Approve
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center p-8 border border-dashed rounded-md">
                  <p className="text-muted-foreground">No pending facilities found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="approved" className="m-0">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  // Similar structure for approved facilities
                  <Card key={facility.id} className="overflow-hidden">
                    {/* same card structure as above, but adapted for approved facilities */}
                    <div className="relative h-48 w-full">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-full w-full object-cover"
                      />
                      {getStatusBadge(facility.status)}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{facility.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {facility.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{facility.category}</Badge>
                        <span className="text-amber-500 font-medium">★ {facility.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center justify-between w-full text-sm">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1.5" />
                          <span>{facility.totalBookings} bookings</span>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center p-8 border border-dashed rounded-md">
                  <p className="text-muted-foreground">No approved facilities found</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="rejected" className="m-0">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFacilities.length > 0 ? (
                filteredFacilities.map((facility) => (
                  // Similar structure for rejected facilities
                  <Card key={facility.id} className="overflow-hidden">
                    {/* same card structure as above, but adapted for rejected facilities */}
                    <div className="relative h-48 w-full">
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-full w-full object-cover rounded-t-md opacity-70"
                      />
                      {getStatusBadge(facility.status)}
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{facility.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {facility.location}
                      </div>
                      <Badge variant="outline">{facility.category}</Badge>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleApprove(facility.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" /> Reconsider Approval
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center p-8 border border-dashed rounded-md">
                  <p className="text-muted-foreground">No rejected facilities found</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Facility</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedFacility?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => selectedFacility && handleDelete(selectedFacility.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminSidebarWrapper>
  );
};

export default ManageFacilities;
