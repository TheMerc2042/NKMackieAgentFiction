import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/books", label: "Buy The Book" },
  { href: "/briefs", label: "Briefs" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header>
      {/* Desktop Navigation */}
      <nav className={cn(
        "bg-navy text-white py-4 px-6 hidden md:block sticky top-0 z-50 transition-all duration-300",
        scrolled && "shadow-md"
      )}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-montserrat font-bold text-xl tracking-wide">
            <span className="text-red-600">N.K.</span> MACKIE
          </Link>
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "navigation-link font-montserrat text-sm font-medium uppercase tracking-wider",
                  location === link.href && "after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className="bg-navy text-white py-4 px-6 md:hidden sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-montserrat font-bold text-xl tracking-wide">
            <span className="text-red-600">N.K.</span> MACKIE
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-navy z-50 flex flex-col justify-center items-center transition-all duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 text-white text-2xl"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="font-montserrat text-lg font-medium text-white uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
