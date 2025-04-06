import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border",
                location.pathname === "/login" && !scrolled
                  ? "border-white/20 text-white hover:bg-white/10"
                  : ""
              )}
            >
              Login
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Register
            </Button>
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
          </ul>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button variant="outline" size="lg" className="w-full">
              Login
            </Button>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
