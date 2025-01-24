"use client";

import React from "react";
import FeatureCard from "@/components/featureCard";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Navbar from "@/components/Navbar";
import ContainerScroll from "@/components/ContainerScroll";
import InfiniteTestimonials from '@/components/InfiniteTestimonials';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy className="py-32"/>
      <div className="bg-black">
        <ContainerScroll />
      </div>
      <div className="flex gap-5 px-3 py-5 bg-black">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
      <InfiniteTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
