
import { Activity, DollarSign, Users, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { AdminSidebarWrapper } from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Jan", revenue: 4000, bookings: 240 },
  { name: "Feb", revenue: 3000, bookings: 198 },
  { name: "Mar", revenue: 5000, bookings: 250 },
  { name: "Apr", revenue: 2780, bookings: 187 },
  { name: "May", revenue: 1890, bookings: 134 },
  { name: "Jun", revenue: 2390, bookings: 167 },
  { name: "Jul", revenue: 3490, bookings: 212 },
];

const platformData = [
  { name: "Tennis", facilities: 40, bookings: 240 },
  { name: "Football", facilities: 30, bookings: 320 },
  { name: "Basketball", facilities: 25, bookings: 180 },
  { name: "Swimming", facilities: 15, bookings: 120 },
  { name: "Golf", facilities: 10, bookings: 95 },
];

const AdminDashboard = () => {
  return (
    <AdminSidebarWrapper>
      <div className="container py-6 space-y-6">
        <AdminHeader 
          title="Admin Dashboard" 
          description="View and manage platform data and metrics."
        />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Stats Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +12%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$18,249</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +5.2%
                </span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,382</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-red-500 inline-flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" /> -2.3%
                </span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +9%
                </span>{" "}
                from average
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="space-y-4">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart
                    data={salesData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line yAxisId="right" type="monotone" dataKey="bookings" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facilities" className="space-y-4">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Facilities by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                    data={platformData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="facilities" fill="#8884d8" />
                    <Bar dataKey="bookings" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminSidebarWrapper>
  );
};

export default AdminDashboard;
