"use client";

import SectionTransition from "@/components/SectionTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaDiscord, FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      title: "Facebook",
      detail: "Woongsaphat Puangsorn",
      link: "https://www.facebook.com/xnooobtime",
      icon: FaFacebook,
      recommend: true,
    },
    {
      title: "Discord",
      detail: "NooobtimeX",
      icon: FaDiscord,
      recommend: true,
    },
    {
      title: "Mail",
      detail: "nooobtimex@gmail.com",
      link: "mailto:nooobtimex@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Phone number",
      detail: "+66 85 587 7024",
      link: "tel:+66855877024",
      icon: FaPhone,
    },
  ];

  return (
    <section id="contact" className="min-h-screen container mx-auto">
      <div className="pt-16 md:pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          CONTACT
        </h2>
        <div className="flex flex-col items-center mb-8">
          <img
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full border-2 border-primary p-1"
            width="200"
            height="200"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const cardContent = (
              <Card className="transition transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon className="text-xl" />
                    <h3>{detail.title}</h3>
                    {detail.recommend && (
                      <Badge variant="secondary" className="rounded-2xl">
                        Recommended
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    <span className="text-lg">{detail.detail}</span>
                  </div>
                </CardContent>
              </Card>
            );
            return detail.link ? (
              <a
                key={index}
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <SectionTransition>{cardContent}</SectionTransition>
              </a>
            ) : (
              <SectionTransition key={index}>{cardContent}</SectionTransition>
            );
          })}
        </div>
      </div>
    </section>
  );
}
