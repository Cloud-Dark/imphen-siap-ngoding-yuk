
import React from "react";
import { Button } from "./ui/button";
import { ArrowDown, Code, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-imphnen-light/40 to-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-imphnen text-white text-xs font-semibold px-3 py-1 rounded-full">PHP</span>
              <span className="bg-imphnen text-white text-xs font-semibold px-3 py-1 rounded-full">JS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Ingin Menjadi <br />
              <span className="text-imphnen">Programmer Handal?</span> <br />
              Namun Enggan Ngoding
            </h1>
            <p className="text-xl text-gray-600">
              Bantu kami mengembangkan landing page untuk komunitas programmer Indonesia
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#features" className="btn-primary inline-flex items-center">
                Jelajahi Fitur
              </a>
              <a href="#community" className="btn-secondary inline-flex items-center">
                Gabung Discord
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white p-6 rounded-2xl shadow-soft-lg border border-gray-100 animate-float">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>
                    {`function imphnen() {
  return "Belajar programming tanpa pusing!";
}`}
                  </code>
                </pre>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-8 h-8 text-imphnen" />
                <div>
                  <h3 className="font-bold">Belajar Coding</h3>
                  <p className="text-sm text-gray-500">Dengan cara menyenangkan</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-4 bg-white p-4 rounded-full shadow-soft animate-pulse-soft">
              <Users className="w-8 h-8 text-imphnen" />
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <a
            href="#features"
            className="inline-flex flex-col items-center text-sm text-gray-500 hover:text-imphnen"
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
