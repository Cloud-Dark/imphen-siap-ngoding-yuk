
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Code, Users, Sparkles } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay before showing the hero content for a nice fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-imphnen-light/40 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in" style={{animationDelay: '300ms'}}>
              <span className="bg-imphnen text-white dark:bg-imphnen-light dark:text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">PHP</span>
              <span className="bg-imphnen text-white dark:bg-imphnen-light dark:text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">JS</span>
              <span className="bg-imphnen text-white dark:bg-imphnen-light dark:text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">Python</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight animate-fade-in" style={{animationDelay: '500ms'}}>
              Ingin Menjadi <br />
              <span className="text-imphnen dark:text-imphnen-light">Programmer Handal?</span> <br />
              Namun Enggan Ngoding
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{animationDelay: '700ms'}}>
              Bergabung dengan komunitas programmer Indonesia yang seru dan belajar coding dengan cara yang tidak membosankan!
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: '900ms'}}>
              <a href="#features" className="btn-primary inline-flex items-center group">
                Jelajahi Fitur
                <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </a>
              <a href="#community" className="btn-secondary inline-flex items-center">
                Gabung Discord
              </a>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{animationDelay: '1100ms'}}>
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft-lg border border-gray-100 dark:border-gray-700 animate-float">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <code>
                    {`function imphnen() {
  return "Belajar programming tanpa pusing!";
}`}
                  </code>
                </pre>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-8 h-8 text-imphnen dark:text-imphnen-light" />
                <div>
                  <h3 className="font-bold dark:text-white">Belajar Coding</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Dengan cara menyenangkan</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 bg-white dark:bg-gray-700 p-4 rounded-full shadow-soft animate-pulse-soft">
              <Users className="w-8 h-8 text-imphnen dark:text-imphnen-light" />
            </div>
            <div className="absolute -bottom-4 left-1/4 bg-imphnen/10 dark:bg-imphnen/20 backdrop-blur-sm p-3 rounded-xl border border-imphnen/20 dark:border-imphnen/30 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">1.235 online sekarang</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1300ms'}}>
          <a
            href="#features"
            className="inline-flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 hover:text-imphnen dark:hover:text-imphnen-light"
          >
            <span>Scroll untuk melihat lebih banyak</span>
            <ArrowDown className="mt-1 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
