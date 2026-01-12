import { Company, ExperienceId, ExperienceType, Location, Position } from "@/enum";
import type { Experience } from "@/interface";
import { mongodb, nestjs, nextjs } from "../technologies";

export const jasmineTechnologySolution: Experience = {
    id: ExperienceId.JasmineTechnologySolution,
    company: Company.JasmineTechnologySolution,
    position: Position.Developer,
    location: Location.BangkokThailand,
    description:
        "Technology consulting company specializing in enterprise software solutions.",
    technologies: [nextjs, nestjs, mongodb],
    type: ExperienceType.Work,
    logo: "/logo/JTS.png",
    startDate: "2025-07-16",
};
