
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-imphnen to-imphnen-dark text-white">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Menjadi Programmer Handal?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Bergabunglah dengan komunitas IMPHNEN sekarang dan mulai perjalanan programming-mu dengan cara yang menyenangkan!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-white text-imphnen px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            Gabung Discord
          </a>
          <a
            href="#"
            className="bg-transparent text-white px-6 py-3 rounded-full font-bold border border-white hover:bg-white/10 transition-all duration-300"
          >
            Join Facebook Group
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
