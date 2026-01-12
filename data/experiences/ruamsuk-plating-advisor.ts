import { Company, ExperienceId, ExperienceType, Location, Position } from "@/enum";
import type { Experience } from "@/interface";
import {
    artificialIntelligence,
    fullStackDevelopment,
    onlineMarketing,
    seo,
} from "../technologies";

export const ruamsukPlatingAdvisor: Experience = {
    id: ExperienceId.RuamsukPlatingAdvisor,
    company: Company.RuamsukPlating,
    position: Position.Advisor,
    location: Location.BangkokThailand,
    description:
        "Providing strategic technology advice and overseeing IT infrastructure upgrades.",
    technologies: [
        onlineMarketing,
        artificialIntelligence,
        seo,
        fullStackDevelopment,
    ],
    type: ExperienceType.Work,
    logo: "/logo/RSTROPHY.png",
    startDate: "2026-01-01",
};
