
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-extrabold text-imphnen dark:text-imphnen-light">IMPHNEN</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Fitur</NavLink>
            <NavLink href="#community">Komunitas</NavLink>
            <NavLink href="#resources">Sumber Belajar</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#tools">Tools</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <div className="flex space-x-2 items-center">
              <Button variant="outline" className="rounded-full border-imphnen text-imphnen hover:bg-imphnen hover:text-white dark:border-imphnen-light dark:text-imphnen-light dark:hover:bg-imphnen-light dark:hover:text-gray-900">
                Login
              </Button>
              <Button className="rounded-full bg-imphnen hover:bg-imphnen-dark dark:bg-imphnen-light dark:text-gray-900 dark:hover:bg-white">
                Daftar
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-imphnen dark:hover:text-imphnen-light focus:outline-none"
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
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-white/95 dark:bg-gray-900/95 rounded-xl p-4 backdrop-blur-sm animate-fade-in">
            <MobileNavLink href="#features" onClick={toggleMenu}>
              Fitur
            </MobileNavLink>
            <MobileNavLink href="#community" onClick={toggleMenu}>
              Komunitas
            </MobileNavLink>
            <MobileNavLink href="#resources" onClick={toggleMenu}>
              Sumber Belajar
            </MobileNavLink>
            <MobileNavLink href="#events" onClick={toggleMenu}>
              Events
            </MobileNavLink>
            <MobileNavLink href="#tools" onClick={toggleMenu}>
              Tools
            </MobileNavLink>
            <MobileNavLink href="#faq" onClick={toggleMenu}>
              FAQ
            </MobileNavLink>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full rounded-full border-imphnen text-imphnen hover:bg-imphnen hover:text-white dark:border-imphnen-light dark:text-imphnen-light dark:hover:bg-imphnen-light dark:hover:text-gray-900">
                Login
              </Button>
              <Button className="w-full rounded-full bg-imphnen hover:bg-imphnen-dark dark:bg-imphnen-light dark:text-gray-900 dark:hover:bg-white">
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
    className="text-gray-700 dark:text-gray-300 font-medium hover:text-imphnen dark:hover:text-imphnen-light transition-colors duration-300 flex items-center"
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
    className="block text-gray-700 dark:text-gray-300 hover:text-imphnen dark:hover:text-imphnen-light hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md py-2 px-4 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
