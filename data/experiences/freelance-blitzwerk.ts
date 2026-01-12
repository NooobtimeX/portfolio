import { Company, ExperienceId, ExperienceType, Location, Position } from "@/enum";
import type { Experience } from "@/interface";
import { nextjs, nodejs, postgresql, prisma, typescript } from "../technologies";

export const freelanceBlitzwerk: Experience = {
    id: ExperienceId.FreelanceBlitzwerk,
    company: Company.FreelanceWithFriends,
    position: Position.FullStackDeveloper,
    location: Location.Remote,
    description:
        "Collaborative freelance work developing modern web applications for various clients.",
    technologies: [nextjs, typescript, nodejs, postgresql, prisma],
    type: ExperienceType.Freelance,
    logo: "/logo/blitzwerk.png",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
};
