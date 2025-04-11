
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, GitHub } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-imphnen mb-4">IMPHNEN</h3>
            <p className="text-gray-600 mb-4">
              Komunitas programmer Indonesia yang bertujuan membantu semua orang belajar programming dengan cara yang menyenangkan.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<GitHub size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <FooterLink href="#features">Fitur</FooterLink>
              <FooterLink href="#community">Komunitas</FooterLink>
              <FooterLink href="#resources">Sumber Belajar</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Sumber Belajar</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Video Tutorial</FooterLink>
              <FooterLink href="#">Artikel</FooterLink>
              <FooterLink href="#">Tantangan Koding</FooterLink>
              <FooterLink href="#">Sharing Session</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Bahasa Pemrograman</h4>
            <div className="flex flex-wrap gap-2">
              <LanguageTag>PHP</LanguageTag>
              <LanguageTag>JavaScript</LanguageTag>
              <LanguageTag>Python</LanguageTag>
              <LanguageTag>HTML</LanguageTag>
              <LanguageTag>CSS</LanguageTag>
              <LanguageTag>Node.js</LanguageTag>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm">
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
    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-imphnen hover:text-white transition-colors"
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
      className="text-gray-600 hover:text-imphnen hover:underline transition-colors"
    >
      {children}
    </a>
  </li>
);

const LanguageTag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
    {children}
  </span>
);

export default Footer;
