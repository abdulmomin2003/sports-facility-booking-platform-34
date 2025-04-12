
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/BookingPage";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AddFacility from "./pages/owner/AddFacility";
import EditFacility from "./pages/owner/EditFacility";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageFacilities from "./pages/admin/ManageFacilities";
import SystemSettings from "./pages/admin/SystemSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">
            <Routes>
              {/* Customer Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/book" element={<BookingPage />} />
              
              {/* Owner Routes */}
              <Route path="/owner" element={<OwnerDashboard />} />
              <Route path="/owner/add-facility" element={<AddFacility />} />
              <Route path="/owner/edit-facility/:id" element={<EditFacility />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/facilities" element={<ManageFacilities />} />
              <Route path="/admin/settings" element={<SystemSettings />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
