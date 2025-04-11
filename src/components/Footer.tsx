
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in" style={{animationDelay: '100ms'}}>
            <h3 className="text-xl font-bold text-imphnen dark:text-imphnen-light mb-4">IMPHNEN</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang belajar programming dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Github size={18} />} href="#" />
              <div className="md:hidden"><ThemeToggle /></div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <h4 className="font-bold mb-4 dark:text-white">Tautan Cepat</h4>
            <ul className="space-y-2">
              <FooterLink href="#features">Fitur</FooterLink>
              <FooterLink href="#community">Komunitas</FooterLink>
              <FooterLink href="#resources">Sumber Belajar</FooterLink>
              <FooterLink href="#events">Event</FooterLink>
              <FooterLink href="#tools">Tools</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
            <h4 className="font-bold mb-4 dark:text-white">Sumber Belajar</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Video Tutorial</FooterLink>
              <FooterLink href="#">Artikel</FooterLink>
              <FooterLink href="#">Tantangan Koding</FooterLink>
              <FooterLink href="#">Sharing Session</FooterLink>
              <FooterLink href="#">Workshop</FooterLink>
              <FooterLink href="#">Kelas Online</FooterLink>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
            <h4 className="font-bold mb-4 dark:text-white">Bahasa Pemrograman</h4>
            <div className="flex flex-wrap gap-2">
              <LanguageTag>PHP</LanguageTag>
              <LanguageTag>JavaScript</LanguageTag>
              <LanguageTag>Python</LanguageTag>
              <LanguageTag>HTML</LanguageTag>
              <LanguageTag>CSS</LanguageTag>
              <LanguageTag>Node.js</LanguageTag>
              <LanguageTag>React</LanguageTag>
              <LanguageTag>Laravel</LanguageTag>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2023 IMPHNEN - Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ 
  icon, 
  href 
}: { 
  icon: React.ReactNode; 
  href: string; 
}) => (
  <a
    href={href}
    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-imphnen hover:text-white dark:hover:bg-imphnen-light dark:hover:text-gray-900 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode; 
}) => (
  <li>
    <a
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-imphnen dark:hover:text-imphnen-light hover:underline transition-colors"
    >
      {children}
    </a>
  </li>
);

const LanguageTag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
    {children}
  </span>
);

export default Footer;
