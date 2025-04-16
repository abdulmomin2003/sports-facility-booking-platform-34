import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5",
        location.pathname === "/" && !scrolled ? "text-white" : ""
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight flex items-center"
        >
          <span className="mr-2">🏆</span> SPORTS SPACE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors inline-block",
                    location.pathname === item.path
                      ? "font-medium bg-accent/10"
                      : location.pathname === "/" && !scrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-4 flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "border",
                    location.pathname === "/" && !scrolled
                      ? "border-white/20 text-white hover:bg-white/10"
                      : ""
                  )}
                >
                  <Settings className="h-4 w-4 mr-2" /> Account
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer w-full">My Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/owner" className="cursor-pointer w-full">Owner Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admin" className="cursor-pointer w-full">Admin Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login" className="cursor-pointer w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register" className="cursor-pointer w-full">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6 mb-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-2xl transition-colors",
                    location.pathname === item.path
                      ? "font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/dashboard"
                className="text-2xl text-foreground/70 hover:text-foreground"
                onClick={closeMenu}
              >
                My Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/owner"
                className="text-2xl text-foreground/70 hover:text-foreground"
                onClick={closeMenu}
              >
                Owner Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="text-2xl text-foreground/70 hover:text-foreground"
                onClick={closeMenu}
              >
                Admin Dashboard
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Link to="/login" className="w-full" onClick={closeMenu}>
              <Button variant="outline" size="lg" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/register" className="w-full" onClick={closeMenu}>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
