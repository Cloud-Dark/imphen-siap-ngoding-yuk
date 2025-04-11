
import React from "react";
import { Home, BookOpen, Users, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileNav = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-2 px-4 animate-fade-in shadow-lg">
      <NavItem href="#" icon={<Home />} label="Beranda" />
      <NavItem href="#features" icon={<Code />} label="Fitur" />
      <NavItem href="#community" icon={<Users />} label="Komunitas" />
      <NavItem href="#resources" icon={<BookOpen />} label="Belajar" />
    </div>
  );
};

const NavItem = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
}) => {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-imphnen dark:hover:text-imphnen transition-colors px-2"
    >
      <div className="text-center">
        {React.cloneElement(icon as React.ReactElement, { 
          size: 24,
          className: cn("mx-auto", "mb-1")
        })}
        <span className="text-xs font-medium">{label}</span>
      </div>
    </a>
  );
};

export default MobileNav;
