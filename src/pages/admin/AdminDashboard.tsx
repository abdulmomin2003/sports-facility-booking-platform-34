
import { Activity, DollarSign, Users, Calendar, TrendingUp, TrendingDown } from "lucide-react";
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
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">View and manage platform data and metrics.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Users</p>
                  <h3 className="text-2xl font-bold mt-1">2,543</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +12%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$18,249</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +5.2%
                </span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Bookings</p>
                  <h3 className="text-2xl font-bold mt-1">1,382</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-red-500 inline-flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" /> -2.3%
                </span>{" "}
                from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Now</p>
                  <h3 className="text-2xl font-bold mt-1">89</h3>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <Activity className="h-6 w-6 text-amber-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 inline-flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +9%
                </span>{" "}
                from average
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Navigation Cards - Sidebar Items as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <Link to="/admin/users">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Manage Users</h3>
                  <p className="text-sm text-gray-500">View and manage user accounts</p>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <Link to="/admin/facilities">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Manage Facilities</h3>
                  <p className="text-sm text-gray-500">View and manage sports facilities</p>
                </div>
              </CardContent>
            </Link>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <Link to="/admin/settings">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">System Settings</h3>
                  <p className="text-sm text-gray-500">Configure platform settings</p>
                </div>
              </CardContent>
            </Link>
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
    </div>
  );
};

import { Link } from "react-router-dom";
import { BookOpen, Settings } from "lucide-react";

export default AdminDashboard;
