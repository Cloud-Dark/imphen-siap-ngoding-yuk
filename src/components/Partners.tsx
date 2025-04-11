
import React from "react";

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Partner & Sponsor</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berkolaborasi dengan berbagai perusahaan dan organisasi untuk memberikan pengalaman belajar terbaik.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <PartnerLogo name="Tech Company" />
          <PartnerLogo name="Digital Studio" />
          <PartnerLogo name="Coding Academy" />
          <PartnerLogo name="Software Inc" />
          <PartnerLogo name="Web Solutions" />
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="btn-secondary inline-block dark:bg-transparent dark:text-white dark:hover:bg-white/10">
            Jadi Partner Kami
          </a>
        </div>
      </div>
    </section>
  );
};

const PartnerLogo = ({ name }: { name: string }) => {
  const generatePlaceholderLogo = () => {
    // Generate random pastel color
    const hue = Math.floor(Math.random() * 360);
    const backgroundColor = `hsla(${hue}, 70%, 80%, 0.2)`;
    const textColor = `hsla(${hue}, 70%, 40%, 1)`;

    return { backgroundColor, textColor };
  };

  const { backgroundColor, textColor } = generatePlaceholderLogo();

  return (
    <div 
      className="h-24 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all duration-300 group animate-float" 
      style={{ backgroundColor }}
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
