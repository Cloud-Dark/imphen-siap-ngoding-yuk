
import React from "react";

const partnerList = [
  { name: "TechnoWizards", color: "blue" },
  { name: "CodeCraftsmen", color: "green" },
  { name: "ByteBuddies", color: "purple" },
  { name: "DevDreamers", color: "orange" },
  { name: "PixelPioneers", color: "red" },
  { name: "LogicLighters", color: "indigo" },
  { name: "CyberSmiths", color: "pink" },
  { name: "AlgoArtists", color: "yellow" },
];

const Partners = () => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Geng Keren Kita</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berkolaborasi dengan berbagai perusahaan dan organisasi kece yang bikin belajar coding jadi nggak ngebosenin!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerList.map((partner, index) => (
            <PartnerLogo key={index} name={partner.name} color={partner.color} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary inline-block dark:bg-transparent dark:text-white dark:hover:bg-white/10">
            Mau Jadi Bestie Kita? Klik Sini!
          </a>
        </div>
      </div>
    </section>
  );
};

const PartnerLogo = ({ name, color }: { name: string; color?: string }) => {
  const generatePlaceholderLogo = () => {
    // Generate random pastel color if no color is provided
    const hue = color ? 
      { 
        blue: 210, 
        green: 140, 
        purple: 260, 
        orange: 30, 
        red: 0, 
        indigo: 240, 
        pink: 330, 
        yellow: 60 
      }[color] : Math.floor(Math.random() * 360);
      
    const backgroundColor = `hsla(${hue}, 70%, 80%, 0.2)`;
    const textColor = `hsla(${hue}, 70%, 40%, 1)`;

    return { backgroundColor, textColor };
  };

  const { backgroundColor, textColor } = generatePlaceholderLogo();

  return (
    <div 
      className="h-20 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all duration-300 group animate-float" 
      style={{ 
        backgroundColor,
        animationDelay: `${Math.random() * 2}s` 
      }}
    >
      <span 
        className="font-bold text-lg group-hover:scale-110 transition-transform duration-300" 
        style={{ color: textColor }}
      >
        {name}
      </span>
    </div>
  );
};

export default Partners;
