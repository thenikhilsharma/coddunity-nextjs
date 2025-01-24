"use client";

import React from "react";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Navbar from "@/components/Navbar";
import ContainerScroll from "@/components/ContainerScroll";
import InfiniteTestimonials from "@/components/InfiniteTestimonials";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy className="py-32" />
      <div className="bg-black">
        <ContainerScroll />
      </div>
      <div className="bg-neutral-800">
        <HorizontalCarousel />
      </div>
      <div className="pt-28 bg-black">
        <InfiniteTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
