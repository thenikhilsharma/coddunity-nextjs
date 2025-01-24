import React from "react";
import Button from "./ui/Button";
import { BorderBeam } from "./BorderBeam";
import herovideo from "../assets/Herovideo.mp4";

function Hero() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <div className="relative h-[calc(100vh-60px)] w-full bg-black">
      <div className="absolute inset-x-0 top-[60px] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
          style={{ objectPosition: "center" }}
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-20">
        <p className="mb-4 text-lg text-gray-400 tracking-wide font-medium uppercase relative z-10">
          Transform your data. Empower your vision.
        </p>

        <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-extra-loose text-white relative z-10">
          See your data in a new light.
        </h1>

        <h2 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-extra-loose text-white relative z-10">
          Unleash its full potential.
        </h2>

        <Button
          onClick={handleGetStarted}
          className="relative bg-black bg-opacity-70 text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full border border-white opacity-60 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Get Started</span>
          <BorderBeam size={150} duration={8} delay={0} />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
