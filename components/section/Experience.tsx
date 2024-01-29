"use client";

import SectionTransition from "@/components/SectionTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkingExperience() {
  const experiences = [
    {
      company: "JOB POSITION APPLIED FOR",
      start: "Aug 2025",
      end: "Present",
      logo: "/logo/next.png",
      jobtype: "Full-Time",
      details: ["Frontend Developer (NEXT JS, React js)"],
    },
    {
      company: "Blitzwerk Innovation",
      start: "Jan 2025",
      end: "Present",
      logo: "/logo/blitzwerk.png",
      jobtype: "Freelance",
      details: ["Full stack developer", "Basic accountant"],
    },
    {
      company: "RUAMSUK PLATING LIMITED PARTNERSHIP",
      start: "Aug 2021",
      end: "Present",
      logo: "/logo/RSTROPHY.png",
      jobtype: "Part-Time",
      details: [
        "WordPress Developer",
        "SEO Analyst for programmer",
        "Marketing Support",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen container mx-auto">
      <div className="pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          Working Experience
        </h2>
        <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <SectionTransition key={index}>
              <Card className="shadow-sm h-full lg:grid grid-cols-8">
                <CardHeader className="flex items-center space-x-4 col-span-3">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={200}
                    height={200}
                    className="rounded-2xl mx-auto"
                  />
                </CardHeader>
                <CardContent className="col-span-5 my-auto">
                  <CardTitle className="flex flex-col text-center mb-4">
                    <span className="text-xl font-bold">{exp.company}</span>
                  </CardTitle>
                  <div className="flex flex-col space-y-2">
                    <span>
                      {exp.start} - {exp.end} | {exp.jobtype}
                    </span>
                    {exp.details && (
                      <ul className="list-disc ml-5 space-y-1">
                        {exp.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
