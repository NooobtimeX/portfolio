"use client";

import SectionTransition from "@/components/SectionTransition";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function VerticalTimeline01() {
  const data = [
    {
      company: "Blitzwerk Innovation",
      logo: "/logo/blitzwerk.png",
      jobs: [
        {
          title: "Full stack developer",
          start: "Jan 2025",
          end: "Present",
          jobtype: "Freelance",
          skills: ["next js", "typescript", "node.js", "postgresql", "prisma"],
          description:
            "Develop and maintain full-stack web applications using modern frameworks.",
        },
        {
          title: "Basic accountant",
          start: "Jan 2025",
          end: "Present",
          jobtype: "Freelance",
          skills: [
            "excel",
            "google sheet",
            "financial reporting",
            "google locker studio",
          ],
          description:
            "Manage financial reports and ensure accurate accounting using Excel and Google Sheet.",
        },
      ],
    },
    {
      company: "RUAMSUK PLATING LIMITED PARTNERSHIP",
      logo: "/logo/RSTROPHY.png",
      jobs: [
        {
          title: "WordPress Developer",
          start: "Aug 2021",
          end: "Present",
          jobtype: "Part-Time",
          skills: ["wordpress", "woocommerce", "css"],
          description:
            "Develop WordPress websites and customize WooCommerce plugins.",
        },
        {
          title: "SEO Analyst for programmer",
          start: "Aug 2021",
          end: "Present",
          jobtype: "Part-Time",
          skills: ["seo", "google analytics"],
          description:
            "Analyze and improve SEO strategies with data-driven insights.",
        },
        {
          title: "Marketing Support",
          start: "Aug 2021",
          end: "Present",
          jobtype: "Part-Time",
          skills: ["google ads", "facebook ads"],
          description:
            "Support marketing campaigns across social media and online platforms.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen mx-auto">
      <div className="pt-10 lg:pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          EXPERIENCE
        </h2>
        <div className="mx-auto gap-4 grid">
          {data.map((companyData, companyIndex) => (
            <SectionTransition key={companyIndex}>
              <Card className="p-4">
                {/* Company label displayed once */}
                <div className="mb-2 font-caveat text-2xl font-medium text-primary">
                  {companyData.company}
                </div>
                {companyData.jobs.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="group relative py-4 pl-8 sm:pl-32"
                  >
                    {/* Time + Title */}
                    <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]">
                      <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold uppercase text-purple-600 sm:absolute sm:mb-0">
                        {job.start}
                      </time>
                      <div className="text-xl font-bold">
                        {job.title} <Badge>{job.jobtype}</Badge>
                      </div>
                    </div>
                    {/* Job Description */}
                    {job.description && (
                      <p className="mb-2 text-sm text-gray-600">
                        {job.description}
                      </p>
                    )}
                    {/* Skills */}
                    <div className="space-x-1 space-y-1">
                      {job.skills &&
                        job.skills.map((skill, index) => (
                          <Badge key={index} variant={"secondary"}>
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
