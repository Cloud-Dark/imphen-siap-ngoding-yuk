
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Events from "@/components/Events";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Community />
      <Resources />
      <Events />
      <Testimonials />
      <Tools />
      <Partners />
      <FAQ />
      <CallToAction />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
