import React from "react";
import HighLightProjects from "@/components/home/HighLightProjects";
import HighLightSkills from "@/components/home/HighLightSkills";
import HeroSection from "@/components/home/HeroSection";
import AboutMe from "@/components/home/AboutMe";

export default function Home() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://nooobtimex.me/" />
      </head>
      <HeroSection />
      <AboutMe />
      <HighLightProjects />
      <HighLightSkills />
    </>
  );
}
