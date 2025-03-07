"use client";

import SectionTransition from "@/components/SectionTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

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
    {
      title: "Line",
      detail: "@nooobtimex",
      icon: FaLine,
    },
    {
      title: "LinkedIn",
      detail: "Wongsaphat Puangsorn",
      link: "https://www.linkedin.com/in/nooobtimex/",
      icon: FaLinkedin,
    },
    {
      title: "Youtube",
      detail: "NooobtimeX",
      link: "https://www.youtube.com/@nooobtimex",
      icon: FaYoutube,
    },
    {
      title: "Instagram",
      detail: "NooobtimeX",
      link: "https://www.instagram.com/nooobtimex/",
      icon: FaInstagram,
    },
    {
      title: "Github",
      detail: "NooobtimeX",
      link: "https://github.com/NooobtimeX",
      icon: FaGithub,
    },
  ];

  return (
    <section id="contact" className="min-h-screen mx-auto">
      <div className="pt-10 lg:pt-24">
        <h2 className="text-center text-4xl font-bold text-primary mb-8">
          CONTACT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <SectionTransition key={index}>
                <Card className="shadow-sm">
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
                      <span>{detail.detail}</span>
                    </div>
                  </CardContent>
                </Card>
              </SectionTransition>
            );
          })}
        </div>
      </div>
    </section>
  );
}
