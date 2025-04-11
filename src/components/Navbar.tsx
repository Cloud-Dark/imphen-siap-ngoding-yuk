
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-extrabold text-imphnen">IMPHNEN</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Fitur</NavLink>
            <NavLink href="#community">Komunitas</NavLink>
            <NavLink href="#resources">Sumber Belajar</NavLink>
            <div className="flex space-x-2">
              <Button variant="outline" className="rounded-full border-imphnen text-imphnen hover:bg-imphnen hover:text-white">
                Login
              </Button>
              <Button className="rounded-full bg-imphnen hover:bg-imphnen-dark">
                Daftar
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-imphnen focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <MobileNavLink href="#features" onClick={toggleMenu}>
              Fitur
            </MobileNavLink>
            <MobileNavLink href="#community" onClick={toggleMenu}>
              Komunitas
            </MobileNavLink>
            <MobileNavLink href="#resources" onClick={toggleMenu}>
              Sumber Belajar
            </MobileNavLink>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full rounded-full border-imphnen text-imphnen hover:bg-imphnen hover:text-white">
                Login
              </Button>
              <Button className="w-full rounded-full bg-imphnen hover:bg-imphnen-dark">
                Daftar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 font-medium hover:text-imphnen transition-colors duration-300 flex items-center"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-gray-700 hover:text-imphnen hover:bg-gray-50 rounded-md py-2 px-4 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
