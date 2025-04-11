
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Resources />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
