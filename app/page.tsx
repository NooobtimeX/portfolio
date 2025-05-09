import SectionTransition from "@/components/SectionTransition";
import Contact from "@/components/section/Contact";
import Experience from "@/components/section/Experience";
import HeroSection from "@/components/section/HeroSection";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="hide-scrollbar">
            <SectionTransition>
                <HeroSection />
            </SectionTransition>
            <SectionTransition>
                <Skills />
            </SectionTransition>
            <SectionTransition>
                <Projects />
            </SectionTransition>
            <SectionTransition>
                <Experience />
            </SectionTransition>
            <SectionTransition>
                <Contact />
            </SectionTransition>
        </div>
    );
};

export default Home;
