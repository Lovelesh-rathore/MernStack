import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ReviewsSection from "../components/home/ReviewsSection";
import FooterSection from "../components/home/FooterSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
