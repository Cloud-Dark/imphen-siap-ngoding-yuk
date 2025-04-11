
import React from "react";
import { Home, BookOpen, Users, Code, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileNav = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-2 px-4 animate-fade-in shadow-lg">
      <NavItem href="#features" icon={<Code />} label="Fitur" />
      <NavItem href="#community" icon={<Users />} label="Komunitas" />
      <NavItem 
        onClick={scrollToTop} 
        icon={<ArrowUp className="bg-imphnen text-white rounded-full p-1" />} 
        label="Ke Atas" 
        className="relative -top-3"
      />
      <NavItem href="#resources" icon={<BookOpen />} label="Belajar" />
      <NavItem href="#tools" icon={<Tool />} label="Tools" />
    </div>
  );
};

const NavItem = ({ 
  href, 
  icon, 
  label,
  onClick,
  className
}: { 
  href?: string; 
  icon: React.ReactNode; 
  label: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div className={className}>
      {onClick ? (
        <button
          onClick={onClick}
          className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-imphnen dark:hover:text-imphnen-light transition-colors px-2"
        >
          <div className="text-center">
            {React.cloneElement(icon as React.ReactElement, { 
              size: 24,
              className: cn("mx-auto", "mb-1")
            })}
            <span className="text-xs font-medium">{label}</span>
          </div>
        </button>
      ) : (
        <a
          href={href}
          className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-imphnen dark:hover:text-imphnen-light transition-colors px-2"
        >
          <div className="text-center">
            {React.cloneElement(icon as React.ReactElement, { 
              size: 24,
              className: cn("mx-auto", "mb-1")
            })}
            <span className="text-xs font-medium">{label}</span>
          </div>
        </a>
      )}
    </div>
  );
};

// Simple Tool icon component
const Tool = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

export default MobileNav;
