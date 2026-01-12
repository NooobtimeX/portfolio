import { Company, ExperienceId, ExperienceType, Location, Position } from "@/enum";
import type { Experience } from "@/interface";
import {
    css,
    facebookAds,
    googleAds,
    googleAnalytics,
    seo,
    woocommerce,
    wordpress,
} from "../technologies";

export const ruamsukPlatingJunior: Experience = {
    id: ExperienceId.RuamsukPlatingJunior,
    company: Company.RuamsukPlating,
    position: Position.JuniorITSupport,
    location: Location.BangkokThailand,
    description:
        "Developing WordPress websites and managing digital marketing campaigns for a leading trophy and award manufacturing company.",
    technologies: [
        wordpress,
        woocommerce,
        css,
        seo,
        googleAnalytics,
        googleAds,
        facebookAds,
    ],
    type: ExperienceType.Work,
    logo: "/logo/RSTROPHY.png",
    startDate: "2021-08-01",
    endDate: "2025-04-30",
};
