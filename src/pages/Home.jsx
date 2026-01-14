import React from "react";
import Hero from "../components/Hero";
// import Hero2 from "../components/Hero2";
import SectionOne from "../components/SectionOne";
import CoreServicesSection from "../components/CoreServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <CoreServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
