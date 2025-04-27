import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Search, 
  MoreHorizontal, 
  PlusCircle, 
  Edit, 
  Trash2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
  status: "active" | "pending" | "maintenance";
  createdDate: string;
}

const facilities: Facility[] = [
  {
    id: "1",
    name: "Downtown Tennis Court",
    category: "tennis",
    location: "123 Main St",
    owner: "John Smith",
    status: "active",
    createdDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Central Basketball Arena",
    category: "basketball",
    location: "456 Park Ave",
    owner: "Sarah Johnson",
    status: "maintenance",
    createdDate: "2023-02-20",
  },
  {
    id: "3",
    name: "Westside Swimming Pool",
    category: "swimming",
    location: "789 Ocean Blvd",
    owner: "Michael Brown",
    status: "active",
    createdDate: "2023-03-10",
  },
  {
    id: "4",
    name: "North Football Field",
    category: "football",
    location: "101 Stadium Way",
    owner: "Emily Davis",
    status: "pending",
    createdDate: "2023-04-05",
  },
  {
    id: "5",
    name: "East Golf Course",
    category: "golf",
    location: "202 Green Valley",
    owner: "Daniel Wilson",
    status: "active",
    createdDate: "2023-05-12",
  },
];

const filterFacilities = (
  facilities: Facility[],
  searchTerm: string,
  selectedCategory: string | undefined,
  selectedStatus: string | undefined
) => {
  return facilities.filter((facility) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || selectedCategory === "all_categories" || facility.category === selectedCategory;
    const matchesStatus = !selectedStatus || selectedStatus === "all_statuses" || facility.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
};

const ManageFacilities = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const filteredFacilities = filterFacilities(
    facilities,
    searchTerm,
    selectedCategory,
    selectedStatus
  );

  const handleStatusChange = (facilityId: string, newStatus: "active" | "pending" | "maintenance") => {
    toast({
      title: "Facility status updated",
      description: `Facility status has been changed to ${newStatus}.`,
    });
  };

  const handleDeleteFacility = (facilityId: string) => {
    setIsDialogOpen(false);
    toast({
      title: "Facility deleted",
      description: "Facility has been successfully deleted.",
    });
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "tennis":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "basketball":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      case "swimming":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-100";
      case "football":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "golf":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "maintenance":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6 space-y-6">
        <AdminHeader
          title="Facility Management"
          description="View and manage sports facilities on the platform."
        />

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search facilities..."
                className="pl-8 min-w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_categories">All Categories</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
                <SelectItem value="basketball">Basketball</SelectItem>
                <SelectItem value="swimming">Swimming</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="golf">Golf</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all_statuses">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="w-full sm:w-auto">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Facility
            </Button>
          </div>
        </div>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFacilities.map((facility) => (
                <TableRow key={facility.id}>
                  <TableCell className="font-medium">{facility.name}</TableCell>
                  <TableCell>{facility.location}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getCategoryBadgeColor(facility.category)}>
                      {facility.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{facility.owner}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadgeColor(facility.status)}>
                      {facility.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Facility
                        </DropdownMenuItem>
                        {facility.status !== "active" && (
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => handleStatusChange(facility.id, "active")}
                          >
                            Set Active
                          </DropdownMenuItem>
                        )}
                        {facility.status !== "pending" && (
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => handleStatusChange(facility.id, "pending")}
                          >
                            Set Pending
                          </DropdownMenuItem>
                        )}
                        {facility.status !== "maintenance" && (
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => handleStatusChange(facility.id, "maintenance")}
                          >
                            Set Maintenance
                          </DropdownMenuItem>
                        )}
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
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
              onClick={() => selectedFacility && handleDeleteFacility(selectedFacility.id)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageFacilities;
