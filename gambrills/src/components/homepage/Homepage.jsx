import React from "react";
import HeroSection from "../hero/Hero";
import ServicesSection from "../services/Services";

function Homepage() {
  return (
    <div className="font-primary text-white pt-6 bg-primary-blue h-screen font-white font-bold text-5xl">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default Homepage;
